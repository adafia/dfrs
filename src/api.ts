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


////////////////////////////////////////
export function fetchUsersData() {
  const usersPromise = fetchUsers();

  return {
    users: wrapPromise(usersPromise),
  };
}

export function fetchProfileData(userId: number) {
  const userPromise = fetchUser(userId);
  const postsPromise = fetchPosts(userId);
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

export function wrapPromise(promise: Promise<unknown>) {
  let status = "pending";
  let result: unknown;
  const suspender: Promise<unknown> = promise.then(
    (res: unknown) => {
      status = "success";
      result = res;
    },
    (err: unknown) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json);
}

export function fetchUser(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((json) => json);
}

export function fetchPosts(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((json) => json);
}
