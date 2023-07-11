export const storeInLocalStorage = (data) => {
  const notes = "NOTES";

  localStorage.setItem(notes, JSON.stringify(data));
};
