import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';

import './App.css';

// import components
import Admin from './components/admin/AdminContainer';
import Login from './components/authentication/LoginContainer';

class App extends React.Component {
  render(){
    axios.defaults.baseURL = `http://demo.c-ileasing.com/fmsapi/api/modules`;
   axios.defaults.headers.common = { 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTdkOGQxNTkxMGNkYWFmNzEyNDc4NDYyZDJjOTdhZmJlNjgxY2U3OWRlNDE1OWE4OTk1ZGVmNjkwNTg3MjM4ZjgyNjQ1YmU4YzNlMjMxODAiLCJpYXQiOjE1NzQ4NDM3NDEsIm5iZiI6MTU3NDg0Mzc0MSwiZXhwIjoxNjA2NDY2MTQxLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.qGPZ7Skw-ZQa7sT1m6Jv7fwIkeShzVI1yUx1kjSFcDCa8p9YSZADkLqF8rMnbqkQTOfwX150inzyXvw8W_QbNtJHcEI-oltsXpxkGqwqGoNEwBDGUGNQtV3EVEdC5NZ-2W0sQSKAzT1vqXUEoPsOJ-IK4QMnQG_E1EQCmG6ZuS3_5RY8zUlYgSNbE9F9yXHusKZT-jPKB-uielzUE6anRAyE5BXo1U3D03JQIvwb6z7hW6UiYx0cSh7FCHyA7TCMPhkiSAhvHCR_ShME-qgh-fCITs4X0o62Os5o9r1jqyluKeRy0mClZPYlCGT0IuirxuIzqGfOt7c-vLwbFyp88Y0KkORq4b5n0JhLiItPcJ4yKS5YCNR6DSJcF2SGigJm6yWdvArbf4MI7TyE-ZID7Hisx95ve0AaONe7Y_rFsZYj578l3-w2ow065zPsNaUilK6zCv42Ck38_YXZzAtKd343keLwEkOZYWOSOC6RD25VrXBqkKxpV3_46q0S0jgGR9TB8xNz22wydU08ifebayXQt-9ZdT87Chyuab_NdsQDs810VDs3qH0zhvSUC5EtbyaNXdgKD74-ZiPmEDHIWjbsMKICztI5iP2pih6PcqI4_6v2A9zLp5PiZEdcOYM8YEKJvlxKQwW42EhEK-AkfSxGbv5ZDwmkZsCXGSetD8U` }

return (
    <Router>
      <Switch>
      <PrivateRoute exact strict path="/" component={Admin} />
        <Route exact strict path="/login" component={Login} />
      </Switch>
    </Router>

);
  }
 
}

export default App;
