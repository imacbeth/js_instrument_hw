const PubSub = require ('../helpers/pub_sub.js');

const InstrumentDetail = function (container) {
    this.container = container;
}

InstrumentDetail.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument', (event) =>{
    const family = event.detail;
    this.render(family);
  });

};

InstrumentDetail.prototype.render = function(family){
  const header = document.createElement('h1')
  const infoParagraph = document.createElement('p');
  header.textContent = `${family.name}`
  infoParagraph.textContent = `${family.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentDetail;
