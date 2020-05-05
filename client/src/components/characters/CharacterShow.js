import React, { Component } from 'react';
import axios from 'axios';
import { Auth0Consumer } from "../../react-auth0-spa";
import { Tab } from 'semantic-ui-react'

import CharacterAttributes from './CharacterAttributes'

class CharacterShow extends Component {
  state = { attributes: [], character: [], token: '' }

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
      axios.get(`/api/characters/${this.props.match.params.id}/character_attributes`)
      .then(res => {
        this.setState({ attributes: res.data });
      })
      .catch(err => {
        console.log(err)
      });
  }

  renderOverview = () => {
    const { character } = this.state
		return(
        //// TODO: GraphQL
      <div>
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

  renderTabs = () => {
    const panes = [
      { menuItem: 'Overview', render: () => <Tab.Pane>{this.renderOverview()}</Tab.Pane> },
      { menuItem: 'Items', render: () => <Tab.Pane>Items</Tab.Pane> },
      { menuItem: 'Skills', render: () => <Tab.Pane><CharacterAttributes attributes={this.state.attributes}/></Tab.Pane> },
      { menuItem: 'Spells', render: () => <Tab.Pane>Spells</Tab.Pane> },
    ]
    return <Tab panes={panes} />
  }

	render() {
		return(
        <div>
          <h1>{this.state.character.name}</h1>
          {this.renderTabs()}
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
