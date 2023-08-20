function myFunction() {
  document.getElementById("email").innerHTML = "resume@dinonhouse.com";
}

function link() {
  document.getElementById("email").innerHTML = "Email";
}

function msf (){
		document.getElementById("meta").innerHTML = "docker volume ls";
}

function meta (){
		document.getElementById("meta").innerHTML = "Docker";
}

function clone () {
	document.getElementById("git").innerHTML = "git clone";
}

function git () {
	document.getElementById("git").innerHTML = "Git(Hub)";
}

function bash() {
	document.getElementById("bash").innerHTML = "#!/bin/bash";
}

function bin() {
	document.getElementById("bash").innerHTML = "BASH";
}

function router() {
	document.getElementById("cisco").innerHTML = "router ospf 1";
}

function ios() {
	document.getElementById("cisco").innerHTML = "Cisco iOS";
}

function dsadd() {
	document.getElementById("AD").innerHTML = "dsadd user";
}

function AD() {
	document.getElementById("AD").innerHTML = "AD/DS";
}

function systemctl() {
	document.getElementById("kali").innerHTML = "ptop";
}

function linux() {
	document.getElementById("kali").innerHTML = "Linux";
}

function pshell1() {
	document.getElementById("pshell").innerHTML = "Get-PSDrive";
}

function pshell2() {
	document.getElementById("pshell").innerHTML = "Powershell";
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}