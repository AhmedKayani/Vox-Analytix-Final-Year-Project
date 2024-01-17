import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";

// Create a custom hook that fetches the data
export function useAnalysisData() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.get("/analysis/dataAnalysis", {
        // ID of the user who is logged in. Currently a dummy value.
        owner: 1,
      }),
  });

  // Return the data
  return data ? data.data : [];
}

export default useAnalysisData;
