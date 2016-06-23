(function () {
	'use strict';

	setTimeout(function () {
		console.log('Passing Age Check');
		document.getElementById('ageYear').value ='1910';
		document.querySelectorAll('a.btnv6_blue_hoverfade.btn_small')[0].click();
	}, 500);
})();
