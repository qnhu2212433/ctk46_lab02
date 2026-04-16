export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-xl rounded-2xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Portfolio của [Tên Bạn]
        </h1>
        <p className="text-gray-600 mb-8">Sinh viên lớp CTK46 - ĐH Đà Lạt</p>
        
        <nav className="flex gap-4 justify-center">
          <a href="/about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Giới thiệu</a>
          <a href="/projects" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">Dự án</a>
          <a href="/contact" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition">Liên hệ</a>
        </nav>
      </div>
    </div>
  );
}