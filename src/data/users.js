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

      location: {
        lat:54.3520252,
        lng:18.6466384
      },

      partsToSell: [
            {
              partId: 1
            },
            {
              partId: 2
            },
            {
              partId: 3
            }
      ],

      partsWanted: [
        {
          partId: 1
        },
        {
          partId: 2
        }
      ]
    },
  {
    id: 2,
    name: 'Andrzej',
    surname: 'Nowak',
    address: 'Warszawa Kolorowa 69',
    login:'endrju',
    password:'zupa1',

    location: {
      lat:52.2296756,
      lng:21.0122287
    },

    partsToSell: [
      {
        partId: 4
      },
      {
        partId: 5
      },
      {
        partId: 6
      }
    ],

    partsWanted: [
      {
        partId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Mariusz',
    surname: 'Czarodziej',
    address: 'Sosnowiec Piekielna 666',
    login:'troll',
    password:'123456',

    location: {
      lat: 50.2862638,
      lng: 19.1040791
    },

    partsToSell: [
      {
        partId: 7
      },
      {
        partId: 8
      }
    ],

    partsWanted: [
      {
        partId: 4
      },
      {
        partId: 5
      },
      {
        partId: 6
      },
      {
        partId: 7
      }
    ]
  },
]
