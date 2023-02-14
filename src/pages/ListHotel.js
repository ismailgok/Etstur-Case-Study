import React, { useEffect } from "react";
import { useHotel } from "../context/HotelContext";
import Hotel from "../containers/Hotel/Hotel";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Button from "../components/Button/Button";
import { BsCheck2, BsPlusSquare } from "react-icons/bs";
import AddHotelModal from "../components/Modal/AddHotelModal";
import Header from "../layouts/Header";
import Alert from "../components/Alert/Alert";

const ListHotel = () => {
  const {
    hotels,
    setHotels,
    handleNextClick,
    handlePrevClick,
    currentPage,
    handlePageClick,
    pageNumbers,
    setOpenAlert,
    paginationHotels,
    setOpenAddHotelModal,
    openAddHotelModal,
    openAlert,
  } = useHotel();

  const handleChange = (e) => {
    if (e.target.value === "increase") {
      setHotels([
        ...hotels.sort((a, b) => {
          return a.point - b.point;
        }),
      ]);
    }
    if (e.target.value === "decrease") {
      setHotels([
        ...hotels.sort((a, b) => {
          return b.point - a.point;
        }),
      ]);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setOpenAlert(false);
    }, 700);
  }, [openAlert]);

  return (
    <div className="flex min-h-[500px] h-auto flex-col gap-2  mx-auto  w-full items-center relative">
      <Header />
      <div className="flex flex-col items-start gap-2 min-w-[600px] mt-2">
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

        {openAlert && (
          <div className="fixed z-50 inset-0 top-0 right-0 flex justify-center py-40 items-start">
            <Alert
              message="Otel Silindi"
              variant="success"
              className="py-3 px-5 gap-3 flex flex-row justify-center items-center text-xl text-white"
            >
              <BsCheck2 />
            </Alert>
          </div>
        )}

        {openAddHotelModal && <AddHotelModal />}
        <form>
          <select
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            className="p-3 my-3 border-2"
          >
            <option value="DEFAULT" hidden>
              Sıralama
            </option>
            <option value="increase">Puan (Artan)</option>
            <option value="decrease">Puan (Azalan)</option>
          </select>
        </form>
      </div>
      <div className="flex flex-col gap-5 my-10 mb-20 ">
        {paginationHotels?.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div className="flex flex-row absolute bottom-0 left-0 right-0 mx-auto bg-point-bg p-3 border justify-center gap-3 text-[20px] ">
        {pageNumbers?.length > 1 && currentPage >= 2 && (
          <button
            onClick={handlePrevClick}
            className="hover:opacity-70 text-2xl"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
        )}
        {pageNumbers?.map((item, index) => (
          <button
            key={index}
            className={`${
              item === currentPage ? "font-bold" : null
            } hover:opacity-70`}
            onClick={() => {
              handlePageClick(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}

        {pageNumbers?.length > 1 && currentPage < pageNumbers?.length && (
          <button
            onClick={handleNextClick}
            className="hover:opacity-70 text-2xl"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ListHotel;
