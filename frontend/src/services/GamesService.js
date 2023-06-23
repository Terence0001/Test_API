import axios from 'axios'

// Création d'une instance d'axios avec l'URL de base de votre API

const GameService = {
  baseURL: 'http://127.0.0.1:8000/api/jeux/',
  // Méthode pour récupérer tous les jeux
  async getGames() {
    return axios
      .get(GameService.baseURL)
      .then((response) => {
        console.log('ALL', response.data)
        return response.data
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
    },

    async getGame(id) {
      return axios
        .get(baseURL + id)
        .then((response) => {
          console.log('ONE', response.data)
          return response.data
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
      },

    // Méthode pour créer un nouveau jeu
    async createGame(game) {
      try {
        const response = await axios.post(GameService.baseURL, game);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    
    async updateGame(id, game) {
      try {
        const response = await axios.patch(GameService.baseURL + id, game);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async getGame(id) {
      try {
        const response = await axios.get(GameService.baseURL + id);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    
    async deleteGame(id) {
      try {
        const response = await axios.delete(GameService.baseURL + id);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }    
}

export default GameService