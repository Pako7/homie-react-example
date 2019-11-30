import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomieWrapper from "./component/HomieWrapper";
import { TextHomie, Container } from "./style/style";

function App() {
  return (
    <div>
      <TextHomie>Homie</TextHomie>
      <Router>
        <Container>
          <Switch>
            <Route path="/">
              <HomieWrapper />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
