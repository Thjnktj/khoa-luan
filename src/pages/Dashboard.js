import React, { useState } from "react";
import { Layout, Col, message } from "antd";
import Sidebar from "./Sidebar";
import {
  MenuOutlined,
  CloseOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogOut } from "../redux/actions";

const { Header } = Layout;

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const clickLogout = () => {
    setTimeout(() => {
      dispatch(isLogOut());
      message.success("Đăng xuất thành công!", 2);
    }, 1500);
  };
  return (
    <>
      <Header className="headerPd">
        <Col className="header__block">
          <div className="header__logo">
            <img src="/images/logo.svg" className="header__img" alt="" />
          </div>
          <div className="header__name">Học viện nông nghiệp việt nam</div>
          <div className="header__logo2">
            <img src="/images/logo.svg" className="header__img" alt="" />
          </div>

          <div className="header_menu">
            {!showMenu ? (
              <MenuOutlined onClick={() => setShowMenu(true)} />
            ) : (
              <CloseOutlined onClick={() => setShowMenu(false)} />
            )}
          </div>
        </Col>
        {showMenu ? (
          <div id="menuToggle">
            <ul className="menu">
              <div className="menu-logo">
                <img
                  src={user.avatarUrl}
                  alt=""
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                />
                <p style={{ textTransform: "capitalize" }}>{user.username}</p>
              </div>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <li className="profile_menu">
                  <div>
                    <UserOutlined />
                  </div>
                  <div>Giới thiệu</div>
                </li>
                <li className="profile_menu">
                  <div>
                    <LogoutOutlined />
                  </div>
                  <Link onClick={clickLogout}>Đăng xuất</Link>
                </li>
              </div>
            </ul>
          </div>
        ) : null}
      </Header>
      <Sidebar />
    </>
  );
}

export default Dashboard;
