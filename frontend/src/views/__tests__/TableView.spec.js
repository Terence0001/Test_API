import GameService from "../../services/TestApi";
import axios from "axios";
import { describe, it, expect, vi } from "vitest";


// TEST NON FONCTIONNEL
const mockGet = {
    data: [
        { id: "1", nombre_joueur: 10, nom_jeu: "Monopoly", age: 20},
        { id: "2", nombre_joueur: 20, nom_jeu: "Monopoly", age: 30}
    ]
}
vi.spyOn(axios, 'get').mockResolvedValue(mockGet)
// const {
//     GameService.getGames
// } = getData()
describe("Get all games",()=> {
    it("should return", async function() {
        const result = GameService.getGames()
        expect(axios.get).toHaveBeenCalledOnce()
        expect(result).toHaveLength(2)
    })
})