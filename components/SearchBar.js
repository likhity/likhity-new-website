import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { MdClose, MdExpandMore, MdExpandLess } from 'react-icons/md'
import styles from '../styles/SearchBar.module.scss'

export default function SearchBar({ allTags }) {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const isInitialized = useRef(false)
  const queryRef = useRef({})
  const containerRef = useRef(null)

  queryRef.current = router.query

  const activeTags = router.query.tags ? router.query.tags.split(',') : []

  useEffect(() => {
    if (router.isReady && !isInitialized.current) {
      isInitialized.current = true
      setInputValue(router.query.q || '')
    }
  }, [router.isReady])

  useEffect(() => {
    if (!isInitialized.current) return
    const val = inputValue
    const timer = setTimeout(() => {
      const { q: _, ...rest } = queryRef.current
      router.replace(
        { pathname: router.pathname, query: val ? { ...rest, q: val } : rest },
        undefined,
        { shallow: true }
      )
    }, 300)
    return () => clearTimeout(timer)
  }, [inputValue])

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setPanelOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleTag(tag) {
    const next = activeTags.includes(tag)
      ? activeTags.filter(t => t !== tag)
      : [...activeTags, tag]
    const { tags: _, ...rest } = queryRef.current
    router.push(
      { pathname: router.pathname, query: next.length ? { ...rest, tags: next.join(',') } : rest },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className={styles.searchBar} ref={containerRef}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputRow}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button className={styles.clearBtn} onClick={() => setInputValue('')} aria-label="Clear search">
                <MdClose />
              </button>
            )}
          </div>

          <button
            className={`${styles.tagsBtn}${activeTags.length ? ` ${styles.tagsBtnActive}` : ''}`}
            onClick={() => setPanelOpen(o => !o)}
          >
            Tags{activeTags.length > 0 ? ` (${activeTags.length})` : ''}
            {panelOpen ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </div>

        {panelOpen && (
          <div className={styles.tagsPanel}>
            {allTags.map(tag => {
              const isActive = activeTags.includes(tag)
              return (
                <button
                  key={tag}
                  className={`${styles.tagOption}${isActive ? ` ${styles.tagOptionActive}` : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  {isActive && <MdClose className={styles.tagX} />}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {activeTags.length > 0 && (
        <div className={styles.activeTags}>
          <span className={styles.tagsLabel}>Tags:</span>
          {activeTags.map(tag => (
            <button key={tag} className={styles.activeTag} onClick={() => toggleTag(tag)}>
              {tag}
              <MdClose />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
