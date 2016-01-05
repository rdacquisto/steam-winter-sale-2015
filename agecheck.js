(function (d) {
	'use strict';

	setTimeout(function () {
		console.log('Passing Age Check');
		d.getElementById('ageYear').value = '1910';
		d.querySelector('a.btnv6_blue_hoverfade.btn_small').click();
	}, 500);
})(document);
