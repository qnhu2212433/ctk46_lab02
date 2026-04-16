import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/about">Giới thiệu</Link></li>
            <li><Link href="/projects">Dự án</Link></li>
            <li><Link href="/contact">Liên hệ</Link></li>
          </ul>
        </nav>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}

{/* Thêm dòng này vào phần <nav> của bạn */}
<Link href="/blog" className="hover:text-blue-200">Blog</Link>
<Link href="/blog" className="mr-4">Blog</Link>
<Link href="/guestbook">Lời nhắn</Link>