import React, { useState, useEffect } from "react";
 import axios from "axios";
import WatchListItem from "./WatchListItem";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  // --- STEP 1: Introduce state for live data and loading status ---
  const [watchlistData, setWatchlistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- STEP 2: Use useEffect to fetch data from the backend ---
  useEffect(() => {
    // This function runs once when the component mounts
    axios.get("http://localhost:3002/watchlist")
      .then((res) => {
        setWatchlistData(res.data); // Store the fetched data in state
      })
      .catch((err) => {
        console.error("Failed to fetch watchlist data:", err);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after request completes
      });
  }, []); // The empty array [] ensures this runs only once.

  // --- STEP 3: The chart data now uses the state variable "watchlistData" ---
  const labels = watchlistData.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlistData.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // --- NEW: Add a loading indicator for better UX ---
  if (isLoading) {
    return <div>Loading Watchlist...</div>;
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        {/* --- STEP 3: The count now uses the state variable "watchlistData" --- */}
        <span className="counts"> {watchlistData.length} / 50</span>
      </div>

      <ul className="list">
        {/* --- STEP 3: The list now renders from the state variable "watchlistData" --- */}
        {watchlistData.map((stock, index) => {
          return <WatchListItem stock={stock} key={stock._id || index} />;
        })}
      </ul>

      {/* Only render the chart if there's data to display */}
      {watchlistData.length > 0 && <DoughnutChart data={data} />}
    </div>
  );
};

export default WatchList;

