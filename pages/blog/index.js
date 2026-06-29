import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Alerts from '../../components/Alerts'
import styles from '../../styles/Blog.module.scss'
import { getAllPosts } from '../../lib/posts'
import { BsPinAngleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

export default function BlogIndex({ posts }) {
  const router = useRouter()
  const { tags } = router.query

  const activeTags = tags ? tags.split(',') : []
  const visiblePosts = activeTags.length
    ? posts.filter(p => activeTags.some(tag => p.tags?.includes(tag)))
    : posts

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Blog posts by Likhit Vyas on software engineering, AI, and robotics." />
        <title>Blog - Likhit Vyas</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');`}
          {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');`}
        </style>
      </Head>
      <main className="main">
        <section className={styles.blogSection}>
          <NavBar animation={false} />
          <h1 className="text-center">My <span className="accent">Musings.</span></h1>
          {tags && (
            <div className={styles.filterTags}>
              Tags:
              {activeTags.map(tag => (
                <p key={tag} className={styles.filterTag}>
                  {tag}
                  <Link href={`/blog?tags=${activeTags.filter(t => t !== tag).join(',')}`}>
                    <a><MdClose /></a>
                  </Link>
                </p>
              ))}
            </div>
          )}
          <ul className={styles.posts}>
            {visiblePosts.map(post => (
              <li key={post.slug} className={`${styles.post}${post.pinned ? ` ${styles.pinned}` : ''}`}>
                {post.pinned && <BsPinAngleFill className={styles.pinIcon} />}
                <p className={styles.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <h3>
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h3>
                {post.description && <p className={styles.postDescription}>{post.description}</p>}
                {post.tags && (
                  <div className={styles.tags}>
                    {post.tags.map(tag => (
                      <Link href={`/blog?tags=${encodeURIComponent(tag)}`} key={tag}>
                        <a className={styles.tag}>{tag}</a>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Alerts />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
