import React from 'react'
import "./style.less"
export default class SearchInput extends React.Component{
     
    constructor(){
        super()
        this.state={
            values:''
        }
    }
    onKeyUpHandler=(event)=>{
        // 回车判断
        if(event.keyCode==13){
            // 动态路由跳转
            this.props.history.push(`/search/${this.state.values}`)
        }
     }
     getValuesHandler=(event)=>{
         this.setState({
             values:event.target.value
         })
     }
    render(){
        return(
               <input className="search-input" type="text"
               value={this.state.values}
               placeholder="请输入搜索内容"
               onKeyUp={this.onKeyUpHandler}
               onChange={this.getValuesHandler}
               />
        )
    }
}