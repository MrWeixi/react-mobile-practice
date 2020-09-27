import React from 'react'
import api from '../../../api'
import HomeHotView from './HomeHotView'
export default class HomeHot extends React.Component {
    constructor() {
        super();
        this.state = {
            homehot1: [],
            homehot2: []
        }
    }
    componentDidMount() {
        api.homehot.homehot1Data()
            .then(resJson => {
                this.setState({
                    homehot1: resJson
                })
            })
        api.homehot.homehot2Data()
            .then(resJson => {
                this.setState({
                    homehot2: resJson
                })
            })
    }
    render() {
        const { homehot1, homehot2 } = this.state;
        return (
            <div>

                {
                    homehot1.length > 0 ?
                        <HomeHotView title="热销单品" data={homehot1} />
                        : <div>正在加载</div>
                }
                {
                    homehot2.length > 0 ?
                        <HomeHotView title="家庭常用" data={homehot2} />
                        : <div>正在加载</div>
                }
            </div>
        )
    }
}