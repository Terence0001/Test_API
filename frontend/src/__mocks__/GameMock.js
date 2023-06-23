const Mocks = {
  get: {
    data: [
      { id: 12, nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 },
      { id: 13, nombre_joueur: 20, nom_jeu: 'Monopoly', age: 30 }
    ]
  },

  delete_: {
    data: [{ id: 13, nombre_joueur: 20, nom_jeu: 'Monopoly', age: 30 }]
  },

  update: {
    data: [{ id: 12, nombre_joueur: 10, nom_jeu: 'Monopoly', age: '+99' }]
  },

  getOne: {
    data: [{ id: 1, nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 }]
  },

  create: {
    data: [{ id: 1, nombre_joueur: 10, nom_jeu: 'Monopoly', age: 20 }]
  }
}
 export default Mocks