import axios from "axios";

// Création d'une instance d'axios avec l'URL de base de votre API
const baseURL = 'http://127.0.0.1:8000/api'

  const  GameService = {
    // Méthode pour récupérer tous les jeux
    getGames() {
      return axios.get( baseURL + '/jeux/')
    },
  
    // Méthode pour récupérer un jeu spécifique par son ID
    getGame(id) {
      return axios.get( baseURL + '/jeux/' + id)
    },
  
    // Méthode pour créer un nouveau jeu
    createGame(game) {
      return axios.post( baseURL + '/jeux', game)
    },
  
    // Méthode pour mettre à jour un jeu spécifique par son ID
    updateGame(id, game) {
      return axios.put( baseURL + '/jeux/' + id, game)
    },
  
    // Méthode pour supprimer un jeu spécifique par son ID
    deleteGame(id) {
      return axios.delete( baseURL + '/jeux/' + id)
    }
}
  
export default GameService;