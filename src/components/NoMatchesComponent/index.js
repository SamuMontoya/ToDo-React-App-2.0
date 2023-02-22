import React from "react";

function NoMatchesComponent(props) {
  return (
    <p className="no-todos">
      🤯 There are no matches for: "{props.searchValue}"
    </p>
  );
}

export { NoMatchesComponent };
