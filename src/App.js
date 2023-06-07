import logo from "./logo.svg";
import "./App.css";
import { Login } from "./login";
import "./login.scss";
import { Dashboard } from "./dashboard";
function App() {
  return (
    <div className="App">
      <Login></Login>
      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
