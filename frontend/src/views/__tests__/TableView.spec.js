import GameService from '../../services/TestApi'
import axios from 'axios'
import { describe, it, expect, vi } from 'vitest'

// TEST NON FONCTIONNEL
const mockGet = {
  data: [
    { id: '12', nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 },
    { id: '13', nombre_joueur: 20, nom_jeu: 'Monopoly', age: 30 }
  ]
}

// Spy sur la méthode 'get' de l'objet axios et renvoie une valeur résolue (mockGet) pour simuler une requête réussie
vi.spyOn(axios, 'get').mockResolvedValue(mockGet)
// Définition d'un bloc de tests avec la description "Get all games"
describe('Get all games', () => {
    // Définition d'un test avec la description "should return"
  it('should return', async () => {
    const result = await GameService.getGames()
    expect(axios.get).toHaveBeenCalledOnce()
    expect(result.data).toHaveLength(2)
   
  })
})
