// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends React.Component {
    constructor(props) {
        super()

        this.state = { currentSlideIndex: 0 }
    }

    render() {
        return (
            <div className="ImageSlider"
            >I am on slide {this.state.currentSlideIndex}

            </div>
        )
    }
}
