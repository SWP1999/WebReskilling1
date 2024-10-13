// eslint-disable-next-line react/prop-types
export default function ArticleTitle({ header, subheader }) {
  return (
    <div className=" flex flex-col w-3/5 place-self-start">
      <h1 className="font-bold text-[64px]">{header}</h1>
      <h3 className="text-base text-[#828282]">{subheader}</h3>
    </div>
  );
}
