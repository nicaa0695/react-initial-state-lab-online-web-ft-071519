// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = { secondsLeft: props.initialCount }
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return (
                <div className="Bomb">
                    Boom!

                </div>
            )
        } else {
            return (
                <div className="Bomb">
                    {this.state.secondsLeft} seconds left before I go boom!

            </div>
            )
        }
    }
}
