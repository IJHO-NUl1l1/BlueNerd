import './Openfile.css'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchImg from './image/search.png';
import fileboxplusImg from './image/fileboxplus.png';

function Openfile() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToFilebox = () => {
        navigate("/Filebox");
    };

    return (
        <div className="Openfile">
            <div className="content-wrapper">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="파일명 검색"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className="search-button">
                        <img src={searchImg} alt="Search" />
                    </button>
                </div>
                <div className="filebox-container" onClick={navigateToFilebox}>
                    {/* 이미지와 텍스트를 감싸는 div */}
                    <div className="fileboxplus-container">
                        <img src={fileboxplusImg} alt="Filebox" className="fileboxplus-image" />
                        <p>명함안에 파일을 업로드하여 관리하세요!</p>
                    </div>
                </div>
            </div>
            <div className="bottom-sidebar">
                <button className="nav-button1" onClick={navigateToHome}></button>
                <button className="nav-button2" onClick={() => navigate("/Openfile")}></button>
                <button className="nav-button3"></button>
            </div>
        </div>
    );
}

export default Openfile;