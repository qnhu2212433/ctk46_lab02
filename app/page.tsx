export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ket qua Bai thực hành 02</h1>
      <p>Server dang chay tot!</p>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
          <li><a href="/about">Gioi thieu</a></li>
          <li><a href="/projects">Du an</a></li>
          <li><a href="/contact">Lien he</a></li>
        </ul>
      </nav>
    </div>
  );
}
