import React from 'react'
import api from '../../../api'
export default class HomeHot extends React.Component{
    componentDidMount(){
        api.homehot.homehot1Data()
        .then(resJson=>{
            console.log(resJson)
        })
        api.homehot.homehot2Data()
        .then(resJson=>{
            console.log(resJson)
        })
    }
    render(){
        return(
            <div>
                热门
            </div>
        )
    }
}