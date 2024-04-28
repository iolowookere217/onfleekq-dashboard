import { Button } from "@chakra-ui/react";
import Chart from "./chart";
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai";
import { FcAreaChart } from "react-icons/fc";
import { FaPlayCircle } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { TfiTime } from "react-icons/tfi";
import { FaStar } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SpendingProgress from "../../components/spending-progress";
import Logo from "/jane.png";
import Card from "/card.jpg";
import Chart2 from "./chart2";
import { GiShoppingBag } from "react-icons/gi";
import { RiNetflixFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa6";
import { BsPlusSquareFill } from "react-icons/bs";

const Finance = () => {
  return (
    <main className=" bg-yellow py-4 px-2 sm:px-4 md:px-6 rounded-md space-y-8 ">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center justify-between gap-8">
            <div className="rounded  shadow-lg flex  items-center justify-center  gap-2 w-full h-auto p-2 bg-[#F5F5FC]">
              <AiOutlineLineChart className="text-5xl text-blue-500" />
              <div className="flex flex-col ">
                <p>Visitors</p>
                <p className="font-semibold ">10,320</p>
              </div>
            </div>
            <div className="rounded shadow-lg flex  items-center justify-center  gap-2 w-full h-auto p-2 bg-[#F5F5FC]">
              <FcAreaChart className="text-5xl" />
              <div className="flex flex-col ">
                <p>Customers</p>
                <p className="font-semibold ">4,628</p>
              </div>
            </div>
            <div className="rounded shadow-lg flex  items-center justify-center  gap-2 w-full h-auto p-2 bg-[#FF392B]">
              <AiOutlineAreaChart className="text-5xl text-white" />
              <div className="flex flex-col text-white ">
                <p>Orders</p>
                <p className="font-semibold ">2,980</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg items-start justify-between gap-4 rounded-lg bg-[#F5F5FC]">
            <div className="flex w-full justify-between items-center pt-4 pr-4">
              <p className="text-[#434343] text-sm font-medium pl-6">
                Statistics
              </p>
              <select
                name="duration"
                id="duration"
                className="text-xs bg-white p-2 rounded-xl text-[#3326AE] font-bold"
              >
                <option value="daily">Year</option>
                <option value="weekly">Month</option>
                <option value="monthly">Week</option>
              </select>
            </div>
            <Chart />
          </div>
          <div className="flex items-center  shadow-lg justify-between gap-4">
            <div className="flex flex-col shadow-lg items-start justify-between gap-4 rounded-lg bg-[#FFFFFF]">
              <div className="flex w-full justify-between items-center pt-4 pr-4">
                <p className="text-[#434343] text-sm font-medium pl-6">
                  Spent time
                </p>
                <div className="rounded  flex  items-center justify-center  w-auto h-auto py-1 px-2 bg-[#FF392B]">
                  <p className=" text-xs text-white">4h 26min</p>
                </div>
              </div>
              <Chart2 />
            </div>

            <div className=" flex flex-col rounded shadow-lg p-4 gap-2 w-full h-full bg-[white]">
              <div className="flex gap-4">
                <div>
                  <img src={Logo} alt="Logo" className="w-[2.5rem]" />
                </div>
                <div className="flex flex-col ">
                  <p>Lily Donovan</p>
                  <p className="text-sm text-[#C4BDD5] ">business trainer</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#000013]">
                {" "}
                How to properly manage your personal budget?
              </p>

              <div className="flex gap-4 self-start justify-between ">
                <p className="text-xs  font-medium flex items-center gap-1">
                  <FaPlayCircle className="text-[#3326AE] text-xs" />
                  Video
                </p>
                <p className="text-xs  flex items-center gap-1">
                  <TfiTime className="text-[#00C3F8] text-xs" />
                  15mins
                </p>
                <p className="text-xs flex items-center gap-1">
                  <FaStar className="text-[#FF392B] text-xs" />
                  12 likes
                </p>
              </div>
              <div className="flex w-full justify-between items-center pt-4 pr-4">
                <p className="text-[#000013] text-sm font-medium ">
                  5 days ago
                </p>

                <button className="text-white text-xs bg-[#3326AE] rounded-xl py-1 px-2">
                  <div className="flex gap-2 items-center">
                    <p>Connect</p>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md py-1 px-4 shadow-md space-y-2 w-full  text-gray-blue bg-[#F5F5FC]">
          <div className="flex relative left-[17rem] top-[2rem] flex-col gap-4 w-full justify-between items-start">
            <div className="items-start flex ">
              <BiEditAlt />
            </div>
            <div className="rounded  flex  items-center justify-center  w-auto h-auto py-1 px-2 bg-[#3326AE]">
              <p className="text-white">10,320</p>
            </div>
          </div>
          <SpendingProgress />
          <div className="flex w-full justify-between items-end  pr-4">
            <p className="text-[#000013] text-sm font-medium ">My card</p>
            <div className="text-bold text-2xl">..</div>
          </div>

          <div>
            <img src={Card} alt="Debit Card" className="w-full rounded-lg" />
          </div>

          <div className="flex w-full justify-between items-center pt-4 pr-4">
            <p className="text-[#000013] text-sm font-medium ">Transaction</p>
            <BsPlusSquareFill className="text-2xl text-[#FF392B]" />
          </div>
          <div className="flex w-full justify-between items-center pt-4 pr-4">
            <div className="flex gap-4 text-xs">
              <FaTaxi className="text-2xl text-[#FF392B]" />
              <div className="flex flex-col ">
                <p>Taxi</p>
                <p className="text-xs text-[#C4BDD5] ">01:21 PM</p>
              </div>
            </div>
            <p className="text-[#000013] text-xs  ">-$9,20</p>
          </div>
          <div className="flex w-full justify-between items-center pt-4 pr-4">
            <div className="flex gap-4 text-xs items-center">
              <GiShoppingBag className="text-2xl text-[#FF392B]" />
              <div className="flex flex-col ">
                <p>Shopping</p>
                <p className="text-xs text-[#C4BDD5] ">11:15 AM</p>
              </div>
            </div>
            <p className="text-[#000013] text-xs  ">-$142,00</p>
          </div>
          <div className="flex w-full justify-between items-center pt-4 pr-4">
            <div className="flex gap-4 text-xs">
              <RiNetflixFill className="text-2xl text-[#FF392B]" />

              <div className="flex flex-col ">
                <p>Netflix</p>
                <p className="text-xs text-[#C4BDD5] ">Jan 10, 2020</p>
              </div>
            </div>
            <p className="text-[#000013] text-xs  ">-$24,99</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Finance;
