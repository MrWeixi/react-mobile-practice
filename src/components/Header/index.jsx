import React from 'react'
import "./style.less"
export default class Header extends React.Component{
    clickBackHeadler(){
        /**
         * 返回上一级
         * */ 
        window.history.back(-1);
    }
    render(){
        return(
            <div id="common-header">
            <span className="back-icon" onClick={ this.clickBackHeadler }>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}