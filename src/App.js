import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }

  }

  handleClickAge = () => {
    this.setState({
      sortBy: "Age"
    })
  }

  handleClickName() {
    this.setState({
      sortBy: "Name"
    })
  }

  handleClickPoints() {
    this.setState({
      sortBy: "Points"
    })
  }

  handleClickRank() {
    this.setState({
      sortBy: "Rank"
    })
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age handleClickAge={this.handleClickAge}></Age>
          <Name handleClickName={this.handleClickName.bind(this)}></Name>
          <Points handleClickPoints={this.handleClickPoints.bind(this)}></Points>
          <Rank handleClickRank={this.handleClickRank.bind(this)}></Rank>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

