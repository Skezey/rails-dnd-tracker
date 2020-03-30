import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class DisplayCharacters extends Component {

  state = {characters: [], token: ''}

  componentDidMount() {
    const { token } = this.props
    token
    .then(res=>
      {
        this.setState({token: res}, function (){
          axios.get('/api/characters', {
            headers: { Authorization: `Bearer ${this.state.token}` }
          })
          .then(res => {
            this.setState({ characters: res.data });
          })
          .catch(err => {
            console.log(err)
          });
        })
      })
  }

  renderCharacters = () => {
    const { characters } = this.state
    return characters.map(character =>
      <div key={character.id}>
      <hr/>
      <Link
          to={{
            pathname: `/characters/${character.id}`
          }}
        >
          <p>{character.name}</p>
      </Link>
      <hr/>
      </div>
    )
  }

	render() {
		return(
      <div>
        {this.renderCharacters()}
      </div>
    )
	}

}

export default DisplayCharacters;
