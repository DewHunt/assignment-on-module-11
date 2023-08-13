import Link from "next/link";
import style from "./home.module.css";

export default function NotFound() {
  return (
    <div className={style.content}>
      <div className="text-center">
        <h1 className="text-5xl">
          <span className="text-red-700">404</span>
          <span className="text-green-700">|</span>
          <span className="text-red-700">Not Found</span>
        </h1>
        <p className="text-xl m-4">Could not find requested resource</p>
        <Link className={style.homeLink} href="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
