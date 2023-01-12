import logo from "./warp-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="warp design system logo" />

        <h1>Warp Design System Colors and Tokens</h1>
        <p>
          Design tokens are a tech-agnostic way to store variables. We use
          tokens instead of hard-coded values to ensure a better UI consistency
          across different platforms.
        </p>
      </header>
    </div>
  );
}

export default App;
