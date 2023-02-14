import React from "react";
import { useHotel } from "../context/HotelContext";
import { BsPlusSquare } from "react-icons/bs";
import AddHotelModal from "../components/Modal/AddHotelModal";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";


const AddHotel = () => {
  const { openAddHotelModal,setOpenAddHotelModal } = useHotel();
  return (
    <div className="flex w-full h-[80px] justify-center items-center bg-point-bg border mb-5">
      
      <div className="flex flex-row items-center gap-10 my-5">
        <div className="flex flex-row items-center gap-5 my-5">
        <Button 
        className="text-black flex flex-row items-center gap-3 justify-start text-xl font-bold"
        onClick={() => {
          setOpenAddHotelModal(true);
        }}
      >
        <span className="text-[32px] text-primary">
          <BsPlusSquare />
        </span>
        OTEL EKLE
      </Button>
        
        </div>
        <div className="flex flex-row gap-10 ">
          <Button className="text-xl font-semibold leading-[24px] hover:opacity-70" ><Link to="/listhotel">Otel Listele</Link></Button>
        </div>
      </div>
      {
        openAddHotelModal && <AddHotelModal  />
      }
      
    </div>
  );
};

export default AddHotel;
