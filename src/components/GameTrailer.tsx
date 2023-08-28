import { useTrailer } from '../hooks/useTrailer'
interface Props {
    gameID: number;
}

export const GameTrailer = ({ gameID }: Props) => {
    const { data, error, isLoading } = useTrailer(gameID)
    return (
        <video src={data?.results[0]?.data[480]} poster={data?.results[0]?.preview}
        controls
        >
        </video>
    )
}
