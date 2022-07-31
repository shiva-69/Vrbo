import React from "react";
import styled from "styled-components";
import { Navbar } from "../Components/navbar/navbar";
import { Footer } from "./home/footer/Footer";


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
font-family: FreightSansLF Pro,Noto Sans JP,Noto Sans KR,Helvetica Neue,Helvetica,Arial,Lucida Grande,Segoe UI,Tahoma,-apple-system,Roboto,sans-serif;
`;

const LeftOverlay = styled.div`
flex-basis: 70%;
padding: 24px 24px 0;
border-top: 1px solid #cecece;
`;

const RightOverlay = styled.div`
flex-basis: 30%;
padding: 24px 24px 0;
border-top: 1px solid #cecece;
border-left: 1px solid #cecece;
`;

const CityContainer = styled.div`
color: #717171;
font-weight: 300;
cursor: pointer;
font-size: .875rem;
margin-bottom: 1%;
`
const HeadlineOverlay = styled.div`
display: flex;
justify-content: space-between;
`
const HeadlineContainer = styled.div`
font-size: 1.5rem;
line-height: 2rem;
font-weight: 700;
    color: #292929;
`
const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
button{
    display: flex;
    align-items: center;
    line-height: 18px;
    padding-left: 20px;
    padding-right: 20px;    
    box-shadow: inset 0 0 0 1px #908f8f;
    font-size: .875rem;
    text-align: center;
    vertical-align: middle;
    border-radius: 100px;
    height: 2.2rem;
    margin-bottom: 5px;
    svg{
        
        .react-trip-board-button__heart-core__heart-icon {
            transition: stroke 1s ease-in-out,fill .2s ease-in-out;
            fill: #d43626;
        }
        .react-trip-board-button__heart-core__heart-icon {
            transition: stroke 1s ease-in-out,fill .2s ease-in-out;
            fill: #d43626;
        }
    }
    span{
        margin-left: 5px;
    }
}
`
const PhotoGridContainer = styled.div`
display: flex;
gap: 10px;
box-sizing: border-box;
img{
    transition: border-radius .25s,box-shadow .25s;
    &:hover {
        border-radius: 5px;
    }
}
`
const PhotoGridLeft =  styled.div`
flex-basis: 65%;   
box-sizing: border-box; 
`
const PhotoGridRight = styled.div`
flex-basis: 35%;
box-sizing: border-box;
`
const PhotoRightContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
box-sizing: border-box;
// img{
//     box-sizing: border-box;
//     height: 60%;
//     width: 100%;
// };
div{
    gap: 10px;
}
`
const UpperPhotoContainer = styled.div`
img{
    height: 17rem;
}
`
const BottomPhotoContainer = styled.div`
display: flex;
img{
    height: 10rem;
}
`
const RentalPrice = styled.div`
margin-bottom: 10%;
`;
const RentalUpper = styled.span`
color: #292929;
    display: inline-block;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    margin-right: 8px;
`;
const RentalDown = styled.span`
display: inline-block;
font-size: 14px;
color: #717171;
`;
const DateAvailabilityOverlay = styled.div`
color: #292929;
margin-bottom: 3%;
display: flex;
align-items: center;
svg{
    color: #12805a;
    
}
.alignSpan{
    margin-left: 3%;
}
`;
const AddInfo = styled.div`
// width: 80%;
background-color: #fff;
border: 1px solid #908f8f;
border-radius: 4px;
margin-bottom: 5%;

`;
const CheckOverlay = styled.div`
display: flex;
width: 100%;
`;
const CheckInContainer = styled.div`
width : 50%;
border-bottom: 1px solid #908f8f;
border-right: 1px solid #908f8f;
padding: 10px;
`;
const CheckoutContainer = styled.div`
width : 50%;
border-bottom: 1px solid #908f8f;
padding: 10px;
`;
const GuestContainer = styled.div`
padding: 10px;
`;
const PaymentOverlay = styled.div`

`;
const PaymentUpper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1%;
font-weight: 700;
div{

}
`;
const PaymentLower = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8%;
div{
    font-size: .875rem;
    line-height: 1.125rem;
    color: #292929;
}
.viewDetails{
    color: #2474DE;
}
`;
const BookNowButton = styled.button`
border-radius: 100px;
background-color: #245abc;
border-color: #245abc;
color: #fff;
box-shadow: none;
font-weight: 700;
text-align: center;
vertical-align: middle;
touch-action: manipulation;
cursor: pointer;
height: 8%;
width: 60%;
margin-left: 20%;
margin-bottom:7%; 
`
const OwnerOverlay = styled.div`
display: flex;
margin-top: 4%;
margin-bottom: 4%;
`

const OwnerImgContainer = styled.div`
flex-basis: 17%;

div{
    background-image: url("https://mediaim.expedia.com/lodgingprofile/31550489/d2d9aacb-c0c8-4565-8b22-2ac83749bc45.c1.jpg");
    background-color: #fff;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 56px;
    min-width: 56px;
    width: 56px;    
}
`;

const OwnerDetailsContainer = styled.div`
flex-basis: 70%;
padding-left: 2%;   
.ownerName{
font-weight: 700;

}
.contactHost{
color: #2474DE;
font-size: 14px;
margin-top: 2%;
}
`;
const PropertyDetails = styled.div`
margin: auto;
margin-top: 3%;
margin-left: 30%;
margin-bottom: 2%;
.titleP{
font-weight: 700;
}
font-size: 14px;
`;
const ReportProperty = styled.div`
margin-left: 30%;
font-size: 14px;
`


const AmenitiesHeading = styled.div`
font-size: 2rem;
line-height: 2.5rem;
font-weight: 700;
color: #292929;
margin-left: 2rem;
margin-top: 3rem;
`;
const Amenities1 = styled.div`
display: flex;
margin-left: 2rem;
div{
    flex-basis: 33%;
    display: flex;
    align-items: center;
    height: 3rem;
    span{
        margin-left: 10px;
    }
}
`;
const Amenities2 = styled.div`
display: flex;
margin-left: 2rem;
div{
    flex-basis: 33%;
    display: flex;
    align-items: center;
    height: 3rem;
    span{
        margin-left: 10px;
    }
}
`;

export const CheckoutPage = () => {
    return <>
    <Navbar/>
        <Container>
            <LeftOverlay>
                <CityContainer>
                    Maharastra / Pune / <span>Baner</span>
                </CityContainer>
                <HeadlineOverlay>
                    <HeadlineContainer>Homestay @ Baner (Ensuite)</HeadlineContainer>
                    <ButtonContainer>
                        <button><svg class="react-trip-board-button__svg" data-id="SVG_HEART__16" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="react-trip-board-button__heart-core__heart-icon react-trip-board-button__heart-core-bg" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M8 3.98S9.13 2 11.5 2C13.57 2 15 3.7 15 5.73c0 2.86-2.98 4.6-7 8.27-4.02-3.67-7-5.41-7-8.27C1 3.7 2.43 2 4.5 2 6.88 2 8 3.98 8 3.98z"></path><path class="react-trip-board-button__heart-core__heart-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M8 3.98S9.13 2 11.5 2C13.57 2 15 3.7 15 5.73c0 2.86-2.98 4.6-7 8.27-4.02-3.67-7-5.41-7-8.27C1 3.7 2.43 2 4.5 2 6.88 2 8 3.98 8 3.98z"></path></svg><span>Save</span></button>
                        <button><svg data-id="SVG_SHARE__16" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M13.676 9.893v2.94c0 .626-.508 1.135-1.135 1.135H3.46a1.136 1.136 0 01-1.136-1.135v-2.94M3.93 5.474L8 2.032l4.07 3.442M8 2.6v7.568"></path></svg><span>Share</span></button>
                    </ButtonContainer>
                </HeadlineOverlay>
                <PhotoGridContainer>
                    <PhotoGridLeft>
                    <img alt="Spacious room for 2" src="https://media.vrbo.com/lodging/32000000/31560000/31550500/31550489/c3a80d74.f10.jpg"/>
                    </PhotoGridLeft>
                    <PhotoGridRight>
                        <PhotoRightContainer>
                            <UpperPhotoContainer><img alt="Comfortable king size bed  , Dressing cupboard and wardrobe" src="https://media.vrbo.com/lodging/32000000/31560000/31550500/31550489/63d4c51f.f10.jpg"/></UpperPhotoContainer>
                            <BottomPhotoContainer>
                                <div>
                                <img  alt="Ensuite bathroom" class="photo-grid__photo" src="https://media.vrbo.com/lodging/32000000/31560000/31550500/31550489/269c1d02.f6.jpg"/>
                                </div>
                                <div>
                                <img alt="Ensuite bathroom" class="photo-grid__photo" src="	https://media.vrbo.com/lodging/32000000/31560000/31550500/31550489/efd3ff6c.f10.jpg"></img>
                                </div>
                            </BottomPhotoContainer>
                        </PhotoRightContainer>
                    </PhotoGridRight>
                </PhotoGridContainer>
                <AmenitiesHeading>Amenities</AmenitiesHeading>
            <Amenities1>
                <div>
                <svg data-id="SVG_WIFI__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M7.305 15.08A5.592 5.592 0 0112 12.537a5.591 5.591 0 014.695 2.543M4.986 11.553A9.33 9.33 0 0112 8.38a9.315 9.315 0 017.013 3.167M2.75 8.048a13.032 13.032 0 019.216-3.799c3.636 0 6.921 1.478 9.284 3.866"></path><path stroke="currentColor" d="M13.663 18.369a1.663 1.663 0 11-3.326-.002 1.663 1.663 0 013.326.002z" clip-rule="evenodd"></path></svg>
                    <span>Internet</span>
                </div>
                <div>
                <svg data-id="SVG_STROLLER__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M5.951 20.672a1.75 1.75 0 10.002-3.499 1.75 1.75 0 00-.002 3.5zM14.118 20.672a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" clip-rule="evenodd"></path><path stroke="currentColor" d="M15.284 14.84H6.278a1.167 1.167 0 01-1.132-.885l-.945-3.783h12.833"></path><path stroke="currentColor" d="M14.4 17.195l3.818-10.18a2.335 2.335 0 012.186-1.513h1.298M7.602 18.34h4.866M4.201 10.172a7 7 0 017-7v7M11.201 10.172L5.154 6.644M11.201 10.172L7.673 4.125"></path></svg>
                    <span>Children Welcome</span>
                </div>
                <div>
                <svg data-id="SVG_SMOKING_NO__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.227 2.213a.75.75 0 00-1.061.013 2.56 2.56 0 00.021 3.597l.004.004a1.06 1.06 0 01.005 1.485.75.75 0 101.073 1.048 2.56 2.56 0 00-.02-3.597l-.005-.004a1.06 1.06 0 01-.005-1.485.75.75 0 00-.012-1.06zm.765 10.703a2.538 2.538 0 00-2.54-2.538H12.35l1.581 1.5h3.772v2.076H16.12l1.581 1.5H19.453a2.539 2.539 0 002.539-2.538zm-1.099 7.723a.75.75 0 01-1.166.925l-6.289-6.11H4.253a.75.75 0 01-.75-.75v-3.576a.75.75 0 01.75-.75h3.96L2.227 4.563a.75.75 0 111.046-1.075l5.793 5.627L20.893 20.64zm-11.42-6.685h2.421l-2.137-2.076h-.283v2.076zm9.98-2.076h-.25v2.076h.25a1.039 1.039 0 100-2.076zm-11.48 2.076v-2.076h-2.97v2.076h2.97zm10.24-7.933a.75.75 0 111.073 1.048 1.06 1.06 0 00.01 1.489.75.75 0 01-1.062 1.06 2.56 2.56 0 01-.02-3.597z" clip-rule="evenodd"></path></svg>
                    <span>No Smoking</span>
                </div>
            </Amenities1>
            <Amenities2>
                <div>
                <svg data-id="SVG_TV__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M2.739 5.845h17.226c.715 0 1.296.581 1.296 1.298V18.09c0 .718-.581 1.297-1.296 1.297H4.038a1.298 1.298 0 01-1.298-1.299l.011-9.798M5.217 19.4v1.85M18.783 19.4v1.85M7.683 2.75L12 5.834l4.318-3.084"></path><path stroke="currentColor" d="M18.17 14.563a2.418 2.418 0 01-2.46 2.36l-7.4.018a2.42 2.42 0 01-2.472-2.349l-.01-3.924a2.42 2.42 0 012.463-2.36l7.4-.016a2.417 2.417 0 012.47 2.348l.01 3.923z" clip-rule="evenodd"></path></svg>
                <span>TV</span>
                </div>
                <div>
                <svg data-id="SVG_CAR__24" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" d="M20.75 18.255H3.25v-5.038a1.5 1.5 0 011.5-1.5h14.5a1.5 1.5 0 011.5 1.5v5.038zM7.662 19.767a1.5 1.5 0 01-3 0v-1.5h3v1.5zM19.338 19.767a1.5 1.5 0 01-3 0v-1.5h3v1.5z" clip-rule="evenodd"></path><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M5.448 14.987a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM16.052 14.987a1.25 1.25 0 112.501 0 1.25 1.25 0 01-2.5 0z" clip-rule="evenodd"></path><path stroke="currentColor" d="M5.378 8.854l.166-1.149a3.7 3.7 0 013.662-3.174h5.572a3.7 3.7 0 013.665 3.19L19 11.717M18.681 8.854h2.568M2.75 8.854h2.629M10.788 14.987h2.467"></path></svg>
                <span>Parking</span>
                </div>
            </Amenities2>
            </LeftOverlay>
            <RightOverlay>

                <RentalPrice>
                    <RentalUpper>₹1,633</RentalUpper>
                    <RentalDown>/night </RentalDown>
                </RentalPrice>
                <DateAvailabilityOverlay>
                    <svg data-id="SVG_SUCCESS__16" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M1 8a7.019 7.019 0 01.533-2.679 6.98 6.98 0 015.101-4.186 6.968 6.968 0 012.732 0 6.95 6.95 0 012.523 1.045 6.98 6.98 0 012.578 3.141c.176.424.309.864.398 1.314a6.943 6.943 0 010 2.73 6.937 6.937 0 01-1.045 2.524 6.98 6.98 0 01-4.454 2.976 6.968 6.968 0 01-2.732 0 6.95 6.95 0 01-2.523-1.045 7.029 7.029 0 01-1.931-1.931A7.013 7.013 0 011 8z" clipRule="evenodd"></path><path stroke="currentColor" d="M8.886 8.342l-2.143 2.143L4.6 8.342M11.412 5.815L8.884 8.341"></path></svg>
                    <span className="alignSpan">
                    Your dates are available
                    </span>
                </DateAvailabilityOverlay>
                <AddInfo>
                    <CheckOverlay>
                    <CheckInContainer>
                            <div style={{fontSize: "12px"}}>Check In</div>
                            <div style={{color: "#2474de", fontWeight: "500",cursor: "pointer"}}>Date</div>
                        </CheckInContainer>
                        <CheckoutContainer>
                            <div style={{fontSize: "12px"}}>Check Out</div>
                            <div style={{color: "#2474de", fontWeight: "500",cursor: "pointer"}}>Date</div>
                        </CheckoutContainer>
                    </CheckOverlay>
                    <GuestContainer>
                        <div style={{fontSize: "12px"}}>Guests</div>
                        <div style={{color: "#2474de", fontWeight: "500",cursor: "pointer"}}>1 guest</div>
                    </GuestContainer>
                </AddInfo>
                <PaymentOverlay>
                    <PaymentUpper>
                        <div>Total</div>
                        <div>₹3,467.75</div>
                    </PaymentUpper>
                    <PaymentLower>
                        <div>Total includes fees, not tax</div>
                        <div className="viewDetails">View Details</div>
                    </PaymentLower>
                </PaymentOverlay>
                <BookNowButton>
                    <span>Book Now</span>
                </BookNowButton>
                <hr />
                <OwnerOverlay>
                    <OwnerImgContainer>
                        <div></div>
                    </OwnerImgContainer>
                    <OwnerDetailsContainer>
                        <div className="ownerName"> Dr. Tejashree Date</div>
                        <div className="contactHost"> Contact Host</div>
                    </OwnerDetailsContainer>
                </OwnerOverlay>
                <hr />
                <PropertyDetails>
                    <span className="titleP"> Property#</span>
                    <span>9757484</span>
                </PropertyDetails>
                <ReportProperty>
                    Report this property
                </ReportProperty>
                
            </RightOverlay>
            
        </Container>
        <Footer/>
    </>
}