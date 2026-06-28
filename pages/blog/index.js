import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Alerts from '../../components/Alerts'
import styles from '../../styles/Blog.module.scss'
import { getAllPosts } from '../../lib/posts'

export default function BlogIndex({ posts }) {
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
          <ul className={styles.posts}>
            {posts.map(post => (
              <li key={post.slug} className={styles.post}>
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
                    {post.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
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
