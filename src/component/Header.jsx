import React from "react";
import { Input, Button } from "antd";
// import { collection, addDoc } from "firebase/firestore";

import { Route, withRouter } from 'react-router-dom'
import Login from '../views/Login'


const MyHeader = (props) => {
  // 1.登录 去 Layout
  const goLogin = async () => {
    props.history.push('/login')
    console.log("loginFn: ", React.db);
    /* try {
      const docRef = await addDoc(collection(React.db, "users"), {
        name: "bbb",
        email: "qweaLovelace",
        password: 1215,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } */
  }
  return (
    <div className="header-container">
      <p className="title">DEV@Deakin</p>
      <Input size="default" placeholder="Search..." />
      <div className="btns">
        <Button size="default">Post</Button>
        <Button size="default" type="primary" danger onClick={goLogin}>
          Login
        </Button>
      </div>
      <Route path="/login" component={Login}></Route>
    </div>
  );
};

export default withRouter(MyHeader);
