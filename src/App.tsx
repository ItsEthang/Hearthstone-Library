import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"filter"
        "main"`,
        lg: `"header"
        "filter"
        "main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"header"}>
          <Header />
        </GridItem>
      </Show>
      <GridItem bg="red.300" area={"filter"}>
        Filter
      </GridItem>
      <GridItem bg="yellow.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
