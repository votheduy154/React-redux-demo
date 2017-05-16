import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

class User extends React.Component {
    render() {
        console.log(this.props.state.position);
        return (
            <h1>Home</h1>
        )
    }
}

function mapStateToProps(rootState) {
    return {
        state: rootState.userReducer,
    }
}
export default connect(mapStateToProps, null)(User);