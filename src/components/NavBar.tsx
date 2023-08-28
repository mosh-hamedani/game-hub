import { HStack, Text, Box } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Text  fontFamily={'Rock Salt'} fontSize={{ md: '2xl', base: 'xx-small' }}>
        <Link  to='/'> Game<Box  color={'yellow.400'} verticalAlign={'middle'} fontSize={'30'} as="span"
        >X</Box>Fusions</Link>
      </Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar