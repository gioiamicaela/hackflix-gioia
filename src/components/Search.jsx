import React from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { setSearchText, clearSearchText } from "../redux/textSlice";
import { useSelector, useDispatch } from "react-redux";

export function Search() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => {
    return state.value;
  });
  React.useEffect(() => {
    if (searchText) {
      dispatch(setSearchText(searchText));
    } else {
      dispatch(clearSearchText());
    }
  }, [searchText]);
  const handleSetText = (e) => {
    e.preventDefault();
    dispatch(clearSearchText(""));
  };
  const handleTextChanged = (e) => {
    e.preventDefault();
    dispatch(setSearchText(e.target.value.toUpperCase()));
  };
  React.useEffect(() => {
    dispatch(clearSearchText());
  }, []);

  return (
    <form className={styles.searchContainer} onSubmit={handleSetText}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText ? searchText : ""}
          onChange={handleTextChanged}
          placeholder="Title"
          aria-label="Search Movies"
        />

        <FaSearch
          className={styles.searchButton}
          size={20}
          style={{ backgroundColor: "none" }}
        />
      </div>
    </form>
  );
}
