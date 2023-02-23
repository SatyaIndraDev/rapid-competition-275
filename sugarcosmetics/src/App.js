import { Box } from "@chakra-ui/react";
import "./App.css";
import Products from "./Components/ProductsData/Products";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <Box className="App" bg="#f2f2f2">
      <MainRoutes />
    </Box>
  );
}

export default App;
