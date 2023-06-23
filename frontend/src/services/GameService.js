const GameService = {
    baseURL: 'http://127.0.0.1:8000/api',
    async getGames() {
        return fetch(GameService.baseURL + '/jeux/')
          .then((response) => {
            console.log('ALL', response.data)
            return response.data
          })
          .catch(error => {
            console.error(error);
            throw error;
          });
        },
}
export default GameService