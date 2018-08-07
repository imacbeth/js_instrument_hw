const PubSub = require ('../helpers/pub_sub.js');

const InstrumentDetailView = function (container) {
    this.container = container;
}

InstrumentDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready');
  const instrument = event.detail;
  this.render(instrument);
};

InstrumentDetailView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.name}: ${instrument.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentDetailView
