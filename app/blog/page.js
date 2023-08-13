import blogData from "@/data/blogData.json";
import Link from "next/link";
import style from "./blog.module.css";

export default function Blog() {
  return (
    <div className={style.content}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <h5 className={style.cardHeaderText}>All Blog posts</h5>
        </div>
        <div className={style.cardBody}>
          <ul className={style.listUl}>
            {blogData.map((blog) => (
              <li key={blog.id} className={style.listLi}>
                <Link href={`/blog/${blog.id}`} className={style.listText}>
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
