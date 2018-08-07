const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentDetailView = require('./views/instrument_detail.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
const instrumentDropdown = new SelectView(selectElement);
instrumentDropdown.bindEvents();

});
