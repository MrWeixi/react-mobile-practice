import React from 'react'
import CityHeader from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
/**
 * 城市初始化来源：
 * 1、定位
 * 2、用户选择
 * 3、程序自动赋值
 * */ 


export default class City extends React.Component{
    clickHot(city){
        
    }
    render(){
        return(
            <div>
                <CityHeader title="城市选择" />
                <CurrentCity city="北京" />
                <HotCity cityNameHandle={this.clickHot}/>
            </div>
        )
    }
}