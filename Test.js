import React from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlipper from './ReactCardFlipper';

ReactDOM.render(
  <div id="main" className="container">
    <div className="row">
      <div className="col-10 text-center col-centered">
        <ReactCardFlipper width="300px" height="400px" behavior="click">
          <div className="text-center">
            You can click me, go ahead... Try it.
          </div>
          <div className="text-center">
            Great job! You win person of the year.
          </div>
        </ReactCardFlipper>
        <ReactCardFlipper width="300px" height="400px" behavior="hover">
          <div className="text-center">
            This is a second card because you can have multiple. This one hovers!
          </div>
          <div className="text-center">
            Great job! You win person of the day.
          </div>
        </ReactCardFlipper>
        <ReactCardFlipper width="300px" height="400px" behavior="click" levitate={true}>
          <div className="text-center">
            You can click me, and I levitate
          </div>
          <div className="text-center">
            Great job! You win person of the minute.
          </div>
        </ReactCardFlipper>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
