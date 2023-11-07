import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchInfoResponse {
    classes: string[];
    standard: string[];
    wild: string[];
    types: string[];
    factions: string[];
    qualities: string[];
    races: string[];
}

const useFilters = () => {
    const [classes, setClasses] = useState<string[]>([])
    const [standard, setStandard] = useState<string[]>([]);
    const [wild, setWild] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [factions, setFactions] = useState<string[]>([]);
    const [qualities, setQualities] = useState<string[]>([]);
    const [races, setRaces] = useState<string[]>([])
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false)
  
    //REMEMBER THE DEPENDENCY ARRAY WHEN USING THE useEffect() HOOK!
    useEffect(() => {
      const controller = new AbortController();
      setIsLoading(true)
      apiClient
        .get<FetchInfoResponse>("/info", {signal: controller.signal})
        .then((res) => {
          setClasses(res.data.classes)
          setStandard(res.data.standard)
          setWild(res.data.wild)
          setTypes(res.data.types)
          setFactions(res.data.factions)
          setQualities(res.data.qualities)
          setRaces(res.data.races)
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErr(err.message);
          setIsLoading(false);
        });
  
        return () => controller.abort();
    }, []);
  
    return {classes, standard, wild, types, factions, qualities, races, err, isLoading};
}

export default useFilters;