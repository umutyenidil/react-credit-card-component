import React from "react";
import './CreditCard.css';
import mastercardLogo from "../assets/images/logo.png";
import chipImage from "../assets/images/chip.png";

const CreditCard = () => {
    return (
        <div className='container'>
            <div className='top-side'>
                <div className='logo'>
                    <img src={mastercardLogo} alt='mastercard'/>
                    <h5>Mastercard</h5>
                </div>
                <div className='chip'>
                    <img src={chipImage} alt='chip'/>
                </div>
            </div>
            <div className='card-details'>
                <div className='name-number'>
                    <h6>Card Number</h6>
                    <h5 className='number'>1234 5678 9101 1121</h5>
                    <h5 className='name'>Umut Yenidil</h5>
                </div>
                <div className='valid-date'>
                    <h6>Valid Thru</h6>
                    <h5>05/28</h5>
                </div>
            </div>
        </div>
    )
};

export default CreditCard;