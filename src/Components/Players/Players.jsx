import React, { Component } from "react";
import styles from "./Players.module.scss"

export default class Players extends Component {
    render() {
      return (
        <React.Fragment>
          <div
            className={styles.maindiv}
            onClick={() => this.props.handleClick(this.props.player)}
          >
            <div className={styles.playersname}>{this.props.player.name}</div>
            <div className={styles.playersname}>{this.props.player.position}</div>
          </div>
        </React.Fragment>
      );
    }
  }
  