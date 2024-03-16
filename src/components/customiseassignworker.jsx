"use client";
import React, { useState, useEffect } from "react";
import WorkerCard from "./workercard";
import SearchIcon from "./search.svg";
import Image from "next/image";
// import "./search.css";

const AssignWorkerForm = () => {
  //   const [totalSpace, setTotalSpace] = useState("");
  //   const [goldzoneSize, setGoldzoneSize] = useState("");
  //   const [smallSortableSize, setSmallSortableSize] = useState("");
  //   const [largeSortableSize, setLargeSortableSize] = useState("");
  //   const [largeNonSortableSize, setLargeNonSortableSize] = useState("");
  //   const [numberOfSubsections, setNumberOfSubsections] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // You can handle form submission here
  //     console.log("Form submitted!");
  //   };

  useEffect(() => {
    searchProducts("Batman");
  }, []);
  const API_URL = "https://www.omdbapi.com??i=tt3896198&apikey=b6003d8a";
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const searchProducts = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setProducts(data.Search);
  };

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     () => searchMovies(searchTerm)
  //   }
  // }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      setData("Welcome to gfg!");
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex mt-64 items-center justify-center w-[100vw]">
        <div className="flex w-[90e] justify-center items-center space-x-1 text-sm text-gray-700 rounded-xl">
          <svg
            fill="none"
            className="w-56 h-56 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[80vw] h-[120vh] overflow-scroll m-auto bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800">
      <h1 className="text-2xl text-center underline mb-5">
        Select Workers
      </h1>
      <div>
        <div className="flex">
          <div className="m-auto">

            {/* Ternary Operator */}
            {products?.length > 0 ? (
              <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto w-[80%] ">
                {products.map((product) => (
                  <WorkerCard className={"mt-10 p-10"}  movie={product} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No products found</h2>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssignWorkerForm;
