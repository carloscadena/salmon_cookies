'use strict';

//store constructor
var CookieStore = function(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookieSalesPerHour = [];
};

CookieStore.prototype.randomCustomers = function (){
  for (var i = 6; i < 20; i++) {
    var hourlySales = this.getRandomNum(this.minCust, this.maxCust);
    var eachHour = parseInt(hourlySales * this.avgCookieSale);
    this.cookieSalesPerHour.push(eachHour);
  }
};

CookieStore.prototype.getRandomNum = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

//store objects
var storeOne = new CookieStore('First and Pike', 23, 65, 6.3);
var storeTwo = new CookieStore('Sea-Tac Airport', 3, 24, 1.2);
var storeThree = new CookieStore('Seattle Center', 11, 38, 3.7);
var storeFour = new CookieStore('Capitol Hill', 20, 38, 2.3);
var storeFive = new CookieStore('Alki', 2, 16, 4.6);

var stores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

var tableEl = document.createElement('table');

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
  'Daily Total'
];

var headerEl = document.createElement('thead');
var headerRow = document.createElement('tr');
//add empty <th> for offset
headerRow.appendChild(document.createElement('th'));

for (var i = 0; i < storeHours.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = storeHours[i];
  headerRow.appendChild(thEl);
}
headerEl.appendChild(headerRow);
tableEl.appendChild(headerEl);

for (var i = 0; i < stores.length; i++) {
  var currentStore = stores[i];
  currentStore.randomCustomers();
  var totalCookies = 0;
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  for (var j = 0; j < currentStore.cookieSalesPerHour.length; j++) {

    var storeTotalEl = document.createElement('td');
    storeTotalEl.textContent = currentStore.cookieSalesPerHour[j];
    rowEl.appendChild(storeTotalEl);
    totalCookies += currentStore.cookieSalesPerHour[j];
  }
  var storeTotalEl = document.createElement('td');
  storeTotalEl.textContent = totalCookies;
  rowEl.appendChild(storeTotalEl);
}

function appendFooter(){
  var footEl = document.createElement('tfoot');
  tableEl.appendChild(footEl);
  var hourlyTotalEl = document.createElement('th');
  hourlyTotalEl.textContent = 'Totals';
  footEl.appendChild(hourlyTotalEl);

  for (var j = 0; j < storeHours.length; j++) {
    var hourlyTotal = 0;
    for (var i = 0; i < stores.length; i++) {
      var currentStore = stores[i];
      hourlyTotal += currentStore.cookieSalesPerHour[j];
    }
    var hourEl = document.createElement('td');
    hourEl.textContent = hourlyTotal;
    footEl.appendChild(hourEl);
  }
}
appendFooter();

document.body.appendChild(tableEl);

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  var storeName = event.target.storeName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);
  console.log('User pressed submit button on form');
  console.log(minCust, maxCust);

  var store = new CookieStore(storeName, minCust, maxCust, avgCookies);
  console.log(store);

  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  var storeRowEl = document.createElement('th');
  storeRowEl.textContent = store.name;
  rowEl.appendChild(storeRowEl);

  store.randomCustomers();
  var tCookies = 0;
  for (var j = 0; j < store.cookieSalesPerHour.length; j++) {
    var storeTotalEl = document.createElement('td');
    storeTotalEl.textContent = store.cookieSalesPerHour[j];
    console.log(store.cookieSalesPerHour[j]);
    rowEl.appendChild(storeTotalEl);
    tCookies += store.cookieSalesPerHour[j];
  }
  console.log(tCookies);
  var storeTotalEl = document.createElement('td');
  storeTotalEl.textContent = tCookies;
  rowEl.appendChild(storeTotalEl);

}
