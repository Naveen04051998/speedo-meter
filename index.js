import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onClickApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="button-1"
            onClick={this.onClickApplyBrakeButton}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button-2"
            onClick={this.onClickApplyBrakeButton}
          >
            Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
