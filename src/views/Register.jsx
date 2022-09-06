import React from "react";
import "../assets/css/register.css";
import Home from "./Home";
import { Button, Form, Input, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import { getFirestore, collection, addDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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

//引入bcryptjs库
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const textRed = { color: "#fe6262" };

const successMsgFn = () => {
  message.success("Account created successfully");
};

const errorMsgFn = () => {
  message.error("Account created failed");
};

const Register = (props) => {
  // 1.登录 去 Layout
  const goHome = () => {
    props.history.push("/home");
  };
  const goLogin = () => {
    props.history.push("/login");
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    let { name, email, password } = values;
    let hashPassword = bcrypt.hashSync(password, salt);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        password: hashPassword,
      });
      console.log("Document written with ID: ", docRef.id);
      successMsgFn();
      setTimeout(()=>{
        props.history.push("/login");
      }, 800)
    } catch (e) {
      console.error("Error adding document: ", e);
      errorMsgFn();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <p className="heading">Create a DEV@Deakin Account</p>
        <div className="form-box">
          <Form
            name="register"
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
            {/* name */}
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input addonBefore={<UserOutlined style={textRed} />} />
            </Form.Item>
            {/* email */}
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input addonBefore={<MailOutlined style={textRed} />} />
            </Form.Item>
            {/* password */}
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                addonBefore={<UnlockOutlined style={textRed} />}
              />
            </Form.Item>
            {/* comfirm password */}
            <Form.Item
              name="cmp"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password addonBefore={<LockOutlined style={textRed} />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="bottom-box">
          <span>Go to</span>
          <Button type="link" onClick={goLogin}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Register;
