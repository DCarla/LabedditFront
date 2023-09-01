import { Outlet } from "react-router-dom";
import Header from "../../components/organism/Header";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
