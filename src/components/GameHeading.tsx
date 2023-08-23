import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import { getPlatformName } from "../hooks/usePlatformName";
import { getGenreName } from '../hooks/useGenreName';

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data : genre} = useGenres()
  const platformName = getPlatformName(gameQuery.platformId)
  const genreName = getGenreName(gameQuery.genreId)
  const heading = `${platformName || ''} ${genreName || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading