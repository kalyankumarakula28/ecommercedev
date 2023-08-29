import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineDashboard, AiOutlineBgColors } from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { LiaProductHunt } from "react-icons/lia";
import { BsCartPlus } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import {
  MdOutlineCategory,
  MdFormatListBulletedAdd,
  MdEmojiPeople,
} from "react-icons/md";
import { FaCreativeCommonsBy } from "react-icons/fa6";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="d-flex text-white fs-5 text-center py-3 mb-0">
            <span className=" sm-logo">Oy!</span>
            <span className=" lg-logo">OY! Admin</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FaCreativeCommonsBy className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BsCartPlus className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <BsCartPlus className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <LiaProductHunt className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "add-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <MdOutlineCategory className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "colors",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Colors",
                },
                {
                  key: "list-colors",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Colors List",
                },
              ],
            },
            {
              key: "orders",
              icon: <MdFormatListBulletedAdd className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <FaBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Add Blogs",
                },
                {
                  key: "blog_list",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Blogs List",
                },
                {
                  key: "blog-category",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Blogs category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Blogs category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <MdEmojiPeople className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between  ps-1 pr-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications size={24} />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={48}
                  height={48}
                  className="profile-img mx-3 rounded-circle"
                  src="https://i.pinimg.com/originals/a8/15/d2/a815d2f90086a1175e2b65b2865c68a7.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Sgs</h5>
                <p className="mb-0">Sgsglobalsolutions</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
