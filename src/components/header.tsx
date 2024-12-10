import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link href="/">Avion</Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product-listing">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/basket">Basket</Link></li>
        </ul>
      </nav>
    </header>
  );
}
