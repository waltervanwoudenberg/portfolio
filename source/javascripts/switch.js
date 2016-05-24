$(document).ready(function(){
'use strict';
var switchButton      = document.querySelector('.switch-button');
var switchBtnRight      = document.querySelector('.switch-button-case.right');
var switchBtnLeft       = document.querySelector('.switch-button-case.left');
var activeSwitch      = document.querySelector('.active');

function switchLeft(){
  switchBtnRight.classList.remove('active-case');
  switchBtnLeft.classList.add('active-case');
  activeSwitch.style.left             = '0%';
  $("#bio").removeClass("hidden");
  $("#projects").addClass("hidden");
}

function switchRight(){
  switchBtnRight.classList.add('active-case');
  switchBtnLeft.classList.remove('active-case');
  activeSwitch.style.left             = '50%';
  //show #projects .removeClass('hidden');
  $("#projects").removeClass("hidden");
  $("#bio").addClass("hidden");
}

switchBtnLeft.addEventListener('click', function(){
  switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
  switchRight();
}, false);

});
