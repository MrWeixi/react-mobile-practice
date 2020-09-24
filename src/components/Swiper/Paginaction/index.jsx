import React from "react";
import "./style.less";
export default class Paginaction extends React.Component {
  render() {
    const dots = this.props.dots;
    const current = this.props.index;
    const dotsArr = new Array(dots).fill(1);
    return (
      <div className="swiper-paginaction">
        <ul>
          {dotsArr.map((el, index) => {
            return (
              <li
                key={index}
                className={current === index ? 'selected' : ''}
              ></li>
            );
          })}
        </ul>
      </div>
    );
  }
}
