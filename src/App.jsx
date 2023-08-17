import { Flex } from "@chakra-ui/react";
import Location from "../Location";
import NavComponent from "./components/Navbar";
import "./App.css"

function App() {
  return (
    <Flex flexDirection="column">
      <NavComponent />
      <Location />
    </Flex>
  );
}

export default App;
