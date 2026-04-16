async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) return <div className="p-8">Không tìm thấy bài viết!</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link href="/blog" className="text-blue-500 hover:underline">← Quay lại danh sách</Link>
      <h1 className="text-3xl font-bold capitalize mt-4">{post.title}</h1>
      <p className="text-gray-400 mt-2">ID Bài viết: {post.id}</p>
      <hr className="my-6" />
      <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}