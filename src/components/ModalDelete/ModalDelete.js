import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { useHotel } from "../../context/HotelContext";
import Button from "../Button/Button";

const ModalDelete = () => {
  const { setOpenDeleteModal,setOpenAlert, setHotels, hotelDetail, setHotelDetail } =
    useHotel();

  const handleDeleteHotel = (id) => {
    setHotels((prevState) => [...prevState.filter((hotel) => hotel.id !== id)]);
    setOpenDeleteModal(false);
  };
  return (
    <div className="fixed h-full w-full z-10 inset-0 bg-black/25 flex justify-center items-center">
      <div className="relative p-3 z-20">
        <button
          className="delete-modal-cancel-btn"
          onClick={() => {
            setOpenDeleteModal(false);
            setHotelDetail(null);
          }}
        >
          <BiX className="delete-modal-cancel" />
        </button>
        <div className="flex flex-col w-[480px] gap-10 min-h-[250px] z-0 overflow-hidden bg-white h-auto p-8 rounded-lg">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl">Oteli Sil</h1>
            <div className="py-5 text-[22px] text-center h-auto">
              <span className="text-2xl font-medium w-full h-auto">
                {hotelDetail.name}
              </span>
              'i silmek istediğinizden emin misiniz?
            </div>
          </div>
          <div className="flex justify-around gap-[16px] ">
            <Button
              variant="primary modal-btn"
              onClick={() => {
                handleDeleteHotel(hotelDetail.id);
                setOpenAlert(true)
              }}
            >
              Oteli Sil
            </Button>
            <Button
              variant="outline modal-btn"
              onClick={() => {
                setOpenDeleteModal(false);
                setHotelDetail(null);
              }}
            >
              Vazgeç
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
