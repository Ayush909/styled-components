import { ThemeProvider } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button.js";
import "./App.css";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
