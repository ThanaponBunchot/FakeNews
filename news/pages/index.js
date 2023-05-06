import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import { AiFillSignal } from "react-icons/ai";
import Popup from "@/components/Popup";
import { Dropdown } from "primereact/dropdown";
import months from "./months.json";
import thaiDay from "./thaiDay.json";

const Home = () => {
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear() + 543;
  const dayIndex = date.getDay();
  const thaiDayString = thaiDay.thaiDays[dayIndex];
  const thaiDateString = `วัน ${thaiDayString} ที่ ${day} ${months.thaiMonths[monthIndex]} ${year}`;

  const [type, setType] = useState([]);
  const [hightLight, setHightLight] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [lastestNews, setLastestNews] = useState([]);
  const [newDetails, setNewDetails] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://clean-ruby-panther.cyclic.app/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log("res data>", response.data.result);
        const _data = response.data.result;
        const _lastestNews = _data.sort((a, b) => b.date - a.date);
        console.log("_lastestNews", _lastestNews);
        setLastestNews(_lastestNews);
        setNewsData(_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const _highLight = newsData
      ?.filter((r) => r.category.includes(type))
      .slice(0, 1);
    setHightLight(_highLight);
  }, [type]);
  // console.log("newDetails", newDetails);
  return (
    <>
      <Nav setType={setType} popUpToggle={popUpToggle} />
      <div className="relative font-kanit">
        <div className="my-4 mx-4 flex space-x-5 relative  ">
          <div className="">
            {" "}
            {type.length === 0 ? (
              <div className="text-2xl font-bold md:text-4xl">
                เรื่องเด่นวันนี้
              </div>
            ) : (
              <div className="text-2xl font-bold md:text-4xl md:ml-5 ">
                {type}{" "}
              </div>
            )}
          </div>
          <div className="md:mx-5 my-auto md:text-xl text-sm text-slate-400 md:mt-3 mt-[2]">
            {thaiDateString}
          </div>
        </div>
        <div
          className={`flex flex-col md:grid grid-cols-2 ${
            popUpToggle === true ? "backdrop blur-sm" : ""
          }`}
        >
          <div>
            {newsData &&
              newsData
                .sort((a, b) => b.views - a.views)
                ?.filter((r) => r.category.includes(type))
                .slice(0, 1)
                ?.map((r) => (
                  <div className="shadow-lg my-2 h-[500px] overflow-hidden p-4 md:mx-auto cursor-pointer ">
                    <div className="md:flex">
                      <div className="my-auto">
                        <div className="border-b-4 border-red-500">
                          <img
                            onClick={() => {
                              setNewDetails(r);
                              setPopUpToggle(!popUpToggle);
                            }}
                            className="md:h-[320px] aspect-ratio: 4 / 3 rounded-lg my-1 mx-auto md:hover:h-[340px]"
                            src={
                              r.image_url === null
                                ? "https://t4.ftcdn.net/jpg/03/48/58/67/360_F_348586758_LzXvNDp7EMIvR98IV049VRPkUqICTbLf.jpg"
                                : r.imag_url
                            }
                          />
                        </div>
                        <div className="text-xl font-bold indent-4 pl-4 md:text-3xl py-4">
                          {r.title}
                        </div>
                        <div className="flex flex-row space-x-5 ">
                          <div className="bg-red-500 w-[70px] text-center rounded-lg text-white hidden md:block ">
                            {type}
                          </div>
                          <div className="text-slate-400 hidden md:block">
                            {thaiDateString}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="indent-12 md:opacity-0  ">{r.content}</div>
                    <div className="flex flex-col float-right  ">
                      <div className="ml-5">
                        <AiFillSignal className="text-right text-xl" />
                      </div>
                      <div className="text-sm text-slate-400">
                        {r.views.toLocaleString("en-US")}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className=" w-[95%] mx-auto gap-5 mt-4 md:mt-[-60px] md:h-[580px] md:overflow-hidden space-y-4 md:grid grid-cols-2 p-2 cursor-pointer">
            {newsData &&
              newsData
                ?.filter((r) => r.category.includes(type))
                .slice(1)
                .map((r, idx) => (
                  <div className="shadow-lg rounded-lg md:shadow-hidden my-2 h-[400px] md:h-[250px] overflow-hidden p-2 relative ">
                    <div className="md:flex flex-col">
                      <div className="my-auto">
                        <img
                          onClick={() => {
                            setNewDetails(r);
                            setPopUpToggle(!popUpToggle);
                          }}
                          className="md:h-[175px] md:mx-auto rounded-lg my-1 md:hover:h-[180px] "
                          src={
                            r.image_url === null
                              ? "https://t4.ftcdn.net/jpg/03/48/58/67/360_F_348586758_LzXvNDp7EMIvR98IV049VRPkUqICTbLf.jpg"
                              : r.imag_url
                          }
                        />
                      </div>
                      <div className="text-xl font-bold indent-4 pl-4 md:text-base md:indent-0 md:font-light">
                        {r.title}
                      </div>
                    </div>
                    <div className="indent-12 md:hidden">{r.content}</div>
                    <div className="flex flex-col float-right md:absolute md:top-[85%] md:right-1">
                      <div className="ml-5 md:ml-7">
                        <AiFillSignal className="text-right text-xl text-green-500" />
                      </div>
                      <div className="text-sm text-green-500">
                        {r.views.toLocaleString("en-US")}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div
          className={`ml-5 text-3xl font-bold hidden md:block ${
            popUpToggle === true ? "backdrop blur-sm" : ""
          }`}
        >
          {" "}
          ข่าวล่าสุด{" "}
        </div>
        <div
          className={`hidden cursor-pointer md:w-[900px] md:grid grid-cols-4 mx-10 my-4 space-y-4 gap-1 h-[430px] overflow-hidden ${
            popUpToggle === true ? "backdrop blur-sm" : ""
          }`}
        >
          {newsData
            ?.filter((r) => r.category.includes(type))
            .sort((a, b) => b.date - a.date)
            .map((r, idx) => (
              <div className="w-[80%] rounded-lg shadow-lg">
                <div>
                  <div>
                    {" "}
                    <img
                      onClick={() => {
                        setNewDetails(r);
                        setPopUpToggle(!popUpToggle);
                      }}
                      src={r.imag_url}
                      className="rounded-lg  md:hover:w-[95%]"
                    />
                  </div>
                  <div className="text-sm text-slate-700 p-1 overflow-hidden  h-[60px]">
                    {r.title}
                  </div>
                  <div className="text-sm font-light float-right mt-2  text-slate-400">
                    {r.date} เมษายน 2566
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className={`absolute top-[-50px] right-[0px] md:top-[-50px] md:right-[30%] duration-500 ${
            popUpToggle === false ? "opacity-0" : "opacity-100"
          }`}
        >
          <Popup newDetails={newDetails} setPopUpToggle={setPopUpToggle} />
        </div>
      </div>
    </>
  );
};
export default Home;
