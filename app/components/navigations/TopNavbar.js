import Link from "next/link";
import style from "./topNav.module.css";

export default function TopNavbar() {
  return (
    <nav className={style.topNav}>
      <Link className={style.topNavLinks} href="/">
        Home
      </Link>
      <Link className={style.topNavLinks} href="/blog">
        Blog
      </Link>
    </nav>
  );
}
