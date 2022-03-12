import React from 'react';
import "./App.css"
import AppRoutes from "../../router/AppRoutes";
import {Provider} from "react-redux";
import store from "../../store"
import 'react-notifications/lib/notifications.css';

const {NotificationContainer} = require("react-notifications");

function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
      <NotificationContainer/>
    </Provider>
  )
}

export default App;
