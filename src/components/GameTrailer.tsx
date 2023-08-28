import { useTrailer } from '../hooks/useTrailer'
interface Props {
    gameID: number;
}

export const GameTrailer = ({ gameID }: Props) => {
    const { data, error, isLoading } = useTrailer(gameID)
    if (error) throw error;
    if (isLoading) return null;
    return (
        <video src={data?.results[0]?.data[480]} poster={data?.results[0]?.preview}
            controls
        >
        </video>
    )
}
