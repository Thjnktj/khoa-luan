import React from "react";
import { Layout } from "antd";
import "../../assets/css/style.css";
const { Header } = Layout;

function Headers(props) {
  return (
    <Header className="header">
      <div className="header__block">
        <div className="header__logo">
          <img src="/images/logo.svg" className="header__img" alt="" />
        </div>
        <div className="header__name">Học viện nông nghiệp việt nam</div>
        <div className="header__logo2">
          <img src="/images/logo.svg" className="header__img" alt="" />
        </div>
      </div>
      {props.children}
    </Header>
  );
}

export default React.memo(Headers);
