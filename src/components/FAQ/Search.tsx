import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import theme from "../../styles/theme";

const Search = () => {
  const { value, onChange } = useInput("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <Self>
      <SearchBoxStyle onSubmit={handleSearch}>
        <SearchStyle
          type="text"
          placeholder="궁금하신 점이 있다면 검색해보세요."
          value={value}
          onChange={onChange}
        />
        <ButtonStyle>
          <CiSearch />
        </ButtonStyle>
      </SearchBoxStyle>
    </Self>
  );
};

export default Search;

const Self = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchBoxStyle = styled.form`
  width: 55rem;
  text-align: center;
  margin: 0 auto;
  display: flex;
  background-color: aliceblue;
  font-family: ${theme.fonts.pretend};
  position: relative;
`;

const SearchStyle = styled.input`
  width: 100%;
  padding: 1rem;
  outline-style: none;
  background-color: #f6f7f8;
  border: 1px solid grey;
  font-size: 15px;

  &:hover {
    border: 1px solid ${theme.palette.greenDk};
  }
`;

const ButtonStyle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 27px;
  position: absolute;
  right: 0;
  top: 25%;
`;
