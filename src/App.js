import styled from "styled-components";
import About from "./components/About";
import Chats from "./components/Chats";
import Header from "./components/Header";
import SetQueries from "./components/SetQueries";
import { GlobalProvider } from "./context/GlobalState";

const Wrapper = styled.div`
  max-width: 480px;
  background-color: #f4f4f4;
  color: #4e78f6;
  margin: 30px auto;
  overflow: auto;
  min-height: 100vh;
`;

function App() {
  return (
    <GlobalProvider>
      <Wrapper>
        <div>
          <Header title="Manifest" />
          <About />
          <SetQueries />
        </div>
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
