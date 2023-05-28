import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = lazy(() => import("./Components/Register/Registration"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
}

export default App;
