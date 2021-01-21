import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import store from "./utils/store";
import Detail from "./pages/Detail";
import CreateUser from './components/CreateUser/index.js';
import CreateProperty from './components/CreateProperty/index';
import UpdateProperty from './components/UpdateProperty/index';


import ApolloClient from "apollo-boost";


import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import RequestInfo from "./pages/RequestInfo";
import AdminDash from "./pages/AdminDash";
import TenantDash from "./pages/TenantDash";
import NoMatch from "./pages/NoMatch";
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
          <Provider store={store}>
            <header className="App-header">
              <Nav />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/requestInfo" component={RequestInfo} />
                <Route exact path="/adminDash" component={AdminDash} />
                <Route exact path="/tenantDash" component={TenantDash} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/createuser" component={CreateUser} />
                <Route exact path="/updateproperty" component={UpdateProperty} />                
                <Route
                  exact
                  path="/createproperty"
                  component={CreateProperty}
                />
                <Route component={NoMatch} />
                {/* <PropertyList /> */}
              </Switch>
            </header>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
