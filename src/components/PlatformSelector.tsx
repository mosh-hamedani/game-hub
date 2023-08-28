import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/api-client";
import usePlatforms from "../hooks/usePlatforms";
import { getPlatformName } from "../hooks/usePlatformName";
import { useGameQueryStore } from "../Zustand/zustandStore";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { gameQuery, setPlatform } = useGameQueryStore();
  const platformName = getPlatformName(gameQuery.platformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
