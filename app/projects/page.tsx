import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Projects() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <header className="py-6 border-b border-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">Jade Mooring</Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-12">Projects</h1>
            <ul className="space-y-8">
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/projects/${id}`} className="block">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-gray-300 transition-colors duration-300">{title}</h2>
                    <p className="text-gray-400">{date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="py-4 border-t border-white">
        <div className="container mx-auto px-4 text-white text-sm">
          © {new Date().getFullYear()} Jade Mooring. All rights reserved.
        </div>
      </footer>
    </div>
  )
}