import React, { Component } from 'react';
import axios from 'axios';
import { Auth0Consumer } from "../../react-auth0-spa";

class CharacterShow extends Component {
  state = { character: [], token: '' }

  componentDidMount(){
    const { auth: { getTokenSilently } } = this.props
    const p = getTokenSilently()
    p.then(res=>
      {
        this.setState({token: res}, function (){
          axios.get(`/api/characters/${this.props.match.params.id}`, {
            headers: { Authorization: `Bearer ${this.state.token}` }
          })
          .then(res => {
            this.setState({ character: res.data });
          })
          .catch(err => {
            console.log(err)
          });
        })
      })
  }

	render() {
    const { character } = this.state
		return(
        //// TODO: GraphQL
      <div>
        <h1>Character Show</h1>
        <ul>
          <li>
            {character.name}
          </li>
          <li>
            {character.race}
          </li>
          <li>
            {character.char_class}
          </li>
          <li>
            {character.level}
          </li>
          <li>
            {character.alignment}
          </li>
          <li>
            {character.back_story}
          </li>
          <li>
            {character.traits}
          </li>
        </ul>
      </div>
    )
	}
}

const ConnectedCharacterShow = (props) => (
  <Auth0Consumer>
    {auth =>
      <CharacterShow {...props} auth={auth} />
    }
  </Auth0Consumer>
)

export default ConnectedCharacterShow;
