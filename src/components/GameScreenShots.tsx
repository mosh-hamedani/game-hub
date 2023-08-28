import React from 'react'
import { useScreenshot } from '../hooks/useScreenShots';
import { SimpleGrid, Image } from '@chakra-ui/react';
interface Props {
    gameID: number;
}

export const GameScreenShots = ({ gameID }: Props) => {
    const { data, error, isLoading } = useScreenshot(gameID)
    if (error) throw error;
    if (isLoading) return null;
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} >
            {
                data?.results.map((data) => <Image key={data.id} src={data.image} />)
            }

        </SimpleGrid>
    )
}
