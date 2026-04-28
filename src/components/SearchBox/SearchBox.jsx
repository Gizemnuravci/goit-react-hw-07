import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../Redux/filterSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      
      />
    </div>
  );
};

export default SearchBox;