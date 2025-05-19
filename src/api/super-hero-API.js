export const BASE_URL = 'https://www.superheroapi.com/api.php/964c1c6ba91db4f766f44741b43db0b6/';

export async function fetchHeroes(page = 1) {
  try {
    let url = `${BASE_URL}?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw error;
  }
}