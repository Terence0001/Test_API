import GameService from '../../services/GamesService'
import Mocks from '../../__mocks__/GameMock'
import axios from 'axios'
import { describe, it, expect, vi } from 'vitest'

// //Spy sur la méthode 'get' de l'objet axios et renvoie une valeur résolue (mockGet) pour simuler une requête réussie
vi.spyOn(axios, 'get').mockImplementation((url) => {
  if (url === GameService.baseURL + '1') {
    return Promise.resolve(Mocks.getOne)
  } else {
    return Promise.resolve(Mocks.get)
  }
})
vi.spyOn(axios, 'delete').mockResolvedValue(Mocks.delete_)
vi.spyOn(axios, 'patch').mockResolvedValue(Mocks.update)
vi.spyOn(axios, 'post').mockResolvedValue(Mocks.create)

// fn va capturer l'appel à l'api et te permet de faire des callbakc dessus, à utiliser avec le serveur lancé
// vi.fn(axios, 'get').mockResolvedValue(mockGet)
// Définition d'un bloc de tests avec la description "Get all games"
describe('Get games', () => {
  // Définition d'un test avec la description "should return"
  it('GET ALL', async () => {
    const data = await GameService.getGames()
    expect(axios.get).toHaveBeenCalledOnce()
    expect(data).toMatchObject(Mocks.get.data)
  })
  it('GET ONE', async () => {
    const result = await GameService.getGame(1)
    expect(axios.get).toHaveBeenCalledWith(GameService.baseURL + '1')
    expect(result).toMatchObject(Mocks.getOne.data)
  })
  it('DELETE', async () => {
    const result = await GameService.deleteGame(12)
    expect(axios.delete).toHaveBeenCalledOnce()
    expect(result).not.toContain(12)
  })
  it('PATCH', async () => {
    // Tester ce qui a été passé à Axios
    const result = await GameService.updateGame(12, { age: '+99' })
    expect(axios.patch).toHaveBeenCalledOnce()
    expect(result[0].age).toEqual('+99')
  })
  it('POST', async () => {
    const result = await GameService.createGame(12, {
      id: 1,
      nombre_joueur: 10,
      nom_jeu: 'Monopoly',
      age: 20
    })
    expect(axios.post).toHaveBeenCalledOnce()
    expect(result[0].id).toEqual(1)
    expect(result[0].nombre_joueur).toEqual(10)
  })
})
