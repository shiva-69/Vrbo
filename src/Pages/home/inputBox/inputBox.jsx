import "./input.css";
import { useState } from "react";
import DateSelector from "../dateSelect/dateRange";

import { Link } from "react-router-dom";
import { getLocation } from "../location_redux/actions";
import { useDispatch } from "react-redux";

export const InputBox = () => {
  const [text, setText] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;

    setText({
      ...text,
      [name]: e.target.value,
    });
  };

  // console.log(text);

  return (
    <div className="main-search">
      <div className="div1">
        <ion-icon name="location-outline"></ion-icon>
        <input
          type="text"
          placeholder="Search destination property ID"
          name="location"
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="div2">
        <div className="check">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <input
            placeholder="Check-in"
            type="date"
            name="checkin"
            required={true}
            onChange={handleChange}
          />
        </div>
        <div className="check">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
          <input
            placeholder="Check-out"
            type="date"
            name="checkout"
            required={true}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="div3">
        <ion-icon name="people-outline"></ion-icon>
        <input
          type="number"
          placeholder="Guests"
          name="guest"
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="button-search">
        <ion-icon name="search-outline"></ion-icon>
        <Link
          onClick={() => {
            dispatch(getLocation(text));
          }}
          to="/results"
          className="link"
        >
          Search
        </Link>
      </div>
    </div>
  );
};
