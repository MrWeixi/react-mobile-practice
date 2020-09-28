import React from 'react'
import CityHeader from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
import { connect } from "react-redux"
import * as cityActions from '../../actions/city'
import { bindActionCreators } from "redux"
/**
 * 城市初始化来源：
 * 1、定位
 * 2、用户选择
 * 3、程序自动赋值
 * */

class City extends React.Component {
    oncityNameHandle = (city) => {
        this.props.cityActions.updateCity({
            cityName: city
        })
        window.history.back(-1);
        // 用户修改城市需要存储
        localStorage.setItem('city',city)
    }
    render() {
        return (
            <div>
                <CityHeader title="城市选择" />
                <CurrentCity city={this.props.city.cityName} />
                <HotCity cityNameHandle={this.oncityNameHandle} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

const mapDisPatchToProps = dispatch => {
    return {
        cityActions: bindActionCreators(cityActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(City)