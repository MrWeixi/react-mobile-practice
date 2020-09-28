import React from 'react'
import { connect } from 'react-redux'

import * as cityActions from '../actions/city'
import { bindActionCreators } from 'redux'
class App extends React.Component {
    componentDidMount() {
        const city =localStorage.getItem('city')
        // 北京  来源
        this.props.cityActions.initCity({
            cityName: city || '北京'
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.city
    }
}
const mapDisPatchToProps = dispatch => {
    return {
        cityActions: bindActionCreators(cityActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(App)