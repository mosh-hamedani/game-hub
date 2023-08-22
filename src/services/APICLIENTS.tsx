import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "react-query";

export class APICLIENT {
    endpoint: string;
    querykey: string;
    gameQuery: GameQuery | undefined;
    constructor(endpoint: string, queryKey: string, gameQuery: GameQuery | undefined) {
        this.endpoint = endpoint;
        this.querykey = queryKey;
        this.gameQuery = gameQuery;
    }
    getAll<T>() {
        return useQuery({
            queryKey: [this.querykey, this.gameQuery],
            queryFn: () => {
                return apiClient.get<FetchResponse<T>>(this.endpoint, {
                    params: {
                        genres: this.gameQuery?.genre?.id,
                        parent_platforms: this.gameQuery?.platform?.id,
                        ordering: this.gameQuery?.sortOrder,
                        search: this.gameQuery?.searchText,
                    }
                })
                    .then((resp) => resp.data)
            },
            staleTime: 1 * 60 * 1000, // 1 min

        })
    }
}