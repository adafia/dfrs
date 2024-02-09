import "./App.css";
import ProfileTimeline from "./Posts";
import Users from "./Users";
import ProfileDetails from "./User";

function App() {
  return (
    <div className="wrapper">
      <Users />
      <div className="user-timeline">
        <ProfileDetails />
        <ProfileTimeline />
      </div>
    </div>
  );
}

export default App;
