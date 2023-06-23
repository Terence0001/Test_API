export const BASE_URL = 'http://127.0.0.1:8000/api'

export async function fetchTodoList({ token }) {
  return (
    await fetch(BASE_URL + '/todo/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json()
}

export async function updateToDo({ token, todo, id }) {
  return (
    await fetch(BASE_URL + '/todo/' + id, {
      method: 'PATCH',
      body: JSON.stringify(todo),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
  ).json()
}
