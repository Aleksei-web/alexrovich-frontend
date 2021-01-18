import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import { Login } from "./views/Login";
import { AdminCreateLicense } from "./views/AdminCreateLicense";
import configurateStore from "./redux/store";
import UserRoute from "./components/routes/UserRoute";
import LicenseAll from "./views/LicenseAll";
import UpdateLicense from "./views/UpdateLicense";

function App() {
  const store = configurateStore();
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Switch>
            <UserRoute
              exact
              path="/admin/license/list"
              component={LicenseAll}
            />
            <UserRoute
              exact
              path='/admin/license/updadate/:id'
              component={UpdateLicense}
            />
            <UserRoute
              exact
              path="/admin/license/create"
              component={AdminCreateLicense}
            />
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
