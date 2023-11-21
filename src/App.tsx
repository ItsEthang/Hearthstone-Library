import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import SetList from "./components/SetList";
import ClassList from "./components/ClassList";
import { useState } from "react";

function App() {
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
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
        <HStack px="1em" py="0.5em" justifyContent="center">
          <SetList
            selectedSet={selectedSet}
            onSelectSet={(cardSet) => setSelectedSet(cardSet)}
          />
          <ClassList
            selectedClass={selectedClass}
            onSelectClass={(playerClass) => setSelectedClass(playerClass)}
          />
        </HStack>
      </GridItem>
      <GridItem bg="black.300" area={"main"}>
        <CardGrid selectedSet={selectedSet} />
      </GridItem>
    </Grid>
  );
}

export default App;
