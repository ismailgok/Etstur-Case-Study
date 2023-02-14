import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

const HotelContext = createContext();

const dummyData = [
  { id: nanoid(), name: "Voyage Hotel", point: 5.0 },
  { id: nanoid(), name: "Maxx Royal Hotel", point: 5.0 },
  { id: nanoid(), name: "Vogue Hotel", point: 5.0 },
  { id: nanoid(), name: "Voyage Hotel", point: 5.0 },
  { id: nanoid(), name: "Maxx Royal Hotel", point: 5.0 },
];

export const HotelContextProvider = ({ children }) => {
  const [hotelName, setHotelName] = useState("");
  const [hotels, setHotels] = useState([...dummyData]);
  const [openAddHotelModal, setOpenAddHotelModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [hotelDetail, setHotelDetail] = useState(null);
  const [addedButton, setAddedButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // pagination current page
  const [openAlert, setOpenAlert] = useState(false); // Alert state

  useEffect(() => {
    const updateHotels = localStorage.getItem("hotels");
    setHotels(JSON.parse(updateHotels) || [...dummyData]);
  }, []);

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  });

  // pagination pages
  const perPage = 5;
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginationHotels = hotels.slice(startIndex, endIndex);
  const totalPage = Math.ceil(hotels.length / perPage);
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Pagination End

  useEffect(() => {
    setHotelName("");
  }, [hotels]);

  const handleSubmitHotel = (e) => {
    e.preventDefault();
    if (hotelName) {
      setHotels([
        {
          id: nanoid(),
          name: hotelName,
          point: 5.0,
        },
        ...hotels,
      ]);

      setAddedButton(true);
    }
  };

  const increasePoint = (id) => {
    // setHotels([...hotels], {
    //   ...(hotels.find((hotel) => hotel.id === id).point += 0.1),
    // });

    setHotels((prevState) => {
      prevState.map((hotel) => {
        if (hotel.id === id) {
          hotel.point += 0.1;
        }
      });
      return [...prevState];
    });
  };

  const decreasePoint = (id) => {
    // setHotels([...hotels], {
    //   ...(hotels.find((hotel) => hotel.id === id).point -= 0.1),
    // });

    setHotels((prevState) => {
      prevState.map((hotel) => {
        if (hotel.id === id) {
          hotel.point -= 0.1;
        }
      });
      return [...prevState];
    });
  };

  const handleDeleteHotel = (hotel) => {
    setHotelDetail(hotel);
    setOpenDeleteModal(true);
  };

  return (
    <HotelContext.Provider
      value={{
        hotelName,
        handleDeleteHotel,
        setHotelName,
        hotels,
        setHotels,
        handleSubmitHotel,
        increasePoint,
        decreasePoint,
        openAddHotelModal,
        setOpenAddHotelModal,
        setOpenDeleteModal,
        openDeleteModal,
        hotelDetail,
        setHotelDetail,
        currentPage,
        pageNumbers,
        handleNextClick,
        handlePrevClick,
        paginationHotels,
        handlePageClick,
        addedButton,
        setAddedButton,
        openAlert,
        setOpenAlert,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);
