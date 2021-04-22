import React from 'react';
import NavList from "../../components/Nav/NavList";
import NameCard from "../../components/NameCard/NameCard";
import Motivational from '../../components/Motivational/Motivational';
import Recommend from '../../components/Recommend/Recommend'


class HomePage extends React.Component {
  state ={recommend: 0}

  counting = (x) => {
    if (x ==="yay") {
      this.setState({
        recommend: this.state.recommend + 1
      })
    }
    else if (x === "nay") {
      this.setState({
        recommend: this.state.recommend - 1
      })
    }
  }

  render () {
    return (
      <div className="App">
        <NameCard />
        <NavList />
        <Motivational />
        <Recommend count={this.state.recommend} counting={this.counting}/>
      </div>
  )}
}

export default HomePage;