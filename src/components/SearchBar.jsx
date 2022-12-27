import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // when you submit a form, it reloads the page,
    // we don't want to do that with our input form/component
    // so we have to prevent that default behavior/event

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
      // resetting
      // after navigating, we go to ChannelDetail route
      // and searchTerm gets populated in "SearchFeed"
      // then api gets called, and then everything gets rendered
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        // margin-right only on small devices set to 5
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // 'e' = 'event'
        // need the searchTerm to pass into our url/query
        // need 'handleSubmit' fctn --> l13
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

// Paper is just a div with a white background and some height, this is the
// white box that surrounds 'Search...'
