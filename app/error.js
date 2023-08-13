"use client";

import Link from "next/link";
import style from "./home.module.css";

export default function Error() {
  return (
    <div className={style.content}>
      <div className="text-center">
        <h1 className="text-5xl">
          <span className="text-red-700">oops sorry</span>
        </h1>
        <p className="text-xl m-4">There was an Error, please try again!</p>
        <Link className={style.homeLink} href="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
