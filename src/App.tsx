import { Suspense } from "react";
import "./App.css";
import ProfileTimeline from "./Posts";
import Users from "./Users";
import ProfileDetails from "./User";

function App() {
  return (
    <div className="wrapper">
      <Suspense fallback={<h1>Loading users...</h1>}>
        <Users />
      </Suspense>
      <div className="user-timeline">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <ProfileDetails />
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfileTimeline />
        </Suspense>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
