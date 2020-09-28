import React from 'react'
import SearchHeader from './SearchHeader'
import api from '../../api'
import { connect } from 'react-redux'
 class Search extends React.Component {

componentDidMount(){
    // 1、 关联城市 2、获取内容
    api.search.searchDate()
}

    render() {
        return (
            <div>
                <SearchHeader history={ this.props.history }/>
                { this.props.match.params.content }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(mapStateToProps)(Search)