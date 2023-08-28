import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          onClick={() => console.log(game.description)}
          fontSize='2xl'>
          <Link to={'games/' + game.slug}>
            {game.slug}<Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard