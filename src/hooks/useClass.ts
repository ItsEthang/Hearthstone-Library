import useData from "./useData";

const useClass = (playerClass: string | null) => useData("classes", playerClass)

export default useClass;