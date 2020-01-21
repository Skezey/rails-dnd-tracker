
import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import './styles/Header.css';

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/dndlogo.png" width="112" height="28" />
        </a>

        <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample"

        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href='/characters' className="navbar-item">
            Characters
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href="/spells" className="navbar-item">
                Spells
              </a>
              <a href="/items" className="navbar-item">
                Items
              </a>
              <a href="/classes" className="navbar-item">
                Classes
              </a>
              <hr className="navbar-divider" />
              <a href="#" className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            {!isLoading && !user && (
              <button onClick={loginWithRedirect} className="button is-primary">
                Login
              </button>
            )
          }
            {!isLoading && user && (
              <>
                <button
                onClick={() => window.location.href = '/profile'}
                className="button is-light"
                >
                {
                  user.picture &&
                  <img className="userImg" src={user.picture} alt="My Avatar" />
                }
                {user.name}
                </button>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="button is-primary"
                >
                  Logout
                </button>
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
