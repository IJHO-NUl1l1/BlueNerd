import React, { useState, useEffect } from 'react';
import './CardBook.css';
import { useNavigate } from 'react-router-dom';
import searchImg from './image/search.png';
import profileImg1 from './image/image2.png';
import profileImg2 from './image/image3.png'; 



function CardBook() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const navigateToCardBook = () => {
        navigate("/CardBook");
    };
    const navigateToHome = () => {
        navigate("/");
    };
    const navigateToGildong = () => {
        navigate("/Gildong");
    };

    const [filteredProfiles, setFilteredProfiles] = useState([
        { id: 1, name: "강성욱", company: "BlueNode",  place: "인천광역시 연수구 송도동 센트럴로 123 송도컨벤시아", time: "20231030" },
        { id: 2, name: "박지호", company: "인하대학교", place: "서울", time: "20220202" }
    ]);

    useEffect(() => {
        const profiles = [
            { id: 1, name: "강성욱", company: "BlueNode", phone: "01012345678", place: "인천광역시 연수구 송도동 센트럴로 123 송도컨벤시아", time: "20210101" },
            { id: 2, name: "박지호", company: "인하대학교", phone: "01011111111", place: "서울", time: "20220202" }
        ];

        const result = profiles.filter(profile => 
            profile.name.includes(search) ||
            profile.company.includes(search) ||
            profile.place.includes(search) ||
            profile.time.includes(search)
        );

        setFilteredProfiles(result);
    }, [search]);

    function getHighlightedText(text, highlight) {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part === highlight ? <span className="highlight">{part}</span> : part)}</span>;
    }

    return (
        <div className="CardBook">
            <div className="content-wrapper-CardBook">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="검색"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className="search-button">
                        <img src={searchImg} alt="Search" />
                    </button>
                </div>
                {filteredProfiles.map((profile, index) => (
                    <div 
                        key={profile.id} 
                        className={`profile-box${profile.id}`} 
                        data-name={profile.name} 
                        data-company={profile.company} 
                        data-phone={profile.phone} 
                        data-place={profile.place} 
                        data-time={profile.time}
                        onClick={index === 0 ? navigateToGildong : undefined}
                    >
                        {(index === 0 ) && <img src={profileImg1} alt="Profile" className="profile-pic1" />}
                        {(index === 1) && <img src={profileImg2} alt="Profile" className="profile-pic1" />}
                        <div className="profile-info">
                            <div className="name">{getHighlightedText(profile.name, search)}</div>
                            <div className="company">{getHighlightedText(profile.company, search)}</div>
                            {search && 
                            <div className="highlighted-info">
                                {profile.phone.includes(search) && <span>{getHighlightedText(profile.phone, search)}</span>}
                                {profile.place.includes(search) && <span>{getHighlightedText(profile.place, search)}</span>}
                                {profile.time.includes(search) && <span>{getHighlightedText(profile.time, search)}</span>}
                            </div>}
                        </div>
                    </div>
                ))}

            </div>

            <div className="bottom-sidebar">
                <button className="nav-button1" onClick={navigateToHome}></button>
                <button className="nav-button2" onClick={navigateToCardBook}></button>
                <button className="nav-button3"></button>
            </div>
        </div>
    );
}

export default CardBook;

