import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-[70vh] items-center pl-10 relative">
      <h1 className="absolute -z-10 top-24 text-[180px] font-extrabold text-gray-50 opacity-5 leading-[12rem] uppercase">
        I Build Websites
      </h1>
      <div className="flex flex-col items-start space-y-5">
        <h1 className="text-6xl font-semibold tracking-wider">
          Dheeraj Gulati
        </h1>
        <h2 className="text-2xl tracking-wider ">Full Stack Web Developer</h2>
        <div>
          <Link
            className="bg-[#f9826c] text-xl px-2 py-1 mr-5 hover:shadow-md hover:shadow-black"
            href={"/projects"}
          >
            View Work
          </Link>
          <Link
            className="border-[#f9826c] border-2 text-xl px-2 py-1 hover:shadow-md hover:shadow-black"
            href={"/contact"}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
