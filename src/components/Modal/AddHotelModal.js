import React, { useEffect, useRef } from "react";
import { useHotel } from "../../context/HotelContext";
import Button from "../Button/Button";
import { BsCheck2 } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const AddHotelModal = () => {
  const {
    hotelName,
    handleSubmitHotel,
    setHotelName,
    addedButton,
    setAddedButton,
    setOpenAddHotelModal,
  } = useHotel();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    if (hotelName.length > 0) {
      setAddedButton(false);
    }
  }, [hotelName]);

  useEffect(() => {
    setAddedButton(false);
  }, []);

  return (
    <div className="fixed h-full w-full z-40 inset-0 bg-black/50 flex justify-center items-center">
      <div className="relative p-2">
        <div className="absolute top-0 right-0">
          <Button
            className="delete-modal-cancel-btn"
            onClick={() => {
              setOpenAddHotelModal(false);
            }}
          >
            <BiX className="delete-modal-cancel" />
          </Button>
        </div>
        <div className="w-auto min-w-[400px] min-h-[350px] bg-white h-auto p-10 rounded-md">
          <form onSubmit={handleSubmitHotel} className="flex flex-col gap-2">
            <div className="flex flex-col gap-5">
              <label htmlFor="hotelName" className="text-2xl">
                Otel Adı
              </label>
              <input
                className="border border-input-border p-3 py-5 text-[18px] outline-none rounded-sm"
                value={hotelName}
                ref={inputRef}
                type="text"
                placeholder="Lütfen otel adı girin"
                onChange={(e) => setHotelName(e.target.value)}
              />
            </div>

            {addedButton ? (
              <div className="flex justify-end py-3 text-xl">
                <Button variant="success">
                  <span>
                    <BsCheck2 />
                  </span>
                  EKLENDİ
                </Button>
              </div>
            ) : (
              <div className="flex justify-end py-3">
                <Button variant="primary">EKLE</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotelModal;
