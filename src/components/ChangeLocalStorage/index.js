import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeStorage({ syncronizeTodos }) {
  const { toggleShow, show } = useStorageListener(syncronizeTodos);
  if (show) {
    setTimeout(() => {
      return toggleShow(false);
    }, 1);
  } else {
    return null;
  }
}

export { ChangeStorage };
