import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import * as actionCreator from '../actions/UserAction';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props.fields.username.onBlur = () => {
            this.props.getLoginAccount();
        }
        this.props.state.username = "ABC";
        console.log(12111);
    }

    render() {
        const {fields: {username, password}} = this.props;
        return (
            <div>
                {this.props.state.username}
                <h1>Hello F ABCBDEz</h1>
                <form>
                    <input placeholder="Username..."
                        {...username}
                    />
                    <input placeholder="*****"
                           type="password"
                        {...password}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(rootState) {
    return {
        state: rootState.appReducer,
    }
}
export default reduxForm({
    form: 'DemoForm',
    fields: ['username', 'password']
}, mapStateToProps, actionCreator)(Home);