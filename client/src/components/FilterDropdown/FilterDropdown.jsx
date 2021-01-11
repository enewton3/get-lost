import { useHistory } from "react-router-dom";

export default function FilterDropdown(props) {
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    history.push(`/listing-page/${e.target.value}`);
  };

  return (
    <>
      <label htmlFor="dropdown">Filter:</label>
      <select id="dropdown" onChange={handleChange} value={props.initial}>
        <option value="all">All</option>
        <option value="Day-Trip">Day Trip</option>
        <option value="Long-Haul">Long Haul</option>
      </select>
    </>
  );
}
