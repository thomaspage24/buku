import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const navigationLinkClassName =
  "underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center gap-x-12 gap-y-6 border-b border-accent/30 px-8 py-6">
      <div className="flex flex-wrap items-center gap-8">
        <Link href="/" className="shrink-0 text-3xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Buku</Link>

        <nav aria-label="Main navigation" className="font-display">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            <li><Link href="/new" className={navigationLinkClassName}>New</Link></li>
            <li><Link href="/fiction" className={navigationLinkClassName}>Fiction</Link></li>
            <li><Link href="/non-fiction" className={navigationLinkClassName}>Non-Fiction</Link></li>
            <li><Link href="/collections" className={navigationLinkClassName}>Collections</Link></li>
            <li><Link href="/journal" className={navigationLinkClassName}>Journal</Link></li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-wrap items-center gap-8 md:ml-auto">
        <form
          action="/search"
          role="search"
          className="flex items-center gap-3 bg-foreground/5 px-4 py-2 focus-within:bg-foreground/10"
        >
          <label htmlFor="header-search" className="sr-only">
            Search books
          </label>
          <input
            id="header-search"
            name="q"
            type="search"
            placeholder="Search"
            className="min-w-0 w-32 bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          <button
            type="submit"
            aria-label="Search books"
            className="cursor-pointer p-1 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FiSearch size={18} aria-hidden="true" />
          </button>
        </form>
        <nav aria-label="Account and shopping">
          <ul className="flex items-center gap-6">
            <li><Link href="/account" className={navigationLinkClassName}>Account</Link></li>
            <li><Link href="/cart" className={navigationLinkClassName}>Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
