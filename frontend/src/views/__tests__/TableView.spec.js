import GameService from '../../services/TestApi'
import axios from 'axios'
import { describe, it, expect, vi } from 'vitest'

// TEST NON FONCTIONNEL
const mockGet = {
  data: [
    { id: 12, nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 },
    { id: 13, nombre_joueur: 20, nom_jeu: 'Monopoly', age: 30 }
  ]
}

const mockGetOne = {
    data: [
      { id: 1, nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 },
    ]
  }

// Spy sur la méthode 'get' de l'objet axios et renvoie une valeur résolue (mockGet) pour simuler une requête réussie
vi.spyOn(axios, 'get').mockResolvedValue(mockGet)
// vi.spyOn(axios, 'get').mockResolvedValue(mockGetOne)
// fn va capturer l'appel à l'api et to permet de faire des callbakc dessus, à utiliser avec le serveur lancé
// vi.fn(axios, 'get').mockResolvedValue(mockGet)
// Définition d'un bloc de tests avec la description "Get all games"
describe('Get games', () => {
    // Définition d'un test avec la description "should return"
  it('GET ALL', async () => {
    const data = await GameService.getGames()
    expect(axios.get).toHaveBeenCalledOnce()
    expect(data).toHaveLength(2)
  })
  it('GET ONE', async () => {
    const result = await GameService.getGame(1)// Appel à la méthode getGame() du service GameService avec l'ID 12
    expect(axios.get).toHaveBeenCalled()
    expect(result).toHaveLength(1)
  })
})
