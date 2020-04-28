import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from "axios";
import { Link } from "react-router-dom";

const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};



class RandomBeer extends Component {

  state = {
    randomBeer: {},
    status: STATUS.LOADING,
  }
  randomBeerId = () => {
    return 
  }
  
  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("data", response.data);
        this.setState({
          randomBeer: response.data,
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.name,
          status: STATUS.ERROR,
        });
      });
  }


  selectRandomBeer = () => {
    const { randomBeer } = this.state;
    if (randomBeer !== undefined) {
      return(
        <div>
          <div>
            <img src={ randomBeer.image_url} alt="beer"/>
            <section>
              <div>
                <p>{ randomBeer.name}</p>
                <p>{ randomBeer.tagline }</p>
              </div>
              <div>
                  <p>{ randomBeer.attenuation_level }</p>
                  <p><strong>{ randomBeer.first_brewed }</strong></p>
              </div>
              <article>{ randomBeer.description }</article>
              <span>{ randomBeer.contributed_by }</span>
              
            </section>
            
            <p><strong>Contributed by:</strong>{ randomBeer.contributed_by }</p>
          </div>
          <Link to="/">Back</Link>
        </div>
      ) 
    } 
  }
  
  render() {
    const { status } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>{ status }</div>;
      case STATUS.LOADED:
        return <div>
                <HomeButton />
                { this.selectRandomBeer() }
              </div>
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }
  }
}

export default RandomBeer;