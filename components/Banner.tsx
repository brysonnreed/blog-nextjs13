import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10 lg:items-center">
      <div>
        <h1 className="text-7xl">Bryson's Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#7289da] ">
            Every Persons
          </span>{" "}
          favorite blog
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-full">
        Explore the latest Trends | Newest Products | What's going on in the
        world
      </p>
    </div>
  );
}

export default Banner;
