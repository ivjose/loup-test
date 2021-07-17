import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Recipe from 'pages/Recipe'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/recipes" />
        </Route>

        <Route exact path="/recipes">
          <Home />
        </Route>
        <Route path="/recipes/:recipeId">
          <Recipe />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
