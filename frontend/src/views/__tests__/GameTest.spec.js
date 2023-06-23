import { mocksAll } from "../../__mocks__/GameMock";
import GameService from "../../services/GameService";
import { describe, it, expect, vi } from 'vitest'



vi.spyOn(fetch.get).mockResolvedValue(mocksAll)
describe('Get games', () => {
    // Définition d'un test avec la description "should return"
    it('GET ALL', async () => {
        const data = await GameService.getGames()
        expect(fetch.get).toHaveBeenCalledWith(GameService.baseURL)
        expect(fetch.get).toHaveBeenCalledOnce()
        //Tester directement la donnée
    })

    
})