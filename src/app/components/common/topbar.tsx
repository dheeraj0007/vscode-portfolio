import Image from "next/image";

const TopBar = () => {
  return (
    <div className="h-8  items-center py-2 bg-[#21272d]  text-white text-sm ">
      <div className="flex space-x-5 ">
        <Image
          src="/icons/vscode_icon.svg"
          alt="vs code"
          height={15}
          width={15}
          className="ml-1"
        />
        <button>File</button>
        <button>Edit</button>
        <button>View </button>
        <button>Go</button>
        <button>Run</button>
        <button>Terminal</button>
        <button>Help</button>
      </div>
      <div className="text-center absolute top-2 left-[45%] hidden md:block">
        Dheeraj Gulati - Visual Studio Code
      </div>
      <div className="space-x-2 mr-2 absolute right-0 top-2">
        <button className="bg-yellow-400 rounded-full h-3 w-3"></button>
        <button className="bg-green-400 rounded-full h-3 w-3"></button>
        <button className="bg-red-400 rounded-full h-3 w-3"></button>
      </div>
    </div>
  );
};

export default TopBar;
