import StyledButton from "./components/Button/Button.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button>Button</button> */}
        <StyledButton>Styled Button</StyledButton>
        <StyledButton variant="outline">Styled Button</StyledButton>
      </div>
    </>
  );
}

export default App;
