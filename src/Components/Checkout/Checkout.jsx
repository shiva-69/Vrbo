import React from 'react'
import './Checkout.css'

function Checkout(props) {
  // const { id, hotel_name, city, image, rating, price, description } = {props};
  return (
    <>
      <h1>Checkout Page</h1>
      <div id="container">
        <div className="left-checkout">
          <div className="dis-flex">
            <p>Florida/Destin/Holiday Isle</p>
            <p className='hotal-title'>Coastal decor w/a balcony & beachfront, pool view! 🌅</p>
            <div className='save-share-div'>
              <p className='save-share'>Save</p>
              <p className='save-share'>Share</p>
            </div>
          </div>
          <div className='img-div'>


            <div className='firstContainer'>

              <img className='img-inside1' src="https://media.vrbo.com/lodging/28000000/27180000/27173000/27172903/a10899f5.f10.jpg" alt="img" />

            </div>

            <div className="secondContainer">
              <div>
                <img className='img-inside3' src="https://media.vrbo.com/lodging/28000000/27180000/27173000/27172903/a10899f5.f10.jpg" alt="img" />
              </div>
              <div className="img-div2">
                <div>
                <img src="https://media.vrbo.com/lodging/22000000/21720000/21716700/21716658/fad110e3.f10.jpg" alt="img" />
                </div>
                <div>
                <img className='img-inside3' src="https://media.vrbo.com/lodging/28000000/27180000/27173000/27172903/a10899f5.f10.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>

          <nav>
            <ul className='nav-list'>
              <li>About</li>
              <li>Amenities</li>
              <li>Availability</li>
              <li>Host</li>
              <li>Rooms & beds</li>
              <li>Reviews</li>
              <li>Map</li>
              <li>Policies</li>
            </ul>
          </nav>

          <div>
            <div className="checkout-about">
              <p>About this rental</p>
              <div>
                <p>Condo</p>
                <p>873 sq. ft</p>
              </div>
              <div>
                <p>1 bedroom</p>
                <p>1 bed . Sleeps 6</p>
              </div>
              <div>
                <p>2 bathrooms</p>
                <p>2 full baths</p>
              </div>
              <div>
                <p>Family spaces</p>
                <p>Kichen . Living Room . Dining Area</p>
              </div>

              <p>Condo, 1 Bedroom + Bunk area, 2 Baths (Sleeps 4-6)</p>
              <p>Relax on our balcony and enjoy the direct view of the beach that Southern Living Magazine voted #1 in the United States! Located on the 17th floor, watch the dolphins play in the beautiful emerald waters of the Gulf of Mexico. Sunsets with the most vivid colors are especially memorable.

                This condo has been recently remodeled and updated with new 18' Noce travertine tile, new carpet, new area rug, fresh paint, new queen sleeper sofa, new bedding and much more. We have not stopped there though - we are continuing to</p>


            </div>

            <div className="checkout-amenities">
              <p>Amenities</p>
              <ul>
                <li>Parking</li>
                <li>No Smoking</li>
                <li>TV</li>
                <li>Internet</li>
                <li>Washer & dryer</li>
                <li>Aor cpmdotopmomg</li>
                <li>Swimming pool</li>
                <li>Satellite or cable</li>
                <li>Heater</li>
              </ul>
              <p>View all 59 amentities</p>
              <p>Still have questions ?</p>
              <p>Get a fast response about property amenities, check-in times, and general questions.</p>
              <button>Chat now</button>


            </div>



          </div>


        </div>
        <div className="right-checkout">
          <span className='price'>2546$ </span>
          <span>avg/hight</span>
          <p>4.3</p>
          <p>Add dates for total pricing</p>
          <div className='date-cnt'>
           <div className="select-date">
           <input type="date" placeholder='Check In' />
            <input type="date" placeholder='Check Out' />
           </div>
            <input type="number" placeholder='Guests' />
          </div>
          <button className='check-btn'>Check availability</button>
          <hr />
          <p className='t-c c-b'>Contact host</p>
          <hr />
          <p className='t-c'>Property # 347935</p>
          <p className='t-c c-b'>Report this property</p>

        </div>




      </div>

    </>
  )
}

export default Checkout
