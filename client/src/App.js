import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import store from "./utils/store";
import Detail from "./pages/Detail";
import CreateUser from "./components/CreateUser";
import CreateProperty from "./components/CreateProperty";
import UpdateProperties from "./pages/UpdateProperties";
import UpdatePropertyForm from "./pages/UpdatePropertyForm";
import UpdateUser from "./components/UpdateUser";
import TenantInfo from "./components/TenantInfo"
import Upload from "./components/Upload"
import MaintenanceRequest from "./components/MaintenanceRequest";

import ApolloClient from "apollo-boost";

import "./App.css";
import Landing from "./pages/Landing";
import NavBar from "./components/NewNav";
import Login from "./pages/Login";
import RequestInfo from "./pages/RequestInfo";
import AdminDash from "./pages/AdminDash";
import TenantDash from "./pages/TenantDash";
// import NoMatch from "./pages/NoMatch";
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
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              {/* <Nav /> */}
              <NavBar />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/requestInfo" component={RequestInfo} />
                <Route exact path="/adminDash" component={AdminDash} />
                <Route exact path="/tenantDash/:id" component={TenantDash} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route
                  exact
                  path="/AdminDash/CreateUser"
                  component={CreateUser}
                />
                <Route
                  exact
                  path="/AdminDash/CreateProperty"
                  component={CreateProperty}
                />
                <Route
                  exact
                  path="/AdminDash/UpdateProperty"
                  component={UpdateProperties}
                />
                <Route
                  exact
                  path="/AdminDash/UpdateProperty/:id"
                  component={UpdatePropertyForm}
                />
                <Route
                  exact
                  path="/AdminDash/UpdateUser"
                  component={UpdateUser}
                />
                <Route
                  exact
                  path="/TenantDash/MaintenanceRequests"
                  component={MaintenanceRequest}
                />
                <Route
                  exact
                  path="/TenantDash/TenantInfo"
                  component={TenantInfo}
                />
                <Route exact path="/Upload" component={Upload} />
              </Switch>
            </header>
          </div>
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
