import blogData from "@/data/blogData.json";

export default async function getPostById(id) {
  const result = blogData.find((blog) => blog.id === id);

  if (result === undefined) {
    throw new Error("Error fetching post");
  }

  return result;
}
