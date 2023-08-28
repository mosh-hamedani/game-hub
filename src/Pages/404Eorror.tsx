import { Box , Button, Heading, Image , Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <Box fontFamily={'ubuntu'} bgColor={'white'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Box color={'blackAlpha.900'} padding={4} letterSpacing={0.5} >
                <Text>ERROR 404</Text>
                <Heading>HEY BUDDY!</Heading>
                <Text>We can't seem to find the page you are looking for</Text>
                <Box 
                textAlign={'center'}
                mt={1}
                height={'30px'} padding={1} width={'100px'} bgColor={'blackAlpha.900'} color={'white'} borderRadius={10} >
                <Link to={'/'}>Go Home</Link>
                </Box>
               
            </Box>
        </Box>
    )
}
