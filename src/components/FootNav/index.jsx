import React from "react"
import { NavLink } from "react-router-dom"
import "./style.less"

export default class FootNav extends React.Component{
    render(){
        return(
            <div className="nav-footer">
                <ul className="clear-fix">
                    <li>
                        <NavLink exact to="/">
                            <i className="iconfont">&#xe659;</i>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <i className="iconfont">&#xe65a;</i>
                            商城
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/life">
                            <i className="iconfont">&#xe614;</i>
                            生活
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mine">
                            <i className="iconfont">&#xe639;</i>
                            我的
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}