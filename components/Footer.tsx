export default function Footer() {
  return (
    <footer className="py-4 border-t border-white">
      <div className="container mx-auto px-4 text-white text-sm">
        © {new Date().getFullYear()} Jade Mooring. All rights reserved.
      </div>
    </footer>
  )
}