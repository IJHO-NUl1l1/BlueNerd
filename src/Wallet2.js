import React, { useState } from 'react';
import './Wallet2.css';
import { useNavigate } from 'react-router-dom';


function Wallet2() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToCardBook = () => {
        navigate("/CardBook");
    };

    return (
        <div className="Wallet2">
            <div className="content-wrapper-Wallet2">
                
                <div className="bottom-sidebar">
                    <button className="nav-button1"
                    onClick={navigateToHome}></button>
                    <button className="nav-button2"
                    onClick={navigateToCardBook}></button>
                    <button className="nav-button3"></button>
                </div>
            </div>
        </div>
    );
}

export default Wallet2;
