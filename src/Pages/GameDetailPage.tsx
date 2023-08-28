import { Button, Heading, Spinner, Text } from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import { useGame } from "../hooks/useGame"
import { useState } from 'react'

export const GameDetailPage = () => {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGame(slug!)
    if (isLoading) return <Spinner />;
    if (error || !game) throw error;
    const [desc, setDesc] = useState(game.description_raw.substring(0, 299) + '...')

    return (
        <div>
            <Heading>{game.name}</Heading>
            {
                game.description_raw.length < 300 ? <Text>{game.description_raw}</Text> :
                    <Text>{desc}
                        <Button
                            onClick={() => {
                                desc.length < 300 ? setDesc(game.description_raw) : game.description_raw.substring(0, 299) + '...';
                            }}
                        >Read more</Button>
                    </Text>
            }

        </div>
    )
}
