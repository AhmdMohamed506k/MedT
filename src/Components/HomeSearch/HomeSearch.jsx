import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import style from "./HomeSearch.module.css";
import { IoSearchOutline } from 'react-icons/io5';
import { LuLoaderCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export default function HomeSearch({ setShowSearch, setIsExiting }) {
  const [isSeachExiting, setIsSeachExiting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allTerms, setAllTerms] = useState([]); 
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);

  
  const [isCatOpen, setIsCatOpen] = useState(false); 
  const [categories, setCategories] = useState([]); 

  useEffect(() => {

    const fetchAllTerms = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://medt-api.vercel.app/MedTApi/api/v1/all`);
        if (res.data.success) {
          setAllTerms(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching all terms:", err);
      } finally {
        setIsLoading(false);
      }
    };

  
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`https://medt-api.vercel.app/MedTApi/api/v1/categories`);
        if (res.data.success) {
          setCategories(res.data.categories);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchAllTerms();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchTerm.trim().length >= 1) {
      const filtered = allTerms.filter(item => 
        item.EnglishTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ArabicTerm.includes(searchTerm) ||
        item.Specialization.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(1, 10); 
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchTerm, allTerms]);

  const handleGoBack = () => {
    setIsSeachExiting(true);
    setIsExiting(false);
    setTimeout(() => {
      localStorage.removeItem("SearchInputOpened");
      setShowSearch(false);
    }, 800);
  };

  return (
    <>
      <div className={`${style.searchArea} animate__animated ${!isSeachExiting ? "animate__fadeInUp" : "animate__fadeOut"}`}>
        <p className={style.searchInfoText}>
          AI is used as a supportive tool <br />
          <span>All content is reviewed by medical professionals</span>
        </p>

        <div className={style.searchBarWrapper}>
          <IoSearchOutline className={style.searchIcon} />
          
          <input 
            type="text" 
            placeholder="Search for medical terms..." 
            className={`${style.mainSearchInput} ${filteredSuggestions.length > 0 ? style.inputWithFetchedTrems : ""}`} 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />

      
          <IoIosArrowDown 
            className={`${style.arrowIcon} cursor-pointer transition-transform ${isCatOpen ? 'rotate-180' : ''}`} 
            onClick={() => setIsCatOpen(!isCatOpen)}
          />

      
          {isCatOpen && (
            <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate__animated animate__fadeInDown">
              <ul className="py-3 px-1">
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <li 
                      key={index}
                      className="px-5 py-2.5 hover:bg-blue-50 text-[#747a85] cursor-pointer transition-colors text-start border-b border-gray-50 last:border-0 font-medium"
                      onClick={() => {
                        setSearchTerm(cat); 
                        setIsCatOpen(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))
                ) : (
                  <li className="px-5 py-2 text-sm text-gray-400">Loading categories...</li>
                )}
              </ul>
            </div>
          )}

        
          {!isLoading && filteredSuggestions.length > 0 && (
            <ul className={style.FetchedTremsBox}>
              {filteredSuggestions.map((item) => (
                <li key={item._id} className={style.suggestionItem} onClick={() => { setSearchTerm(item.EnglishTerm); setFilteredSuggestions([]); }} >
                  <IoSearchOutline className="me-3 opacity-50" />
                  <Link className='w-full' to={`${item?.Specialization}/${item?._id}`}>      
                    <div className="flex justify-between w-full">
                      <span>{item.EnglishTerm} / {item.ArabicTerm}</span>
                      <span className="opacity-50 text-sm">{item.Specialization}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className={style.enterHint}>Press Enter to Search</p>
      </div>

      <p onClick={handleGoBack} className={`${style.GobackBtn} fixed bottom-4 left-1/2 -translate-x-1/2 font-semibold cursor-pointer flex justify-center items-center animate__animated ${!isSeachExiting ? "animate__fadeIn animate__delay-1s" : "animate__fadeOut"}`}>
        <FaArrowLeftLong className='mt-[3px] me-1' /> Click to go back
      </p>
    </>
  );
}