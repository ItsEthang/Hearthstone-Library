import useFilters from "../hooks/useFilters";
import { Select, Skeleton } from "@chakra-ui/react";

interface Props {
  onSelectSet: (cardSet: string) => void;
}

const SetList = ({ onSelectSet }: Props) => {
  const { standard, wild, isLoading, err } = useFilters();

  if (err) return null;
  if (isLoading) return <Skeleton height="40px" />;

  return (
    <>
      <Select
        placeholder="Filter by Sets"
        onChange={(e) => onSelectSet(e.target.value)}
      >
        {standard.map((set, index) => (
          <option key={index} value={set}>
            {set}
          </option>
        ))}

        {wild.map((set, index) => (
          <option key={index} value={set}>
            {set}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SetList;
