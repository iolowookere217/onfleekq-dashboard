import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { VscBellDot } from "react-icons/vsc";
import { FiSearch, FiUser } from "react-icons/fi";
import { MdLogout, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SuccessToast } from "../utils/toast";
import AppInputIcons from "./inputs/input-icons";
import Logo from "/onfleekq_logo1.png";
import profile from "/Ellipse7.png";

const Header = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const pathName = location.pathname.split("/");
  const isDynamic = pathName.some((segment) => /:\w+/.test(segment));

  const handleLogout = () => {
    navigate("/auth/login");
    SuccessToast("Logout Successful!");
  };

  return (
    <Flex
      justifyContent="space-between"
      gap="1rem"
      alignItems="center"
      userSelect="none"
    >
      <div className="flex gap-8 justify-between items-center">
        <AppInputIcons
          placeholder="Search"
          width="24rem"
          value={value}
          setValue={setValue}
          leftChildren={<FiSearch />}
        />
        <div className="flex justify-between gap-8 text-blue-950 font-semibold">
          <a href="">
            <p>feedback</p>
          </a>
          <a href="">
            <p>Contact</p>
          </a>
          <a href="">
            <p>help</p>
          </a>
        </div>
      </div>
      <div className="text-red-300 text-xl flex gap-6 items-center ">
        <VscBellDot />
        <img src={profile} alt="Profile Image" className="w-[2rem] mr-6" />
      </div>
    </Flex>
  );
};

export default Header;
