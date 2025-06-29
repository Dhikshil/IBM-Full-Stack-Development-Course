{/*Here we will have the code for the content rating application which will only include the main JSX code and not all other source files and the css code */}

import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {  
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }))
      }
    };
  }
  
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>

      </p>
      <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className="dislike-button" onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
        
      </div>
      <br></br>
      Total Ratings: ({this.state.totalRatings})
     </div>
     </>
    );
  }
}

export default ContentRating;
