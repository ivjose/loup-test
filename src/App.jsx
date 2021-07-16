import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Recipe from 'pages/Recipe'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
