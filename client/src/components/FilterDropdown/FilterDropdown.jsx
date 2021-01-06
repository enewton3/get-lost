import { useHistory } from "react-router-dom";

export default function FilterDropdown() {
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    history.push(`/listing-page/${e.target.value}`);
  };

  return (
    <>
      <label for="dropdown">Filter:</label>
      <select id="dropdown" onChange={handleChange}>
        <option value="all">All</option>
        <option value="Day-Trip">Day Trip</option>
        <option value="Expedition">Long Haul</option>
      </select>
    </>
  );
}
