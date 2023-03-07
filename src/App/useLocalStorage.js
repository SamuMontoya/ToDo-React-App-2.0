import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { item, syncronize, dataState } = state;

  const onError = (catchError) =>
    dispatch({ type: actionTypes.ERROR, payload: catchError });
  const onSuccess = (parsedItem) =>
    dispatch({ type: actionTypes.SUCCESS, payload: parsedItem });
  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item });
  const onSyncronize = () => dispatch({ type: actionTypes.SYNCRONIZE });

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

        onSuccess(parsedItem);
      } catch (catchError) {
        onError(catchError);
      }
    }, 1500);
  }, [syncronize]);

  const saveItem = (newItem) => {
    try {
      const stringifyedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyedItem);
      onSave(newItem);
    } catch (catchError) {
      onError(catchError);
    }
  };

  const syncronizeTodos = () => {
    onSyncronize();
  };

  return { item, saveItem, dataState, syncronizeTodos };
}

const initialState = ({ initialValue }) => ({
  item: initialValue,
  syncronize: true,
  dataState: {
    loading: true,
    error: false,
  },
});

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    dataState: {
      loading: false,
      error: true,
    },
  },
  [actionTypes.SUCCESS]: {
    ...state,
    dataState: {
      loading: false,
      error: false,
    },
    syncronize: true,
    item: payload,
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload,
  },
  [actionTypes.SYNCRONIZE]: {
    ...state,
    dataState: {
      loading: true,
      error: false,
    },
    syncronize: false,
  },
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SYNCRONIZE: "SYNCRONIZE",
};

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
