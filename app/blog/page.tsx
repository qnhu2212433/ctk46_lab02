import Link from "next/link";

// 1. Hàm lấy dữ liệu (Data Fetching)
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Không thể tải bài viết");
  return res.json();
}

// 2. Component phải có chữ "export default" ở đầu
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Blog Cá Nhân (Lab 3)</h1>
      <div className="grid gap-4">
        {/* Chỉ lấy 10 bài viết đầu tiên */}
        {posts.slice(0, 10).map((post: any) => (
          <div key={post.id} className="p-4 border rounded shadow-sm hover:bg-gray-50 transition">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold capitalize text-blue-500 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mt-2">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}