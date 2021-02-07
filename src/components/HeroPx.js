import React from "react"

import Container from "../components/Container"

import HeroStyles from "./HeroPx.module.scss"
import RowStyles from "../components/Row.module.scss"

class HeroPx extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div
        className={
          HeroStyles.hero + " " + HeroStyles[this.props.pageType] + " hero"
        }
      >
        {/* Hero will be a layout component */}

        <Container>
          <div className={RowStyles.row + " valign-wrapper"}>
            <div className="col-sm-12">
              <div
                className={
                  HeroStyles.heroContent +
                  " hero-content"
                }
              >
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <p>{this.props.content}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default HeroPx
