import { getPostData, getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="py-6 border-b border-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">Jade Mooring</Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{postData.title}</h1>
            <div className="text-xl mb-8">{postData.date}</div>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
          </div>
        </article>
      </main>

      <footer className="py-4 border-t border-white">
        <div className="container mx-auto px-4 text-white text-sm">
          © {new Date().getFullYear()} Jade Mooring. All rights reserved.
        </div>
      </footer>
    </div>
  )
}