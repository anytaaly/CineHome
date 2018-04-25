import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";

class Footer extends React.Component {
  handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <footer>
        <div className="ui inverted vertical footer segment">
          <div className="ui inverted section"> </div>
          <div className="ui inverted section divider"> </div>
          <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Audio and Subtitiles{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Media Center{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Privacy{" "}
                  </a>
                </div>
              </div>
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Audio and Subtitiles{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Media Center{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Privacy{" "}
                  </a>
                </div>
              </div>
              <div className="three wide column">
                <div className="ui inverted link list">
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Audio and Subtitiles{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Media Center{" "}
                  </a>
                  <a
                    href="https://github.com/anytaaly"
                    className="item item-list"
                  >
                    {" "}
                    Privacy{" "}
                  </a>
                </div>
              </div>

              <div className="seven wide column">
                <h4 className="ui inverted header"> CineHome SMU Project </h4>
                {/* <i className="red huge play circle icon"></i> */}
                <p> Project Detail goes here </p>
              </div>
            </div>
            <div className="ui inverted section divider"> </div>
            <div>
              <img src={logo} id="icon-rotate" alt="footerlogo" />
            </div>
            <div className="ui horizontal inverted small divided link list">
              <a href="https://github.com/anytaaly" className="item item-list">
                {" "}
                Site Map{" "}
              </a>
              <a href="https://github.com/anytaaly" className="item item-list">
                {" "}
                Contact Us{" "}
              </a>
              <a href="https://github.com/anytaaly" className="item item-list">
                {" "}
                Terms & Conditions{" "}
              </a>
            </div>
            <div className="ui inverted divided link list ">
              <i className="big facebook icon"> </i>
              <i className="big instagram icon"> </i>
              <i className="big twitter icon"> </i>
              <i className="big youtube icon"> </i>
            </div>
            <div>
              {" "}
              <p className="item" href="#">
                &copy;2018 All Rights Reserved
              </p>{" "}
            </div>
          </div>
          <div className="scroll-top" onClick={this.handleClick}>
            <i className="big angle double up icon" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
