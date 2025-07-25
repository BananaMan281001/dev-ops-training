export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Hachiroku Motorsports</h1>
      <div className="space-x-6">
        <a href="#" className="hover:text-red-500">Home</a>
        <a href="#" className="hover:text-red-500">Customer Cars</a>
        <a href="#" className="hover:text-red-500">Contact</a>
      </div>
    </nav>
  )
}