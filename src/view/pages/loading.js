/*
 * @Author: junjie.lean
 * @Date: 2019-04-15 16:28:09
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-04-17 09:58:26
 */

/**
 * @description loading页，解参跳转
 */

import React from "react";
import ReactLoding from "react-loading";
import G from "./../../config/g";
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let _this = this;
    console.log(this.props);
    setTimeout(() => {
      _this.props.history.push('/home')
    }, 5000);
  }
  render() {
    let types = [
      "blank",
      "balls",
      "bars",
      "bubbles",
      "cubes",
      "cylon",
      "spin",
      "spinningBubbles",
      "spokes"
    ];
    return (
      <>
        <div
          style={{
            position: "fixed",
            background: "#282c34",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <div style={{ margin: "100px 100px" }}>
            <span style={{ color: "#fff", margin: "0 0 30px" }}>
              {G.systeamTitle}
            </span>
            <ReactLoding type={"bars"} color="#fff" />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: 20,
              right: 50
            }}
          >
            <ReactLoding
              type={"spinningBubbles"}
              color="#fff"
              width="35px"
              height="35px"
            />
          </div>
        </div>
      </>
    );
  }
}