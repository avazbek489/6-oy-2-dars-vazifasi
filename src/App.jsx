import "./App.css";
import UserList from "./components/UserList/index.jsx";
import props from './assets/data.json'
function App() {
  return (
    <div>
      <UserList users={props}></UserList>
    </div>
  );
}

export default App;
