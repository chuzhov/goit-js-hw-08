export const saveToLocalStorage = (key, value) => {
    try {
      const stringToSave = JSON.stringify(value);
      localStorage.setItem(key, stringToSave);
    } catch (error) {
      console.error(`Save operation failed: `, error.message);
    }
  };
  
  export const loadFromLocalStorage = key => {
    try {
      const stringToLoad = localStorage.getItem(key);
      return stringToLoad === null ? undefined : JSON.parse(stringToLoad);
    } catch (error) {
      console.error('Load operation failed: ', error.message);
    }
  };
  
  export const removeFromLocalStorage = key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Remove operation failed: ', error.message);
    }
  };
  