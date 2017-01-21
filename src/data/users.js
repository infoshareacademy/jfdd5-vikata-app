/**
 * Created by alanw on 14.12.2016.
 */

export default [
    {
      id: 1,
      name: 'Janusz',
      surname: 'Kowalsky',
      address: 'Gdańsk Morska 123',
      login:'januszek',
      password:'qweasd',
      email:'superjanusz@gmail.com',
      phone:'598321243',

      location: {
        lat:54.3520252,
        lng:18.6466384
      },

      partsToSell: [
        1, 2, 3
      ],

      partsWanted: [
        7, 8
      ]
    },
  {
    id: 2,
    name: 'Andrzej',
    surname: 'Nowak',
    address: 'Warszawa Kolorowa 69',
    login:'endrju',
    password:'zupa1',
    email:undefined,
    phone:'765125498',

    location: {
      lat:52.2296756,
      lng:21.0122287
    },

    partsToSell: [
      4
    ],

    partsWanted: [
      9
    ]
  },
  {
    id: 3,
    name: 'Mariusz',
    surname: 'Czarodziej',
    address: 'Sosnowiec Piekielna 666',
    login:'troll',
    password:'123456',
    email:'bestwarlock@gmail.com',
    phone:undefined,

    location: {
      lat: 50.2862638,
      lng: 19.1040791
    },

    partsToSell: [
      5,6
    ],

    partsWanted: [
      11, 12, 13, 14,15
    ]
  },
]
