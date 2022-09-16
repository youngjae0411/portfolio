import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>도넛 공장 다이어그램 구현</h3>
                <p> 도넛판매점에 재고가 떨어지면 자동으로 공장서버로 생산 요청을 보내는 다이어그램을 서버리스로 설계 및 구현했습니다. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>3티어 아키텍처 구현</h3>
                <p>MongoDB와 Nginx 서버를 ECS로 구현하고 Github Action을 통해 자동화를 하였습니다. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>코드스테이츠 데브옵스 부트캠프 수료</h3>
                <p>약 4개월동안 매일 8시간씩 수업을 들었으며, 개인학습 또한 하루에 4시간씩 하였습니다. 개인사정으로 인해 졸업은 하지 못 하였으나 수강기간중 유일하게 학습태도가 좋아 소정의 선물을 받았습니다.</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;