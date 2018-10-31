import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {
    /*
    https://github.com/voronianski/react-swipe
    `npm install react swipe-js-iso react-swipe --save`
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                this.setState({index: index});
            }.bind(this)
        }

        return (
          <div id="home-category">
              <ReactSwipe swipeOptions={opt}>
                  <div className="carousel-item">
                      <ul className="clear-fix">
                          <Link to="/search/scence"><li className="float-left scene">Scene</li></Link>
                          <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
                          <Link to="/search/shopping"><li className="float-left shopping">Shopping</li></Link>
                          <Link to="/search/service"><li className="float-left service">Service</li></Link>
                          <Link to="/search/fitness"><li className="float-left fitness">Fitness</li></Link>
                          <Link to="/search/hair"><li className="float-left hair">Hair</li></Link>
                          <Link to="/search/family"><li className="float-left family">Family</li></Link>
                          <Link to="/search/snacks"><li className="float-left snacks">Snack</li></Link>
                          <Link to="/search/buffet"><li className="float-left buffet">Buffet</li></Link>
                          <Link to="/search/bar"><li className="float-left bar">Bar</li></Link>
                      </ul>
                  </div>
                  <div className="carousel-item">
                      <ul className="clear-fix">
                          <Link to="/search/food"><li className="float-left food">Food</li></Link>
                          <Link to="/search/movie"><li className="float-left movie">Movie</li></Link>
                          <Link to="/search/hotel"><li className="float-left hotel">Hotel</li></Link>
                          <Link to="/search/entertainment"><li className="float-left entertainment">Entertainment</li></Link>
                          <Link to="/search/takeout"><li className="float-left takeout">Take-out</li></Link>
                          <Link to="/search/hotpot"><li className="float-left hotpot">Hotpot</li></Link>
                          <Link to="/search/beauty"><li className="float-left beauty">Beauty</li></Link>
                          <Link to="/search/trip"><li className="float-left trip">Trip</li></Link>
                          <Link to="/search/massage"><li className="float-left massage">Massage</li></Link>
                          <Link to="/search/resort"><li className="float-left resort">Resort</li></Link>
                      </ul>
                  </div>
                  <div className="carousel-item">
                      <ul className="clear-fix">
                          <Link to="/search/japaness"><li className="float-left japaness">Japaness Food</li></Link>
                          <Link to="/search/spa"><li className="float-left SPA">SPA</li></Link>
                          <Link to="/search/wedding"><li className="float-left wedding">Wedding</li></Link>
                          <Link to="/search/hobby"><li className="float-left hobby">Hobby</li></Link>
                      </ul>
                  </div>
              </ReactSwipe>
              <div className="index-container">
                  <ul>
                      <li className={this.state.index === 0 ? "selected" : ''}></li>
                      <li className={this.state.index === 1 ? "selected" : ''}></li>
                      <li className={this.state.index === 2 ? "selected" : ''}></li>
                  </ul>
              </div>
          </div>
        )
    }
}

export default Category
