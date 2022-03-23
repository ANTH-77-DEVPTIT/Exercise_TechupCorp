import React from "react";
import "../styleSheet/home.css";
import {
  AiFillFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
const Home = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://avatars.githubusercontent.com/u/70141159?v=4"
          alt=""
        />
        <p>Trương Hùng An - 29/11/2000</p>
        <p>Address: 5/2/D1/106, đường Man Thiện, phường TNPA, tp Thủ Đức.</p>
        <p>
          Front-end ReactJS. Từng học tại Học viện Công nghệ bưu chính viễn
          thông Hồ Chí Minh.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">PORTFOLIO</span>
        <ul className="sidebar__list">
          <li className="sidebar__list--item">Html</li>
          <li className="sidebar__list--item">Css</li>
          <li className="sidebar__list--item">Javascript</li>
          <li className="sidebar__list--item">ReactJS Lib</li>
          <li className="sidebar__list--item">Redux Framework</li>
          <li className="sidebar__list--item">React Native</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW ME</span>
        <div className="sidebar__social">
          <a
            className="sidebar__icon"
            href="https://github.com/ANTH-77-DEVPTIT?tab=repositories"
          >
            <AiFillFacebook />
          </a>
          <a
            className="sidebar__icon"
            href="https://www.youtube.com/channel/UCwea-gavvO7MHdYxINupj4g"
          >
            <AiOutlineYoutube />
          </a>
          <a
            className="sidebar__icon"
            href="https://github.com/ANTH-77-DEVPTIT?tab=repositories"
          >
            <AiOutlineGithub />
          </a>
          <a
            className="sidebar__icon"
            href="https://www.instagram.com/anth_dev77_ptit/"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
