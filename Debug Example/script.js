'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')),
  };

  console.log(measurement);
  //table is a great tool for observing objects in the console
  //this provides a table-formatted view of the object
  console.table(measurement);
  //
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
