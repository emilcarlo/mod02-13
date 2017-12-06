/*Toggle button hide sidebar*/
var	toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click',function() {

	console.log('toggleIcon is working'); /*for debugging*/

	var	nav = document.querySelector('div.sidebar');
	nav.style.left = '-20%';

	var	home = document.querySelector('div#home');
	home.style.width = '100%';

	var	about = document.querySelector('div#about');
	about.style.width = '100%';

	var	services = document.querySelector('div#services');
	services.style.width = '100%';

	var	projects = document.querySelector('div#projects');
	projects.style.width = '100%';

	var	gallery = document.querySelector('div#gallery');
	gallery.style.width = '100%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');
	toggleIcon1.removeAttribute('hidden','hidden');

});

toggleIcon1.addEventListener('click',function() {

	console.log('toggleIcon1 is working'); /*for debugging*/

	var	nav = document.querySelector('div.sidebar');
	nav.style.left = '0%';

	var	main = document.querySelector('div#home');
	main.style.width = '80%';

	var	about = document.querySelector('div#about');
	about.style.width = '80%';

	var	services = document.querySelector('div#services');
	services.style.width = '80%';

	var	projects = document.querySelector('div#projects');
	projects.style.width = '80%';

	var	gallery = document.querySelector('div#gallery');
	gallery.style.width = '80%';

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');
	toggleIcon.removeAttribute('hidden','hidden');

});

