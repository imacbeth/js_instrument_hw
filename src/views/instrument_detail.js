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
  const list = document.createElement('ul');

  header.textContent = `${family.name}`
  infoParagraph.textContent = `${family.description}`;
  list.textContent = 'Examples of this family:'
  for(i = 0; i < family.instruments.length; i++){
    const listItem = document.createElement('li');
    console.log(family.instruments[i]);
    listItem.textContent = family.instruments[i];
    list.appendChild(listItem);
  }

  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(list)

};

module.exports = InstrumentDetail;
