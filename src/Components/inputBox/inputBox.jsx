import "./input.css";
// import DateSelector from "../dateSelect/dateRange";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";
// import { getLocation } from "../location_redux/actions";
import { useDispatch,useSelector } from "react-redux";
import setDate from "../../redux/search/action";
import searchData from "../../redux/search/action";

export const InputBox = () => {
  const curDate = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date())
  const [search,setSearch] = useState([])
  const [searchText,setSearchText] = useState("")
  const [fetchData,setFetchData] = useState(true);
  const [guest,setGuest] =  useState()

  const dispatch = useDispatch();
  const searchdata = useSelector(store => store)
console.log("from redux",searchdata)
  const handleSearchData = ()=>{
    const payload = {
      city : searchText,
      startDate : startDate,
      endDate : endDate,
      guest : guest
    }

    dispatch(searchData(payload))

  }
  const handleStartDate = (date)=>{
    // console.log()
    if((date.getDate()>=curDate.getDate() && date.getMonth() >=curDate.getMonth()) || date.getMonth() >curDate.getMonth()){
      setStartDate(date);
      if((date.getDate()>endDate.getDate() && date.getMonth() >= endDate.getMonth()) || date.getMonth() >= endDate.getMonth()){
        setEndDate(date);
      }
    }
    
  }

  const handleEndDate = (date)=>{
    console.log(date.getMonth() ,startDate.getMonth())
    if((date.getDate()>=startDate.getDate() && date.getMonth() >=startDate.getMonth()) || date.getMonth() >startDate.getMonth()){
      setEndDate(date);
    }
  }
  const handleUpdateSearch = (e)=>{
    // console.log(e.target.innerText,"in setdata")
    setFetchData(false)
    setSearchText(e.target.innerText)
    setSearch([])
    console.log(searchText,'searchtext')
    

  }

  const handleSearch = (e)=>{
    let queary = e.target.value
  }
  

  const handleChange = (e) => {
    if(searchText==""){
      setFetchData(true)
    }
    let queary = e.target.value
    // setSearchText(queary);
    setSearchText(queary)
    console.log(queary)
   if(fetchData){
    fetch(`http://localhost:3001/city/${queary}`)
    .then((res) => res.json())
    .then((res) => setSearch(res))
   }
    

    // const { name } = e.target;

    // setText({
    //   ...text,
    //   [name]: e.target.value,
    // });
  };

  // console.log(text);

  return (
    <>
    <div className="main-search">
      
      <div className="div1">
        <ion-icon name="location-outline">
        <svg data-id="SVG_LOCATION__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M6.453 13.47a6.75 6.75 0 01.723-8.692l.05-.05a6.752 6.752 0 019.548 0l.05.05a6.75 6.75 0 01.723 8.693L12 21.25l-5.547-7.78z" clip-rule="evenodd"></path><path stroke="currentColor" d="M14.237 9.552a2.238 2.238 0 11-4.475-.001 2.238 2.238 0 014.475.001z" clip-rule="evenodd"></path></svg>
        </ion-icon>
        <input
        value={searchText}
          type="text"
          placeholder="Search destination property ID"
          name="location"
          onChange={handleChange}
          required={true}
        />
        
      </div>

      <div className="div2">
        <div className="check">
          <span>
          <svg data-id="SVG_CHECK_IN__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.618 18.112h2.5v-2.5h-2.5v2.5zM11.068 18.112h2.5v-2.5h-2.5v2.5zM6.618 18.112h2.5v-2.5h-2.5v2.5z" clip-rule="evenodd"></path><path stroke="currentColor" d="M3.618 12.956h4.345V8.612M3.569 8.648l4.185 4.22"></path><path stroke="currentColor" d="M3.618 15.394v3.719a1.5 1.5 0 001.5 1.5h15.313V6.112a1.5 1.5 0 00-1.5-1.5H3.618"></path><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.618 13.112h2.5v-2.5h-2.5v2.5zM11.068 13.112h2.5v-2.5h-2.5v2.5z" clip-rule="evenodd"></path><path stroke="currentColor" d="M7.618 2.612V4.61M16.618 2.612V4.61M20.248 8.612h-9.63"></path></svg>
          </span>
          <DatePicker selected={startDate} onChange={(date) => handleStartDate(date)} />
        </div>
        <div className="check">
          <ion-icon name="arrow-back-circle-outline">
          <svg data-id="SVG_CHECK_OUT__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M16.044 8.612h4.345v3.792M15.916 12.927l4.476-4.16"></path><path stroke="currentColor" d="M20.407 15.394v5.219H5.094a1.5 1.5 0 01-1.5-1.5V4.612h16.813"></path><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.594 13.112h2.5v-2.5h-2.5v2.5zM6.594 18.112h2.5v-2.5h-2.5v2.5zM11 18.112h2.5v-2.5H11v2.5zM15.594 18.112h2.5v-2.5h-2.5v2.5z" clip-rule="evenodd"></path><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.594 13.112h2.5v-2.5h-2.5v2.5zM11 13.112h2.5v-2.5H11v2.5z" clip-rule="evenodd"></path><path stroke="currentColor" d="M17.593 2.612V4.61M8.594 2.612V4.61M4.594 8.612h8.849"></path></svg>
          </ion-icon>
          <DatePicker selected={endDate} onChange={(date) => handleEndDate(date)} />
        </div>
      </div>

      <div className="div3">
        <ion-icon name="people-outline">
          
        </ion-icon>
        <input
          type="number"
          placeholder="Guests"
          name="guest"
          onChange={(e)=> setGuest(e.target.value)}
          required={true}
        />
      </div>

      <div id="button-search">
        <ion-icon name="search-outline"></ion-icon>
        <Link
          onClick={handleSearchData}
          to="/"
          className="link"
        >
          Search
        </Link>
      </div>
    </div>
    <div className="search-results" >{search?.slice(0,3).map((data) => {
      return (<div   >
        <h3 value={`${data.city} ${data.country}`} onClick={(e)=>handleUpdateSearch(e)} >{data.city}, {data.country}</h3>
        <p>{data.country}</p>
      </div>)
      
    })}</div>
    </>

  );
};
