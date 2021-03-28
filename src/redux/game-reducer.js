const initialState = {
  games: [
    {
      name: 'Civilization VI',
      cover: 'https://i.imgur.com/hi8xXPG.png',
      id: 1,
    },
    {
      name: 'GTA 5',
      cover: 'https://i.imgur.com/jfh1oyj.png',
      id: 2,
    },
    {
      name: 'RUST',
      cover: 'https://i.imgur.com/XmUSEy3.png',
      id: 3,
    },
    {
      name: 'Battlefild 5',
      cover: 'https://i.imgur.com/2MWbkqw.png',
      id: 4,
    },
    {
      name: 'Rainbow six edge',
      cover: 'https://i.imgur.com/Ws4TTIk.png',
      id: 5,
    },
    {
      name: 'Assasins creed',
      cover: 'https://i.imgur.com/2Wn5gOF.png',
      id: 6,
    },
    {
      name: 'PUBG',
      cover: 'https://i.imgur.com/kcOjWR0.png',
      id: 7,
    },
    {
      name: 'Battlefild 1',
      cover: 'https://i.imgur.com/u2OASWT.png',
      id: 8,
    },
    {
      name: 'Fifa',
      cover: 'https://i.imgur.com/GZKbDJ3.png',
      id: 9,
    },
    {
      name: 'Fifa2',
      cover: 'https://i.imgur.com/GZKbDJ3.png',
      id: 10,
    },
    {
      name: 'Watch dogs 2',
      cover: 'https://i.imgur.com/ffWtDoh.png',
      id: 11,
    },
    {
      name: 'Battlefront',
      cover: 'https://i.imgur.com/xoPBj9x.png',
      id: 12,
    },
  ],
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
