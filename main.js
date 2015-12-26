(function () {
	'use strict';

	setTimeout(function () {
		var path = window.location.pathname;

		if (path.indexOf('/explore/') > -1) {
			var card_remaining_text = document.querySelectorAll('.discovery_queue_winter_sale_cards_header .subtext')[0].innerText;
			if (card_remaining_text.indexOf('You can get ') > -1) {
				console.log('Starting Queue');
				document.querySelectorAll('#refresh_queue_btn')[0].click();
			}

		} else if (path.indexOf('/app/') > -1) {
			console.log('Advancing Queue');
			var next_in_queue_content = document.querySelectorAll('.next_in_queue_content')[0];
			if (next_in_queue_content) {
				next_in_queue_content.click();
			}
		}
	}, 500);
})();
