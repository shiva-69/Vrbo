import "./search-box.css";
import { useState } from "react";
import { InputBox } from "../inputBox/inputBox";

export const Search = () => {
  const [search, setSearch] = useState(false);

  const changeSearch = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 250) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  window.addEventListener("scroll", changeSearch);

  return (
    <div className="search-box">
      <div className="back"></div>

      <div className="search-main">
        <div className="headline">
          <h1>Find your place for together</h1>
        </div>

        <div className={search ? "search-box-main active" : "search-box-main"}>
          <div className="serach-input-middle">
           {/* Write search code here */}
           <InputBox/>
          </div>
        </div>
      </div>
    </div>
  );
};
