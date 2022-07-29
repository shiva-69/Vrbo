// import { Navbar } from "../navbar/navbar";
import { Search } from "../../Components/search/search-box";
import Carousel from "react-elastic-carousel";
import Item from "./crsl/img_div";
import "./home.css";
import { Footer } from "./footer/Footer";
// import Signup from "./signup/Signup";

export const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemTsoShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="home-main">
      
      <Search />

      <div className="middle-part-home">
        <Carousel breakPoints={breakPoints}>
          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/8621e10e-7950-41b4-814e-8817969887f4.carousel-m.jpg"
                alt=""
              />
            </div>
            <h4>Houses</h4>
            <p>View 357,436 houses</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/397eabda-51d4-45d4-82c8-da3ad409ff84.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Condos/Apartments</h4>
            <p>View 217,705 condos/apartments</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/5941b1e0-2600-4b2a-b27e-c667abf7e510.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Cabins</h4>
            <p>View 62,238 cabins</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/ae891341-b7bb-4ae2-a1f8-7c8e53d16c4e.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Studios</h4>
            <p>View 60,843 studios</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/adf45333-140a-40cf-987f-bc49b711c3d9.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Cottages</h4>
            <p>View 59,672 cottages</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/9af508c6-3dd9-453f-9a0d-8726a705328d.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Bungalows</h4>
            <p>View 59,436 bungalows</p>
          </Item>

          <Item className="div-crsl">
            <div className="main-crsl-div">
              <img
                src="https://odis.homeaway.com/odis/destination/98f38230-8c19-4870-956a-16ae5f1d3abb.carousel-m.jpg"
                alt=""
              />
            </div>

            <h4>Townhouses</h4>
            <p>View 29,837 townhouses</p>
          </Item>
        </Carousel>
      </div>
      <div className="proeprty-home">
        <div className="background-color"></div>
        <div className="buttonandtext">
          <p>List your property on Vrbo and open your door to rental income</p>

          <button>List your property</button>
        </div>
      </div>

      <Footer />

      
    </div>
  );
};
