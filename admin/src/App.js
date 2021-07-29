import {React,Component} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MemberList from "./components/page/memberlist";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import AddUser from "./components/user/addmember";
import EditUser from "./components/user/editmember";
import User from "./components/user/user";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MemberList} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
          );
    }
}
 
export default App;

