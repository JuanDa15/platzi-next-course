import Link from "next/link";

export default function Navbar (): JSX.Element {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <Link href="/" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}>
            About
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          .nav__links {
            display: flex;
            flex-direction: row;
            gap: 1rem;
          }
        `}
      </style>
    </nav>
  )
}