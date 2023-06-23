import { vi } from 'vitest'

function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) }
}

const todoListResponse = [
    {
      title: 'Unit test',
      done: false
    }
]
fetch = vi.spyOn(global, 'fetch')
// fetch.spyOn(fetch, 'get').mockResolvedValue(createFetchResponse(todoListResponse))
fetch.mockImplementation((url,options)=> {
    // Vérifier la méthode HTTP et retourner une réponse en conséquence
  switch (options?.method) {
    case 'GET':
      return createFetchResponse(todoListResponse);
    case 'POST':
      // Simuler une réponse pour une requête POST
      // ...
      break;
    case 'PATCH':
      // Simuler une réponse pour une requête PATCH
      // ...
      break;
    default:
      return createFetchResponse({});
  }
})
const fetch = vi

export default fetch
export { createFetchResponse }