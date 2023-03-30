import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import SideCart from "../SideCart/SideCart";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const PlayersRoom = () => {
  const [playersData, setPlayersData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("players.json");
        const { data } = response;
        setPlayersData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-8">
      <div className="grid md:grid-cols-6 gap-8">
        <div className="md:col-span-4 mb-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            Select Your Best Eleven
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {playersData.map((singleData, index) => (
              <SinglePlayer key={index} singleData={singleData} />
            ))}
          </div>
        </div>
        <div className="md:col-span-2 border rounded-md">
          <SideCart cartData={cartData} />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default PlayersRoom;
