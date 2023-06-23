import { describe, test, expect, vi, beforeEach } from 'vitest'
import { createTodo, fetchTodoList, BASE_URL, updateToDo } from '../../services/ToDoListService'
import fetch, { createFetchResponse } from '../../__mocks__/fetch'

global.fetch = fetch
describe('Todo Service', () => {
  beforeEach(() => {
    global.fetch.mockReset()
  })

  //   test.todo('makes a GET request to fetch todo list')
  test('makes a GET request to fetch todo list and returns the result', async () => {
    const todoListResponse = [
      {
        title: 'Unit test',
        done: false
      }
    ]
    const token = 'token'

    const todoList = await fetchTodoList({ token })

    expect(fetch).toHaveBeenCalledWith(BASE_URL + '/todo/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    expect(todoList).toStrictEqual(todoListResponse)
  })

  test('makes a PATCH request to update a todo', async () => {
    const token = 'token'
    const todo = {}
    const response = {
      id: 'random-id',
      ...todo,
    }
  
    fetch.mockResolvedValue(createFetchResponse(response))
  
    const newTodo = await updateToDo({
      token,
      todo,
      id: 'random-id'
    })
  
    expect(fetch).toHaveBeenCalledWith(
      BASE_URL + "/todo/random-id",
      {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      },
    )
    expect(newTodo).toStrictEqual(response)
  })


})
