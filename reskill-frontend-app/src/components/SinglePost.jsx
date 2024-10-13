import ArticleTitle from "./ArticleTitle";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <div className="flex flex-row justify-between px-20">
      <div className="bg-white h-full flex flex-col size-1/2 ">
        <ArticleTitle header={post?.title} subheader={post?.body} />
        <p className="text-wrap">{post?.body}</p>
      </div>
      <div className="flex flex-wrap">
        <img src={post?.photo?.url}></img>
      </div>
    </div>
  );
}
