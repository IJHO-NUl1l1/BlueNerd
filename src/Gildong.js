import React, { useState } from 'react';
import './Gildong.css';
import { useNavigate } from 'react-router-dom';
import beforeImg from './image/before.png';
import cardImg from './image/image2.png'; 
import profileImg from './image/image2.png'; 
import posterImg from './image/poster.png';
import pdfImg from './image/pdf.png';

function Gildong() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigateToCardBook = () => {
        navigate("/CardBook");
    };

    const handleCardImageClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="Edit">
            <div className="content-wrapper-Gildong">
                <button className="before" onClick={navigateToCardBook}>
                    <img src={beforeImg} alt="before icon" className="before-icon" />
                </button>

                <div className="header">
                    <img src={cardImg} alt="Card" className="card-image-Gildong" onClick={handleCardImageClick} />
                    <div className="info-box">
                        <div className="location">
                            <div className="title">장소</div>
                            <div className="detail">인천광역시 연수구 송도동 센트럴로 123 송도컨벤시아</div>
                        </div>
                        <div className="time">
                            <div className="title">시간</div>
                            <div className="detail">2023년 10월 30일 15:30</div>
                        </div>
                    </div>
                </div>

                <div className="chat-section">
                    <div className="date">2023-10-30</div>

                    <div className="chat-message">
                        <div className="message1">
                            <img src={profileImg} alt="Profile" className="profile-image-Gildong" />
                            <div className="message-content">
                                <div className="name">강성욱</div>
                                <img src={posterImg} alt="Poster Content" className="Poster" />
                            </div>
                        </div>
                        <div className="message2">
                            <img src={profileImg} alt="Profile" className="profile-image-Gildong" />
                            <div className="message-content">
                                <div className="name">강성욱</div>
                                <img src={pdfImg} alt="Poster Content" className="PDF" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-background" onClick={handleCardImageClick}>
                    <img src={cardImg} alt="Card" className="modal-card-image" />
                </div>
            )}
        </div>
    );
}

export default Gildong;
