import React, { useEffect, useRef } from "react";
import { useHotel } from "../../context/HotelContext";
import HotelPng from "../../Images/hotel.png";
import "./Hotel.css";
import { MdCancel } from "react-icons/md";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

const Hotel = ({ hotel }) => {
  const { increasePoint, openDeleteModal, decreasePoint, handleDeleteHotel } =
    useHotel();

  const hotelRef = useRef();
  
  useEffect(() => {
    hotelRef.current.style.display = "none";
  }, [openDeleteModal]);

  const handleMouseEnter = () => {
    hotelRef.current.style.display = "inline-block";
  };
  const handleMouseLeave = () => {
    hotelRef.current.style.display = "none";
  };
  return (
    <div
      className="relative p-2"
      onMouseEnter={() => handleMouseEnter(hotel.id)}
      onMouseLeave={() => handleMouseLeave(hotel.id)}
    >
      <div className="flex hover:shadow-lg gap-10 min-w-[600px] max-w-[600px] rounded-md flex-row  h-[235px] p-3 shadow-sm border justify-center items-center">
        <button
          ref={hotelRef}
          className="absolute top-[-5px] right-[-5px] text-[25px] text-red-500 hidden"
          onClick={() => handleDeleteHotel(hotel)}
        >
          <MdCancel />
        </button>
        {openDeleteModal && <ModalDelete hotel={hotel} />}
        <div className="h-[200px] w-[300px] mr-auto">
          <img
            src="https://www.hotelrestaurantmagazine.com/wp-content/uploads/2013/02/wow3.jpg"
            className="h-full w-full object-cover rounded-md"
            alt=""
          />
        </div>

        <div className="flex flex-col ml-auto gap-[38px]  h-full">
          <div className="flex flex-col gap-[12px] ">
            <h1 className="text-hotel-title text-[30px]">{hotel.name}</h1>
            <div className="w-[275px] h-[45px] text-point rounded-md bg-point-bg flex justify-start items-center pl-[14px] ">
              {hotel.point.toFixed(1)} Puan
            </div>
          </div>
          <div className="flex flex-row text-black gap-[20px]">
            <button
              className="btn-point"
              onClick={() => increasePoint(hotel.id)}
            >
              Puan Artır
            </button>
            <button
              className="btn-point"
              onClick={() => decreasePoint(hotel.id)}
            >
              Puan Azalt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
