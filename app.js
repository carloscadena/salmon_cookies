'use strict';

function getRandomNum(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

var storeOne = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookieSalesPerHour:[],
  randomCustomers: function (){
    for (var i = 6; i < 20; i++) {
      var hourlySales = getRandomNum(this.minCust, this.maxCust);
      var eachHour = parseInt(hourlySales * this.avgCookieSale);
      this.cookieSalesPerHour.push(eachHour);
    }
    return this.cookieSalesPerHour ;
  }
};
var resultsArrayPike = storeOne.randomCustomers();
console.log(resultsArrayPike);

var storeTwo = {
  name: 'Sea-Tac',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookieSalesPerHour:[],
  randomCustomers: function (){
    for (var i = 6; i < 20; i++) {
      var hourlySales = getRandomNum(this.minCust, this.maxCust);
      var eachHour = parseInt(hourlySales * this.avgCookieSale);
      this.cookieSalesPerHour.push(eachHour);
    }
    return this.cookieSalesPerHour ;
  }
};
var resultsArraySeaTac = storeTwo.randomCustomers();
console.log(resultsArraySeaTac);

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookieSalesPerHour:[],
  randomCustomers: function (){
    for (var i = 6; i < 20; i++) {
      var hourlySales = getRandomNum(this.minCust, this.maxCust);
      var eachHour = parseInt(hourlySales * this.avgCookieSale);
      this.cookieSalesPerHour.push(eachHour);
    }
    return this.cookieSalesPerHour ;
  }
};
var resultsArraySeattleCenter = storeThree.randomCustomers();
console.log(resultsArraySeattleCenter);

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookieSalesPerHour:[],
  randomCustomers: function (){
    for (var i = 6; i < 20; i++) {
      var hourlySales = getRandomNum(this.minCust, this.maxCust);
      var eachHour = parseInt(hourlySales * this.avgCookieSale);
      this.cookieSalesPerHour.push(eachHour);
    }
    return this.cookieSalesPerHour ;
  }
};
var resultsArrayCapHill = storeFour.randomCustomers();
console.log(resultsArrayCapHill);

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 14.6,
  cookieSalesPerHour:[],
  randomCustomers: function (){
    for (var i = 6; i < 20; i++) {
      var hourlySales = getRandomNum(this.minCust, this.maxCust);
      var eachHour = parseInt(hourlySales * this.avgCookieSale);
      this.cookieSalesPerHour.push(eachHour);
    }
    return this.cookieSalesPerHour ;
  }
};
var resultsArrayAlki = storeFive.randomCustomers();
console.log(resultsArrayAlki);

var storeHours = [
  '6:00 AM',
  '7:00 AM',
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
];

var firstAndPiketotalCookies = 0;
var firstAndPikeListElement = document.getElementById('firstAndPikeList');

for (var i = 0; i < resultsArrayPike.length; i++) {
  var firstAndPikeElement = document.createElement('li');
  firstAndPikeElement.textContent = storeHours[i] + ': ' + resultsArrayPike[i] + ' cookies';
  firstAndPikeListElement.appendChild(firstAndPikeElement);
  firstAndPiketotalCookies += resultsArrayPike[i];
}
var firstAndPikeTotal = document.createElement('li');
firstAndPikeTotal.textContent = 'Total: ' + firstAndPiketotalCookies;
firstAndPikeListElement.appendChild(firstAndPikeTotal);

var seaTacTotalCookies = 0;
var seaTacListElement = document.getElementById('seaTacList');
for (var i = 0; i < resultsArraySeaTac.length; i++) {
  var seaTacElement = document.createElement('li');
  seaTacElement.textContent = storeHours[i] + ': ' + resultsArraySeaTac[i] + ' cookies';
  seaTacListElement.appendChild(seaTacElement);
  seaTacTotalCookies += resultsArraySeaTac[i];
}
var seaTacTotal = document.createElement('li');
seaTacTotal.textContent = 'Total: ' + seaTacTotalCookies;
seaTacListElement.appendChild(seaTacTotal);

var seattleCenterTotalCookies = 0;
var seattleCenterListElement = document.getElementById('seattleCenterList');
for (var i = 0; i < resultsArraySeattleCenter.length; i++) {
  var seattleCenterElement = document.createElement('li');
  seattleCenterElement.textContent = storeHours[i] + ': ' + resultsArraySeattleCenter[i] + ' cookies';
  seattleCenterListElement.appendChild(seattleCenterElement);
  seattleCenterTotalCookies += resultsArraySeattleCenter[i];
}
var seattleCenterTotal = document.createElement('li');
seattleCenterTotal.textContent = 'Total: ' + seattleCenterTotalCookies;
seattleCenterListElement.appendChild(seattleCenterTotal);

var capHillTotalCookies = 0;
var capHillListElement = document.getElementById('capHillList');
for (var i = 0; i < resultsArrayCapHill.length; i++) {
  var capHillElement = document.createElement('li');
  capHillElement.textContent = storeHours[i] + ': ' + resultsArrayCapHill[i] + ' cookies';
  capHillListElement.appendChild(capHillElement);
  capHillTotalCookies += resultsArrayCapHill[i];
}
var capHillTotal = document.createElement('li');
capHillTotal.textContent = 'Total: ' + capHillTotalCookies;
capHillListElement.appendChild(capHillTotal);

var alkiTotalCookies = 0;
var alkiListElement = document.getElementById('alkiList');
for (var i = 0; i < resultsArrayAlki.length; i++) {
  var alkiElement = document.createElement('li');
  alkiElement.textContent = storeHours[i] + ': ' + resultsArrayAlki[i] + ' cookies';
  alkiListElement.appendChild(alkiElement);
  alkiTotalCookies += resultsArrayAlki[i];
}
var alkiTotal = document.createElement('li');
alkiTotal.textContent = 'Total: ' + alkiTotalCookies;
alkiListElement.appendChild(alkiTotal);
