import React from 'react'
import FootNav from '../../components/FootNav'
import HomeHeader from './HomeHeader'
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader />
                <i className="iconfont icon-home"></i>
                <FootNav />
            </div>
        )
    }
}