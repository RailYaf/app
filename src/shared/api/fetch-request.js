export const fetchRequest = async ({ url, options = {} }) => {
  const response = await fetch(url, options);
  if (response.ok) return response.json();
  return null;
};
