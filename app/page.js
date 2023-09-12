import MovieCard from "@components/MovieCard";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";

export default function HomePage() {
  return (
    <main className="h-full w-full font-bold">
      {/* Hero section */}
      <div className="flex flex-col hero h-full md:h-[40%] lg:h-full mb-10 px-5 md:px-10 lg:px-20">
        <NavBar />
        <Hero />
      </div>

      {/* Movie list section */}
      <div className="h-fit mb-10 px-5 md:px-10 lg:px-20 bg-redd-500">
        <div className="text-2xl font-extrabold mb-5">Featured Movies</div>
        <div className="grid grid-cols-12 gap-10">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>

      {/* Footer section*/}
      <div className="w-full text-center p-10">&copy; HNGx 2023</div>
    </main>
  );
}
