import { FaCodeBranch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { RiNextjsFill } from "react-icons/ri";
import { RiCheckDoubleLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import StyledButton from "../ui/button";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-[100%] h-7 flex justify-between  items-center  bg-black text-white text-sm">
      <div className="flex items-center space-x-5 text-sm">
        <StyledButton>
          <Link
            href="https://github.com/dheeraj0007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-2 ml-2 items-center"
          >
            <FaCodeBranch className="text-white" />
            <span>main</span>
          </Link>
        </StyledButton>
        <div className="flex items-center space-x-2">
          <StyledButton>
            <div className="flex items-center">
              <IoIosCloseCircleOutline className="text-white mr-1" />
              <span>0</span>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex items-center">
              <CiWarning className="text-white mr-1" />
              <span>0</span>
            </div>
          </StyledButton>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-sm mr-2">
        <StyledButton>
          <div className="flex items-center space-x-2">
            <RiNextjsFill className="text-white" />
            <span>Powered by Next.js</span>
          </div>
        </StyledButton>
        <StyledButton>
          <div className="flex items-center space-x-2">
            <RiCheckDoubleLine className="text-white" />
            <span>Prettier</span>
          </div>
        </StyledButton>
        <StyledButton>
          <IoIosNotificationsOutline className="text-white text-base " />
        </StyledButton>
      </div>
    </div>
  );
};

export default Footer;
