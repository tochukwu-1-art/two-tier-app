import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Data";
import User from "./User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Data} />
          <Route path="/user" Component={User} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
