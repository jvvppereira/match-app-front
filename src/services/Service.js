const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001/";

const request = async (url, options = {}) => {
  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }
  
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

const service = {
  get: (url, options = {}) =>
    request(url, {
      method: "GET",
      ...options,
    }),

  patch: (url, data, options = {}) =>
    request(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
    }),
};

export default service;
