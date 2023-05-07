import { ImCancelCircle } from "react-icons/im";

const Popup = ({ newDetails, setPopUpToggle,isDarkMode }) => {
  return (
    <>
   
      <div className={`${isDarkMode===true?"bg-slate-800":"bg-white"} w-[380px] md:w-[600px] rounded-lg aspect-ratio: 4/3 p-2 mt-[150px] `}>
        <div
          onClick={() => setPopUpToggle(false)}
          className="cursor-pointer float-right m-4"
        >
          <ImCancelCircle className="text-xl text-red-500" />
        </div>
        <div className=""><img className="rounded-lg" src={newDetails.imag_url}/></div>
        <div className={`p-4 text-xl font-bold ${isDarkMode===true?"text-white":"text-black"} `}>{newDetails.title}</div>
        <div className="p-4 border-b-4 border-rose-500">{newDetails.content}</div>
      </div>
    
    </>
  );
};
export default Popup;
