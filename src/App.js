import './App.css';
import 'antd/dist/antd.css';
import React from 'react'
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'
// 路由 react-router-dom@5.2.1
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// BrowserRouter 只能出现一次
class App extends React.Component {
  render() {
    return <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} ></Route>
          <Route exact path="/register" component={Register} ></Route>
          <Route path="/home" component={Home} ></Route>
          {/* 重定向 */}
          <Redirect exact from="/" to="login"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  }
}
export default App