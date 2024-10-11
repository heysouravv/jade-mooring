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
          <div className="container mx-auto px-4 max-w-3xl">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">{postData.title}</h1> */}
            <div className="text-xl mb-8 text-gray-400">{postData.date}</div>
            <div 
              className="prose prose-invert prose-lg max-w-none
                         prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-4
                         prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-3
                         prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2
                         prose-p:my-4 prose-p:text-gray-300
                         prose-a:text-blue-400 hover:prose-a:text-blue-300
                         prose-strong:text-white
                         prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
                         prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5
                         prose-li:my-2 prose-li:text-gray-300
                         prose-pre:bg-gray-900 prose-pre:p-4 prose-pre:rounded
                         prose-code:text-blue-300
                         prose-blockquote:border-l-4 prose-blockquote:border-gray-700 prose-blockquote:pl-4 prose-blockquote:italic
                         prose-hr:border-gray-700"
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