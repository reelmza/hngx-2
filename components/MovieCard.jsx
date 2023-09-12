import Image from "next/image";
const MovieCard = () => {
  return (
    <div className="flex flex-col col-span-6 md:col-span-4 lg:col-span-3">
      {/* Cards image */}
      <div className="h-[400px] overflow-hidden mb-2">
        <Image
          src="/images/poster.png"
          alt="Movie poster image"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Card name */}
      <div className="font-bold text-lg leading-none">Movie name</div>

      {/* Release year */}
      <div className="text-gray-600 font-normal">Released: April, 2023</div>
    </div>
  );
};

export default MovieCard;
