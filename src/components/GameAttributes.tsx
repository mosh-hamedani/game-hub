import { Game } from '../hooks/useGames'
import { SimpleGrid, Text } from "@chakra-ui/react"
import { DefinationItem } from "../components/DefinationItem"
import CriticScore from "../components/CriticScore"
interface Props {
    game: Game;
}

export const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid columns={2} as='dl' >
            <DefinationItem term="Platforms">
                {
                    game.parent_platforms.map((data) => <Text key={data.platform.id} >{data.platform.name}</Text>)
                }
            </DefinationItem>
            <DefinationItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinationItem>
            <DefinationItem term="Genres">
                {
                    game.genres.map((data) => <Text key={data.id} >{data.name}</Text>)
                }
            </DefinationItem>
            <DefinationItem term="Publishers">
                {
                    game.publishers.map((data) => <Text key={data.id}>{data.name}</Text>)
                }
            </DefinationItem>

        </SimpleGrid>)
}
