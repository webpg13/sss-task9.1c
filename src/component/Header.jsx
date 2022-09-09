import { DownOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { React, useState, useEffect } from "react";
import {
  Input,
  Button,
  Menu,
  Dropdown,
  Space,
  Modal,
  notification,
} from "antd";
// import { collection, addDoc } from "firebase/firestore";

import { withRouter } from "react-router-dom";

const textRed = { color: "#fe6262" };

const MyHeader = (props) => {
  let [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")));
    console.log("首次渲染页面", userInfo);
  }, []);

  useEffect(() => {
    openNotification();
  }, [userInfo]);

  const openNotification = () => {
    userInfo.name &&
      notification.success({
        message: `Welcome ${userInfo.name}`,
        description: "",
        placement: "bottom",
      });
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
    confirm();
  };

  const confirm = () => {
    Modal.confirm({
      title: "Confirm Sign Out?",
      icon: <LoginOutlined style={textRed} />,
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: onConfirm,
    });
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Sign Out",
          key: "sign out",
          icon: <LoginOutlined />,
        },
      ]}
    />
  );
  const onConfirm = (e) => {
    console.log(e);
    sessionStorage.setItem("userInfo", JSON.stringify({}));
    Modal.destroyAll();
    props.history.push("/login");
  };

  // 1.登录 去 Layout
  const goLogin = async () => {
    props.history.push("/login");
  };
  return (
    <div className="header-container">
      <p className="title">DEV@Deakin</p>
      <Input size="default" placeholder="Search..." />
      <div className="btns">
        <Button size="default">Post</Button>
        {JSON.stringify(userInfo) == "{}" ? (
          <Button size="default" type="primary" danger onClick={goLogin}>
            Login
          </Button>
        ) : (
          <Dropdown overlay={menu}>
            <Button danger>
              <Space>
                {userInfo.name}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default withRouter(MyHeader);
