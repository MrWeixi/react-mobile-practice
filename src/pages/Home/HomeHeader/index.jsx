import React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div id="home-header" className="clear-fix">
               <div className="home-header-left float-left">
                   <Link to="/city">
                   <span>北京</span>
                   </Link>
                   <i className="icon-angle-down"></i>
               </div>
               <div className="home-header-right float-right">
                   <i className="iconfont">&#xe659;</i>
               </div>
               <div className="home-header-middle">
                   <div className="search-container">
                       <i className="icon-search"></i>
                       <input />
                   </div>
               </div>
            </div>
        )
    }
}