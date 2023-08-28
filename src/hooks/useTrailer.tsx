import { useQuery } from "react-query";
import { apiClient } from "../services/api-client";

interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: { 480: string, max: string };
}

export const useTrailer = (gameID: number) => {
    const generic = new apiClient<Trailer>(`/games/${gameID}/movies`)

    return useQuery({
        queryKey: ['Trailer', gameID],
        queryFn: generic.getAll
    })
}