import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"filter slide"
        "main slide"`,
        lg: `"header"
        "filter"
        "main"`,
      }}
    >
      <Show above="lg">
        <GridItem bg="blue.300" area={"header"}>
          Header
        </GridItem>
      </Show>
      <GridItem bg="red.300" area={"filter"}>
        Filter
      </GridItem>
      <GridItem bg="yellow.300" area={"main"}>
        Main
      </GridItem>
      <Show below="lg">
        <GridItem bg="pink.300" area={"slide"}>
          Slide
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
