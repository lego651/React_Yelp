import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="Change City" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this._changeCity.bind(this)} />
            </div>
        )
    }
    _changeCity(newCity) {
      if(newCity == null){
        return
      }
      // Update Redux
      const userinfo = this.props.userinfo
      userinfo.cityName = newCity
      this.props.userInfoActions.update(userinfo)

      // Update localStorage
      localStore.setItem(CITYNAME, newCity)

      // Redirect to HomePage
      hashHistory.push('/')
    }
}

// --------------------- redux react biding ---------------------
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
)(City)
