import { useEffect, useState } from "react";
import ArticleTitle from "./ArticleTitle";
import RelatedArticles from "./RelatedArticles";

function HomePage() {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => {
        setAlbumData(data);
      });
  }, []);
  const post1 = albumData[0];
  const post2 = albumData[1];
  const post3 = albumData[2];
  const posts = albumData.slice(3);
  console.log(post1);
  return (
    <div className="flex flex-col bg-white  px-20 mt-20 gap-5 justify-center items-center">
      <ArticleTitle
        header="Posts List"
        subheader={
          " Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading"
        }
      />
      <div className="flex justify-center items-center">
        {post1 && (
          <img
            key={post1.photo.id}
            src={post1.photo.url}
            className=" w-fit max-h-[650px] max-w-full cursor-default"
            alt={post1.photo.title}
          />
        )}
      </div>

      <p
        className="flex text-balance whitespace-normal w-fit font-medium max-width-[850px] break-words"
        key={post1?.id}
      >
        {post1?.body}
      </p>
      <div className=" flex flex-row flex-wrap items-center justify-center gap-2">
        {post2 && (
          <img
            key={post2.photo.id}
            src={post2.photo.url}
            className=" w-fit max-h-[650px] max-w-full "
            alt={post2.photo.title}
          />
        )}
        {post3 && (
          <img
            key={post3.photo.id}
            src={post3.photo.url}
            className=" w-fit max-h-[650px] max-w-full"
            alt={post3.photo.title}
          />
        )}
      </div>

      <p
        className="flex text-balance whitespace-normal w-fit font-medium max-w-[850px] "
        key={post3?.id}
      >
        {post3?.body}
      </p>
      <h1 className="font-semibold text-4xl place-self-start">
        Related articles or posts
      </h1>

      <RelatedArticles albumData={posts}></RelatedArticles>
    </div>
  );
}

export default HomePage;
