const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
const instrumentDropdown = new SelectView(selectElement);
instrumentDropdown.bindEvents();

});
