import React, { Component } from "react";

import { Link } from "react-router-dom";

class Search extends Component {
    
  render() {
    return (
            <>
                <h1>Olá mundo</h1>
                <Link to="/detail">About</Link>
            </>
        )
    }
}

export default Search;
