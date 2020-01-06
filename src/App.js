import React, { useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'
import reducer, { INITIAL_STATE } from './store/reducer'
import * as actions from './store/actionTypes'
import Menu from './components/Menu'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Error from './pages/Error'
import routes from './routes'
import './App.scss';

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const closeDrawer = () => state.isDrawerOpen ? dispatch({ type: actions.TOGGLE_DRAWER}) : null

  return (
    <div className={`app ${state.theme}-theme`}>
      <div className='nav-container'>
        <Menu menuitems={routes} />
      </div>
      <div className='nav-container-responsive'>
        <i className='material-icons' onClick={() => dispatch({ type: actions.TOGGLE_DRAWER })}>menu</i>
      </div>
      <div className='nav-drawer' style={{ display: state.isDrawerOpen ? 'block' : 'none' }}>
        <Menu menuitems={routes} clickHandler={closeDrawer} />
      </div>
      <div className='main-container'>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={Error} />
        </Switch>
      </div>
    </div>
  )
}


export default App;
