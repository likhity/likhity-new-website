import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import styles from '../../styles/BlogPost.module.scss'
import { getAllPosts, getPostContent } from '../../lib/posts'

export default function BlogPost({ frontmatter, mdxSource }) {
  const authorUsernames = frontmatter.authors || ['likhity']
  const [authorData, setAuthorData] = useState(undefined)

  useEffect(() => {
    Promise.all(
      authorUsernames.map(username =>
        fetch(`https://api.github.com/users/${username}`).then(r => r.json())
      )
    ).then(setAuthorData)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={frontmatter.description || ''} />
        <title>{frontmatter.title} - Likhit Vyas</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>
      <main className="main">
        <NavBar animation={false} />
        <section className={styles.blogPost}>
          <div className={styles.heading}>
            <Link href="/blog">
              <a className={styles.backLink}>← All Posts</a>
            </Link>
            <div className='d-flex align-items-center justify-content-between'>
              <div className={styles.title}>
                <h1>{frontmatter.title}</h1>
              </div>
              <p className={styles.headerDate}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            {frontmatter.tags && (
              <div className={styles.tags}>
                {frontmatter.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.postBody}>
            <div className={styles.authors}>
              <h3>Author{authorUsernames.length > 1 ? 's' : ''}</h3>
              {authorData
                ? authorData.map(user => (
                    <div key={user.node_id} className={styles.author}>
                      <Image width={30} height={30} src={user.avatar_url} alt={`${user.login} GitHub avatar`} />
                      <a href={user.html_url}>{user.login}</a>
                    </div>
                  ))
                : authorUsernames.map(username => (
                    <div key={username} className={styles.author}>
                      <Image width={30} height={30} src={`https://avatars.githubusercontent.com/${username}`} alt={`${username} GitHub avatar`} />
                      <a href={`https://github.com/${username}`}>{username}</a>
                    </div>
                  ))
              }
            </div>
            <div className={styles.content}>
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { frontmatter, content } = getPostContent(params.slug)
  const mdxSource = await serialize(content)
  return { props: { frontmatter, mdxSource } }
}
