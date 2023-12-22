type SearchProps = {
  onChange: (text: string) => void;
};

const Search = ({ onChange }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search for the users"
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Search;
