import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Animal } from "./APIResponsesTypes";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  //results.data.breeds => serfan say mikone ke meghdar breeds ro az data va data ro
  //    az results bekhoone age harkodoom mojood nabashan kata mide
  //results?.data?.breeds ?? [] => be tartib harkodoom age bashe mire badi,
  //    age nabashe [] ke araay khali hast ro barmigardoone
  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
