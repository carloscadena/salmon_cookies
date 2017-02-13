'use strict';

function getRandomNum(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCustomers: function (){
    return getRandomNum(this.minCust, this.maxCust);
  }
};

var firstAndPikeAvg = firstAndPike.randomCustomers() *

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCustomers: function (){
    return getRandomNum(this.minCust, this.maxCust);
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCustomers: function (){
    return getRandomNum(this.minCust, this.maxCust);
  }
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCustomers: function (){
    return getRandomNum(this.minCust, this.maxCust);
  }
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 14.6,
  randomCustomers: function (){
    return getRandomNum(this.minCust, this.maxCust);
  }
};
