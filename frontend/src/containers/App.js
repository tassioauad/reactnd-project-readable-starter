import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import PostPage from './PostPage'
import PostEditPage from './PostEditPage'
import PostsPage from './PostsPage'
import NotFound from './NotFound'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/:category/:post_id/edit" render={(props) => (<PostEditPage />)}/>
          <Route exact path="/:category/:post_id" render={(props) => (<PostPage />)}/>
          <Route path="/:category?" render={(props) => (<PostsPage category={props.match.params.category}/>)}/>
          <Route component={NotFound}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App
