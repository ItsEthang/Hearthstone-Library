import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import SetList from "./components/SetList";
import { useState } from "react";

function App() {
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
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
      <GridItem bg="blue.900" area={"filter"}>
        <SetList
          selectedSet={selectedSet}
          onSelectSet={(cardSet) => setSelectedSet(cardSet)}
        />
      </GridItem>
      <GridItem bg="black.300" area={"main"}>
        <CardGrid selectedSet={selectedSet} />
      </GridItem>
    </Grid>
  );
}

export default App;
