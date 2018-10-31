import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div className="city-list-container">
              <h3>Popular Cities</h3>
              <ul className="clear-fix">
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'New York')}>New York</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Los Angeles')}>Los Angelos</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Chicago')}>Chicago</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Houston')}>Houston</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Philadelphia')}>Philadelphia</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Phoenix')}>Phoenix</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'San Antonio')}>San Antonio</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'San Diego')}>San Diego</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Dallas')}>Dallas</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'San Jose')}>San Jose</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'San Francisco')}>San Francisco</span>
                  </li>
                  <li>
                      <span onClick={this.clickHandle.bind(this, 'Seattle')}>Seattle</span>
                  </li>
              </ul>
          </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

module.exports = CityList
