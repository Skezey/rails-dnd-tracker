import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
        HOME
          <p>{state}</p>
        </div>
      </div>
    </div>
 )
};

export default Home;
