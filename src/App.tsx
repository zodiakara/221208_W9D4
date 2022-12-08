import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapComponent from "./components/BootstrapComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import MyNavbar from "./components/MyNavbar";
import BootstrapComponent from "./components/BootstrapComponent";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
        {/* <ClassComponent
          subTitle="this is a subtitle text"
          count={10}
          customClassName="text-danger"
        />
        <ClassComponent subTitle="this is a subtitle text" count={10} /> */}

        <FunctionalComponent
          subTitle="this is a subtitle text"
          count={8}
          customClassName="text-info"
        />
        <BootstrapComponent />
      </header>
    </div>
  );
}

export default App;
