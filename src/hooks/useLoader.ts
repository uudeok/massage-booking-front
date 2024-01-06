import { useMemo } from "react";

type LoaderResult<T> = {
  fetchData: T | T[];
};

const useLoader = <T>(data: T | undefined): LoaderResult<T> => {
  const fetchData = useMemo(() => {
    if (data && data !== undefined) {
      return data;
    }
    return [];
  }, [data]);

  return { fetchData };
};

export default useLoader;
