import React from "react";
import SwipeableViews from "react-swipeable-views";
import Paginaction from "./Paginaction";
import "./style.less";
export default class Life extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  handelChangeIndex = (index) => {
    this.setState({
      currentIndex: index,
    });    
  };
  render() {
    const banners = this.props.banners;
    return (
      <div className="swiper">
        <SwipeableViews onChangeIndex={this.handelChangeIndex}>
          {banners.map((el, index) => {
            return (
              <div className="swiper-view" key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </SwipeableViews>
        <Paginaction dots={banners.length} index={this.state.currentIndex} />
      </div>
    );
  }
}
