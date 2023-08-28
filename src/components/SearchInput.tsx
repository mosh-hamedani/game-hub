import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useGameQueryStore } from "../Zustand/zustandStore";
import { useNavigate } from 'react-router-dom'


const SearchInput = () => {
  const searchText = useGameQueryStore(s => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        searchText(ref.current.value);
        navigate('/');
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
