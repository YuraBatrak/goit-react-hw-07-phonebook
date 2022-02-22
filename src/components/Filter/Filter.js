import { useDispatch, useSelector } from "react-redux";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/filter";
import { changeFilter } from "../../redux/actions";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label htmlFor="search">
      <input
        className={s.filter}
        id="search"
        placeholder="search contact"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
