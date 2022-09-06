import React from "react";
import "../assets/css/login.css";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTT7uf2Qpoo5cs2nrsKxBYkaNEyaMW9nk",
  authDomain: "hanshuaitask7-1.firebaseapp.com",
  projectId: "hanshuaitask7-1",
  storageBucket: "hanshuaitask7-1.appspot.com",
  messagingSenderId: "112424947537",
  appId: "1:112424947537:web:fe04a6833c31f04a904d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const usersRef = collection(db, "users");
console.log("usersRef: ", usersRef);

const textRed = { color: "#fe6262" };

const successMsgFn = () => {
  message.success("Login successfully");
};

const errorMsgFn = (text) => {
  message.error(text);
};

const Login = (props) => {
  const goRegister = () => {
    props.history.push("/register");
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    let { email, password } = values;
    let emailResult = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(emailResult);
    console.log("querySnapshot.size: ", querySnapshot.size);
    if (querySnapshot.size == 0) {
      errorMsgFn("Invalid email or password");
      return;
    }
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let userInfo = {
        name: doc.data().name,
        email: doc.data().email
      }
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      let result = bcrypt.compareSync(password, doc.data().password);
      console.log("result: ", result);
      if (email == doc.data().email && result) {
        successMsgFn();
        setTimeout(() => {
          props.history.push("/home");
        }, 800);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p className="heading">Log in to your account</p>
        <div className="form-box">
          <Form
            name="login"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input addonBefore={<UserOutlined style={textRed} />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password addonBefore={<LockOutlined style={textRed} />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="bottom-box">
          <span>New to Task7.1P?</span>
          <Button type="link" onClick={goRegister}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
