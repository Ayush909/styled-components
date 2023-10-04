import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button>Button</button> */}
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
      </div>
    </>
  );
}

export default App;
