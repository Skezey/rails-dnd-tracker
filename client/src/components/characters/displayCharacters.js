import React, { Component } from 'react';
import axios from 'axios';

class DisplayCharacters extends Component {
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

	render() {
		return(
      <div></div>
    )
	}

}

export default DisplayCharacters;
