/* eslint-disable react/prop-types */

export default function RelatedArticles({ albumData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {albumData.map((post) => (
        <a
          key={post.photo.id}
          className="flex flex-col text-wrap "
          href={post.photo.thumbnailUrl}
        >
          <img
            src={post.photo.url}
            alt={post.photo.title}
            className=" object-cover"
          />
          <h4 className="text-left text-xl font-medium">{post.photo.title}</h4>
          <p className="text-left text-xl font-medium text-[#828282]">
            {post.id}
          </p>
        </a>
      ))}
    </div>
  );
}
