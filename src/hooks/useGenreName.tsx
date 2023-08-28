import useGenres from "./useGenres";


export const getGenreName = (id?:number)=>
{
    const { data } =  useGenres()
    const GenreName = data?.results.find((genre) => genre.id === id )
    return GenreName?.name;

}