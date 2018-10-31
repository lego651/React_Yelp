import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="Log In"/>
                {
                    this.state.checking
                    ? <div>{/* Loading... */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount() {
        // check if user is logged in
        this.doCheck()
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // if logged, direct to user profile page
            this.goUserPage();
        } else {
            // no logged in
            this.setState({
                checking: false
            })
        }
    }
    loginHandle(username) {
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            hashHistory.push(router)
        } else {
            this.goUserPage()
        }
    }
    goUserPage() {
        hashHistory.push('/User')
    }
}

// -------------------redux react binding--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
