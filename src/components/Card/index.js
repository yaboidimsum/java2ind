import Image from "next/image";

const Card = ({ image, name, title }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Image src={image} alt="..." width={200} height={200} className="rounded-full" />
      <h2 className="font-semibold text-3xl text-white">{name}</h2>
      <h3 className="text-xl text-white">{title}</h3>
    </div>
  );
};

export default Card;
