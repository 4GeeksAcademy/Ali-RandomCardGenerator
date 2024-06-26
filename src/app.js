/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log('hello');
  newCard()
};

function newCard() {
  let suits = ['♦', '♥', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  let suit = suits[indexSuits];
  let number = numbers[indexNumbers];

  document.querySelector('#top').innerHTML = suit;
  document.querySelector('#number').innerHTML = number;
  document.querySelector('#end').innerHTML = suit;

  // When suit is '♦' or '♥', change the class of top and end to text-danger
  let isRed = (suit === '♦' || suit === '♥');
  let colorSuit = isRed ? "text-danger" : "text-dark" 
  document.querySelector('#top').className = colorSuit;
  document.querySelector('#number').className = colorSuit;
  document.querySelector('#end').className = colorSuit;

  console.log('new card', indexSuits, indexNumbers);
}