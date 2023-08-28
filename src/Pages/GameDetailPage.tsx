import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import { useGame } from "../hooks/useGame"
import { ExpandableText } from "../components/ExpandableText"
import { GameAttributes } from "../components/GameAttributes"
import { GameTrailer } from "../components/GameTrailer"
import { GameScreenShots } from "../components/GameScreenShots"

export const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)
    if (isLoading) return <Spinner />;
    if (error || !game) throw error;

    return (
        <>
            <SimpleGrid columns={{base:1,md:2}} >
                <GridItem padding={4} >
                    <Heading>{game.name}</Heading>
                    <ExpandableText children={game.description_raw} ></ExpandableText>
                    <GameAttributes game={game} />

                </GridItem>
                <GridItem>
                    <GameTrailer gameID={game.id} />
                    <GameScreenShots gameID={game.id} />
                </GridItem>

            </SimpleGrid>


        </>
    )
}
