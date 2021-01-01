'use strict';

const brandon = {
  firstName: 'brandon',
  lastName: 'mcdonald',
  birthYear: 1990,
  favoriteActivities: [
    'working out',
    'dating',
    'traveling',
    'goals',
    'entreprenuership',
  ],
  profession: `programmer`,
  greet: function () {
    const getAge = (birthYear) => {
      return 2020 - this.birthYear;
    };
    console.log(`i'm ${this.firstName} ${this.lastName} 
    and i am ${getAge(this.birthYear)} years old.`);
  },
  tellProfession: function () {
    console.log(`my profession is ${this.profession} for work.`);
  },
  tellActivities: function () {
    for (let i = 0; i < this.favoriteActivities.length; i++) {
      console.log(this.favoriteActivities[i]);
    }
  },
};

//brandon.greet();
brandon.tellActivities();
brandon.tellProfession();
brandon.greet();
