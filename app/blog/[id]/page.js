import getPostById from "@/lib/getPostById";
import style from "./post.module.css";

export default async function Post({ params }) {
  const id = params.id;
  const post = await getPostById(id);
  return (
    <div className={style.content}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <h5 className={style.title}>{post.title}</h5>
          <p className={style.subTitle}>
            Date:{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className={style.cardBody}>{post.content}</div>
      </div>
    </div>
  );
}
