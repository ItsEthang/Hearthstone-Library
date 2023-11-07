import useFilters from "../hooks/useFilters";

const SetList = () => {
  const { standard, wild } = useFilters();
  return (
    <>
      <h2>Standard Sets</h2>
      <ul>
        {standard.map((set) => (
          <li key={set}>{set}</li>
        ))}
      </ul>
      <h2>Wild Sets</h2>
      <ul>
        {wild.map((set) => (
          <li key={set}>{set}</li>
        ))}
      </ul>
    </>
  );
};

export default SetList;
