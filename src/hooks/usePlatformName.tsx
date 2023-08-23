import usePlatforms from "./usePlatforms"

export const getPlatformName = (id?:number)=>
{
    const { data } = usePlatforms()
    const platformName = data?.results.find((platform) => platform.id === id )
    return platformName?.name;

}