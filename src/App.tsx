import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

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
      <GridItem bg="black.300" area={"main"}>
        <CardGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
