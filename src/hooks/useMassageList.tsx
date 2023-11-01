import { useQuery } from "@tanstack/react-query";
import { fetchMassageList } from "../api/book/bookApi";

export const useMassageList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["massageList"],
    queryFn: fetchMassageList,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return { data, isLoading, error };
};
