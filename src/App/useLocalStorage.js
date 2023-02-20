import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [dataState, setDataState] = React.useState({
    loading: true,
    error: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setDataState({ loading: false, error: false });
      } catch (catchError) {
        setDataState({ loading: false, error: catchError });
      }
    }, 1500);
  });

  const saveItem = (newItem) => {
    try {
      const stringifyedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyedItem);
      setItem(newItem);
    } catch (catchError) {
      setDataState({ loading: false, error: catchError });
    }
  };

  return { item, saveItem, dataState };
}

export { useLocalStorage };
