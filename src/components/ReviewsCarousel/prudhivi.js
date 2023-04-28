import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onClickLeftArrow = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState({activeReview: activeReview - 1})
    }
  }

  onClickRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1) {
      this.setState({activeReview: activeReview + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Reviews</h1>
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
            disabled={activeReview === 0}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="img"
              alt="left arrow"
            />
          </button>

          <div className="list-container">
            <div key={reviewsList[activeReview].imgUrl}>
              <img
                src={reviewsList[activeReview].imgUrl}
                alt={reviewsList[activeReview].username}
              />
              <p className="title">{reviewsList[activeReview].username}</p>
              <p className="desc">{reviewsList[activeReview].companyName}</p>
              <p className="comp-desc">
                {reviewsList[activeReview].description}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
            disabled={activeReview === reviewsList.length - 1}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="img"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
