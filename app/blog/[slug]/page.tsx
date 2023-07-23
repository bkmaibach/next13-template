import styles from "./page.module.css"
import { Cormorant_SC } from "next/font/google"


interface Post {
  title: string
  content: string
  slug: string
}

interface IBlogPostPageProps {
  params: { slug: string }
}

const cormorantSc = Cormorant_SC({
  weight: "600",
  subsets: ["latin"],
})

// Rebuild every n seconds using incremental static regeneration
export const revalidate = 420

export async function generateStaticParams () {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then( (res) => res.json() )

  // The return value here is an array of param objects ( { slug: string } )
  // This tells next all of the possible params for this component, giving it everything it needs to generate
  // all variations of this component at build time.

  return posts.map((post) => ({
    slug: post.slug
  }))
}


export default async function BlogPostPage ({ params }: IBlogPostPageProps) {

  // Use control + space to see all of the available strings for cache
  const posts: Post[] = await fetch("http://localhost:3000/api/content", { cache: "force-cache" }).then( (res) => res.json() )

  const post: Post = posts.find((posts) => posts.slug === params.slug)!
  return (

    <main className={`${styles.main}`}>
      <div>
        <h1 className={`${cormorantSc.className} text-brandsecondary-600`}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </main>
  )
}