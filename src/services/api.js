// src/services/api.js
const BASE_URL = 'https://api.example.com'; // Replace with your API URL

export async function getDogs() {
  const response = await fetch(`${BASE_URL}/dogs`);
  const data = await response.json();
  return data;
}
