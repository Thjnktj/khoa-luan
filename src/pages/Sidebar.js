import React, { useState } from "react";
import { Layout, Menu, Input } from "antd";
import {
  AlignRightOutlined,
  AlignLeftOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { createTab } from "../redux/actions";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar() {
  const user = useSelector((state) => state.auth.user);
  const sidebar = useSelector((state) => state.products.sidebar);
  const tabs = useSelector((state) => state.tabs.tabs);

  const dispatch = useDispatch();

  let match = useRouteMatch();
  const [searchSidebar, setSearchSidebar] = useState("");

  const renderProductList = (data) => {
    return data
      ? data
          .filter((val) =>
            val.title.toLowerCase().includes(searchSidebar.toLowerCase())
              ? val
              : null
          )
          .map((text, index) =>
            text.subs.length > 0 ? (
              <SubMenu key={index} title={text.title}>
                {text.subs.map((item, index) =>
                  item.activated ? (
                    <Menu.Item
                      key={Number(index) + 10}
                      path={item.url}
                      onClick={() => dispatch(createTab(item))}
                    >
                      <Link
                        key={item.id}
                        to={`${match.url}/${item.url}`}
                        style={{ fontSize: "16px", color: "#fff" }}
                      >
                        {item.title}
                      </Link>
                    </Menu.Item>
                  ) : null
                )}
              </SubMenu>
            ) : text.activated ? (
              <Menu.Item
                key={Number(index) + 100}
                path={text.url}
                onClick={() => dispatch(createTab(text))}
              >
                <Link
                  key={text.id}
                  to={`${match.url}/${text.url}`}
                  style={{ color: "#fff" }}
                >
                  {text.title}
                </Link>
              </Menu.Item>
            ) : null
          )
      : null;
  };

  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <AlignLeftOutlined id="icon1" />
        <AlignRightOutlined id="icon2" />
      </label>

      <Layout id="sidebar-wrapper" key="ab1">
        <Sider className="sidebar_container" key="123">
          <div className="logo">
            <img src={user.avatarUrl} className="logo__img" alt="" />
            <p style={{ color: "white", textTransform: "capitalize" }}>
              Hi {user.username}
            </p>
          </div>
          <Input
            type="text"
            placeholder="Tìm kiếm"
            prefix={<SearchOutlined style={{ fontSize: "20px" }} />}
            className="search_sidebar"
            value={searchSidebar}
            onChange={(e) => setSearchSidebar(e.target.value)}
          />
          <Menu
            key="1234"
            mode="inline"
            style={{ marginTop: "10px" }}
            className="sidebar_menus"
            triggerSubMenuAction="hover"
          >
            {renderProductList(sidebar)}
          </Menu>
        </Sider>
        {tabs.length > 0 ? (
          <Product />
        ) : (
          <div className="sidebar_image">
            <img
              src={user.avatarUrl}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "100px",
              }}
            />
          </div>
        )}
      </Layout>
    </>
  );
}

export default Sidebar;
