import React from "react";
import Logo from "./images/sedinLogo.png";
import User from "./images/user.png";
import "./dashboard.scss";

export const Dashboard = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mobileMenu-list").style.marginLeft = "250px";
    document.getElementById("mobileMenu-list").classList.add("menu-btn");
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mobileMenu-list").style.marginLeft = "0";
    document.getElementById("mobileMenu-list").classList.remove("menu-btn");
  }

  return (
    <>
      <div id="mySidebar" className="mobile-menu">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <img className="menu-logo" src={Logo} alt="logo" />
        <div className="divider"></div>
        <a href="#">
          <i class="fa fa-line-chart" aria-hidden="true"></i> Analytics
        </a>
        <a href="#">
          <i class="fa fa-pie-chart" aria-hidden="true"></i> Lorem Ipsum
        </a>
      </div>

      <div id="mobileMenu-list">
        <button className="openbtn" onClick={openNav}>
          ☰
        </button>
      </div>
      <div className="sidebar">
        <div className="sidemenu-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="sidemenu-list">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-line-chart" aria-hidden="true"></i> Analytics
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-pie-chart" aria-hidden="true"></i> Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="dashboard-content">
        <div className="header-area">
          <div class="dropdownContainer">
            <div class="dropdown">
              <button class="dropbtn">
                <img src={User} alt="user" className="user" /> Lorem Ipsum
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">
                  <i class="fa fa-cog" aria-hidden="true"></i> Setting
                </a>
                <a href="#">
                  <i class="fa fa-sign-out" aria-hidden="true"></i> Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <p>asd</p>
        </div>
      </div>
    </>
  );
};
