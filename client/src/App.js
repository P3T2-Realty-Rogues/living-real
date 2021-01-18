import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
// import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";

// import logo from './logo.svg';
import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDash from "./pages/AdminDash";
// import PropertyList from './components/Properties'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <Provider store={store}> */}
          <header className="App-header">
            <Nav />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/adminDash" component={AdminDash} />
            </Switch>
            <Landing />
            {/* <PropertyList /> */}
          </header>
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
