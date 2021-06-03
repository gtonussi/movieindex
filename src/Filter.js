import PropTypes from 'prop-types'

export function Filter({ setFilter, filter }) {
  return (
    <label>
      Filter:&nbsp;
      <input
        onChange={(e) => { setFilter(e.target.value); }}
        value={filter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
