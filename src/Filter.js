export function Filter({ setFilter, filter }) {
  return (
    <label>
      Filter:&nbsp;
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={filter}
      />
    </label>
  );
}
