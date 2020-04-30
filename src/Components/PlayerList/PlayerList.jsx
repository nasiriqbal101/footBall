import React, { Component} from "react";
import styles from "./PlayerList.module.scss";
import Players from "../Players/Players";
import { playersData } from "../../static/PlayersData";


export default class PlayerList extends Component {
    state = {
      availablePlayers: playersData,
      selectedTeam: [],
      selectedGoalkeeper: 0,
      selectedDefender: 0,
      selectedMidfielder: 0,
      selectedAttacker: 0,
    };
  
    checkPlayerType = (player) => {
      switch (player.position) {
        case "Goalkeeper":
          if (this.state.selectedGoalkeeper < 1) {
            this.setState({
              selectedGoalkeeper: this.state.selectedGoalkeeper + 1,
            });
            return true;
          } else {
            return false;
          }
        case "Defender":
          if (this.state.selectedDefender < 3) {
            this.setState({
              selectedDefender: this.state.selectedDefender + 1,
            });
            return true;
          } else {
            return false;
          }
        case "Midfielder":
          if (this.state.selectedMidfielder < 4) {
            this.setState({
              selectedMidfielder: this.state.selectedMidfielder + 1,
            });
            return true;
          } else {
            return false;
          }
        case "Attacker":
          if (this.state.selectedAttacker < 3) {
            this.setState({
              selectedAttacker: this.state.selectedAttacker + 1,
            });
            return true;
          } else {
            return false;
          }
      }
      return false;
    };
  
    adjustSelectedTeam = () => {
      this.setState({
        selectedGoalkeeper: this.state.selectedGoalkeeper - 1,
      });
  
      this.setState({
        selectedDefender: this.state.selectedDefender - 1,
      });
  
      this.setState({
        selectedMidfielder: this.state.selectedMidfielder - 1,
      });
  
      this.setState({
        selectedAttacker: this.state.selectedAttacker - 1,
      });
    };
  
    handleClick = (player) => {
      const playerIndex = this.state.availablePlayers.includes(player)
        ? this.state.availablePlayers.indexOf(player)
        : this.state.selectedTeam.indexOf(player);
  
      if (
        this.state.availablePlayers.includes(player) &&
        this.checkPlayerType(player)
      ) {
        const removingPlayer = this.state.availablePlayers;
        const addingPlayer = this.state.selectedTeam;
        addingPlayer.push(player);
        removingPlayer.splice(playerIndex, 1);
        this.setState({
          availablePlayers: removingPlayer,
          selectedTeam: addingPlayer,
        });
      } else if (this.state.selectedTeam.includes(player)) {
        this.adjustSelectedTeam(player);
        const removingPlayer = this.state.selectedTeam;
        const addingPlayer = this.state.availablePlayers;
        addingPlayer.push(player);
        removingPlayer.splice(playerIndex, 1);
        this.setState({
          availablePlayers: addingPlayer,
          selectedTeam: removingPlayer,
        });
      }
    };
  
    render() {
      return (
        <React.Fragment>
          <div className={styles.container}>
            <section className={styles.availablePlayers}>
              <div className={styles.availableGoalkeeper}>
                {this.state.availablePlayers.map((eachElement, index) => {
                  if (eachElement.position === "Goalkeeper") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.avaDef}>
                {this.state.availablePlayers.map((eachElement, index) => {
                  if (eachElement.position === "Defender") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.avaMid}>
                {this.state.availablePlayers.map((eachElement, index) => {
                  if (eachElement.position === "Midfielder") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.avaAttac}>
                {this.state.availablePlayers.map((eachElement, index) => {
                  if (eachElement.position === "Attacker") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
            </section>
            <section className={styles.selectedTeam}>
              <div className={styles.selectedGoalkeeper}>
                {this.state.selectedTeam.map((eachElement, index) => {
                  if (eachElement.position === "Goalkeeper") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.selectedDefender}>
                {this.state.selectedTeam.map((eachElement, index) => {
                  if (eachElement.position === "Defender") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.selectedMidfielder}>
                {this.state.selectedTeam.map((eachElement, index) => {
                  if (eachElement.position === "Midfielder") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.selectedAttacker}>
                {this.state.selectedTeam.map((eachElement, index) => {
                  if (eachElement.position === "Attacker") {
                    return (
                      <Players
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    );
                  }
                })}
              </div>
            </section>
          </div>
        </React.Fragment>
      );
    }
  }
  