import axios from "axios";

// Création d'une instance d'axios avec l'URL de base de votre API
const baseURL = 'http://127.0.0.1:8000/api'

  const  GameService = {
    // Méthode pour récupérer tous les jeux
    async getGames() {
      return axios.get(baseURL + '/jeux/')
        .then(response => {
          console.log("ALL", response.data);
          return response.data;
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
    },
  
    // Méthode pour récupérer un jeu spécifique par son ID
    async getGame(id) {
      return axios.get( baseURL + '/jeux/' + id)
      .then(response => {
        console.log("ONE", response.data);
        return response.data;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
    },
    // Méthode pour créer un nouveau jeu
    // async createGame(game) {
    //   try {
    //     const response = await axios.post(baseURL + '/jeux', game);
    //     return response.data;
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // },
    
    async updateGame(id, game) {
      try {
        const response = await axios.patch(baseURL + '/jeux/' + id, game);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    
    async deleteGame(id) {
      try {
        const response = await axios.delete(baseURL + '/jeux/' + id);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }    
}
  
export default GameService;