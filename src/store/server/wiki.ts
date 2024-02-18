import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios"
import { WikiAdd, WikiEdit } from "../../interfaces/wiki";


export const useGetWikiInfo = () => {
  const { data } = useQuery({
    queryKey: ["WIKIINFO"],
    queryFn: async () => {
        const { data } = await axios.get(`http://localhost:3001/wiki`);
        return data;
    },
  });
  return data;
};

export const useGetWikiDetail = (id: number) => {
  const { data } = useQuery({
    queryKey: ["WIKIDETAIL"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/wiki/${id}`);
      return data;
    },
  });
  return data;
};

/**위키 수정 */
export const usePatchWiki = (id: number) => {
  const mutate = useMutation({
    mutationFn: async (payload: string) => {
      const response = await axios.patch(`http://localhost:3001/wiki/${id}`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("수정했어요. " + data);
    },
    onError: (error) => {
      console.log("수정하지 못하였어요. " + error);
    },
  });
  return mutate;
};

/**위키 추가 */
export const usePostWiki = () => {
  const mutate = useMutation({
    mutationFn: async (payload: WikiAdd) => {
      const response = await axios.post(`http://localhost:3001/wiki`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("추가되었어요", data);
    },
    onError: (error) => {
      console.log("error : ", error);
    },
  });

  return mutate;
};
