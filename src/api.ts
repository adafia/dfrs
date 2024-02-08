export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

const baseUrl = "https://jsonplaceholder.typicode.com";

export function fetchUsers(path: string = "users") {
  return fetch(`${baseUrl}/${path}`)
    .then((response) => response.json())
    .then((json) => json);
}

export function fetchUser(path: string, userId: number) {
  return fetch(`${baseUrl}/${path}/${userId}`)
    .then((response) => response.json())
    .then((json) => json);
}

export function fetchPosts(path: string, userId: number) {
  return fetch(`${baseUrl}/${path}?userId=${userId}`)
    .then((response) => response.json())
    .then((json) => json);
}
