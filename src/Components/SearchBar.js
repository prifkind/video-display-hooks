import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTerm(term);
  };

  return (
    <div>
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
