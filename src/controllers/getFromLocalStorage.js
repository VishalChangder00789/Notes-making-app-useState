export const getFromLocalStorage = () => {
  const notes = JSON.parse(localStorage.getItem("NOTES"));
  return notes;
};
