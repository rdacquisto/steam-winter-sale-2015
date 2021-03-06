(function () {
	'use strict';

	setTimeout(function () {
		var path = window.location.pathname;

		if (path.indexOf('/explore/') === 0) {
			var card_remaining_text = document.querySelectorAll('.discovery_queue_winter_sale_cards_header .subtext')[0].innerText;
			if (card_remaining_text.indexOf('You can get ') > -1) {
				console.log('Starting Queue');
				document.getElementById('refresh_queue_btn').click();
			}
		} else if (path.indexOf('/app/') === 0) {
			var next_in_queue_content = document.querySelectorAll('.btn_next_in_queue')[0];
			if (next_in_queue_content) {
				console.log('Advancing Queue');
				next_in_queue_content.click();
			}
		}
	}, 500);
})();
