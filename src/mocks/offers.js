export default [
  {
    id: 1,
    photos: [
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
    ],
    header: `Beautiful & luxurious apartment at great location.`,
    description: `Beautiful & luxurious apartment at great location. 
    Beautiful & luxurious apartment at great location. 
    Beautiful & luxurious apartment at great location.`,
    premium: true,
    type: `apartment`,
    rating: 4.8,
    bedroomsCount: 3,
    maxNumberGuests: 3,
    cost: 100,
    welfareItem: [`Wifi`, `Heating`],
    informationAboutHost: {
      avatar: `avatar-angelina.jpg`,
      name: `Angelina`,
      super: true,
    }
  },
  {
    id: 2,
    photos: [
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
    ],
    header: `Wood and stone place.`,
    description: `Wood and stone place. 
    Wood and stone place. 
    Wood and stone place.`,
    premium: false,
    type: `room`,
    rating: 4.3,
    bedroomsCount: 1,
    maxNumberGuests: 1,
    cost: 90,
    welfareItem: [`Kitchen`, `Cable `],
    informationAboutHost: {
      avatar: `avatar-max.jpg`,
      name: `Max`,
      super: false,
    }
  },
  {
    id: 3,
    photos: [
      `studio-01.jpg`,
      `room.jpg`,
    ],
    header: `Canal View Prinsengracht.`,
    description: `Canal View Prinsengracht. 
    Canal View Prinsengracht. 
    Canal View Prinsengracht.`,
    premium: true,
    type: `house`,
    rating: 3.8,
    bedroomsCount: 4,
    maxNumberGuests: 4,
    cost: 120,
    welfareItem: [`Wifi`, `Cable TV`],
    informationAboutHost: {
      avatar: `avatar-angelina.jpg`,
      name: `Angelina`,
      super: false,
    }
  },
  {
    id: 4,
    photos: [
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `studio-01.jpg`,
    ],
    header: `Nice, cozy, warm big bed apartment.`,
    description: `Nice, cozy, warm big bed apartment. 
    Nice, cozy, warm big bed apartment. 
    Nice, cozy, warm big bed apartment.`,
    premium: false,
    type: `hotel`,
    rating: 2.2,
    bedroomsCount: 2,
    maxNumberGuests: 2,
    cost: 60,
    welfareItem: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    informationAboutHost: {
      avatar: `avatar-max.jpg`,
      name: `Max`,
      super: true,
    }
  },
];