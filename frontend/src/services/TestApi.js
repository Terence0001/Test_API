import axios from "axios";

// Création d'une instance d'axios avec l'URL de base de votre API
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // remplacez ceci par l'URL de base de votre API Djang
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json'
    // }
  })

  const  GameService = {
    // Méthode pour récupérer tous les jeux
    getGames() {
      return apiClient.get('/jeux')
    },
  
    // Méthode pour récupérer un jeu spécifique par son ID
    getGame(id) {
      return apiClient.get('/jeux/' + id)
    },
  
    // Méthode pour créer un nouveau jeu
    createGame(game) {
      return apiClient.post('/jeux', game)
    },
  
    // Méthode pour mettre à jour un jeu spécifique par son ID
    updateGame(id, game) {
      return apiClient.put('/jeux/' + id, game)
    },
  
    // Méthode pour supprimer un jeu spécifique par son ID
    deleteGame(id) {
      return apiClient.delete('/jeux/' + id)
    }
  }
  
  export default GameService;