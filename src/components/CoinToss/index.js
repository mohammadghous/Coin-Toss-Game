// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: headImage, head: 0, tail: 0}

  flippingTheCoin = () => {
    const {head, tail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let image = ''
    let updateHeadCount = head
    let updatedTailCount = tail

    if (tossResult === 0) {
      updateHeadCount += 1
      image = headImage
    } else {
      updatedTailCount += 1
      image = tailImage
    }
    this.setState({
      tossImage: image,
      head: updateHeadCount,
      tail: updatedTailCount,
    })
  }

  render() {
    const {tossImage, head, tail} = this.state
    const total = head + tail

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="icon" src={tossImage} alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.flippingTheCoin}
          >
            Toss Coin
          </button>
          <div className="counting">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{head}</p>
            <p className="count">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
