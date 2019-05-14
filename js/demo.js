/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}
window.onmousemove = createBubbles(30, 7, 800);

function createBubbles (maxSize, minSize, time) {
    return function (e) {
      let div = document.createElement('div');
    
      div.setAttribute("class", "bubble");
      div.style.border = ".5px solid white";
      div.style.position = "absolute";
      div.style.borderRadius = maxSize + "px";
      div.style.width = randomInt(minSize, maxSize) + "px";
      div.style.height = div.style.width;
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
      document.body.appendChild(div);
    
      setTimeout(function() {
        div.style.transition = "all " + time * 2 + "ms ease-out"; 
        div.style.transform = "translateY(-" + randomInt(200, 350) + "px)";
        div.style.opacity = "0";
        div.style.width = "1px";
        div.style.height = "1px";
      }, 10);
    
      setTimeout(function() {
        document.body.removeChild(div);
      }, time);
    };
  };

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
