const apiUrl = "http://localhost:3001";

async function request(url, method, body) {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error(
      `Request failed with: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}

export function login(email, password) {
  return request(`${apiUrl}/auth/login`, "POST", { email, password });
}

export function signUp(username, email, password) {
  return request(`${apiUrl}/auth/signup`, "POST", {
    username,
    email,
    password,
  });
}
