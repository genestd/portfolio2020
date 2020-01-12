import React, { useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import reducer, { INITIAL_STATE } from './store/reducer'
import * as actions from './store/actionTypes'
import Menu from './components/Menu'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Error from './pages/Error'
import routes from './routes'
import './App.scss';

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const closeDrawer = () => state.isDrawerOpen ? dispatch({ type: actions.TOGGLE_DRAWER}) : null
  const toggleTheme = () => dispatch({ type: actions.SET_THEME, theme: state.theme === 'dark' ? 'light' : 'dark'})

  return (
    <div className={`app ${state.theme}-theme`}>
      <div className='sidebar'>
        <div className='nav-container'>
          <FontAwesomeIcon className='nav-icon' icon={state.theme === 'dark' ? faSun : faMoon} onClick={toggleTheme} />
          <Menu menuitems={routes} />
        </div>
        <div className='nav-container-responsive'>
          <i className='material-icons pointer' onClick={() => dispatch({ type: actions.TOGGLE_DRAWER })}>menu</i>
          <FontAwesomeIcon icon={state.theme === 'dark' ? faSun : faMoon} onClick={toggleTheme} />
        </div>
        <div className='nav-drawer' style={{ display: state.isDrawerOpen ? 'block' : 'none' }}>
          <Menu menuitems={routes} clickHandler={closeDrawer} />
        </div>
      </div>

      <div className='main-container'>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='*' component={Error} />
        </Switch>
      </div>
    </div>
  )
}


export default App;
