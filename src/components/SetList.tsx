import useFilters from "../hooks/useFilters";
import { Select, Skeleton } from "@chakra-ui/react";

const SetList = () => {
  const { standard, wild, isLoading, err } = useFilters();

  if (err) return null;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <>
      <Select placeholder="Filter by Sets">
        {standard.map((set) => (
          <option key={set} value={set}>
            {set}
          </option>
        ))}

        {wild.map((set) => (
          <option key={set} value={set}>
            {set}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SetList;
