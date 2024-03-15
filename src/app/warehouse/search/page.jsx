"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "./search.svg"

import ProductCard from "./productcard";
import "./search.css";
import SideNav from "@/components/sidenav";
import Navbar from "@/components/navbar";


export default function search() {
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
        return <div className="flex mt-64 items-center justify-center">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
           
              <svg fill='none' className="w-56 h-56 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                <path clip-rule='evenodd'
                  d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                  fill='currentColor' fill-rule='evenodd' />
              </svg>
      
           
          <div>Loading ...</div>
        </div>
      </div>;
    }

  return (
    <>
      <Navbar />
      <div className="flex">
      <SideNav />
      <div className="m-auto">
        <div className="search m-auto">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Products"
          />
          <Image
          src={SearchIcon}
          alt="search"
          onClick={() => searchProducts(searchTerm)}
        />
        </div>

        {/* Ternary Operator */}
        {products?.length > 0 ? (
          <div className="container flex m-auto">
            {products.map((product) => (
              <ProductCard movie={product} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No products found</h2>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
