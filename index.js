window.addEventListener('load', function() {
	console.time('start');
	var dict = localStorage.getItem('word-ladder-dictionary');
	console.log('DICT', (dict||'').length);
	if (!dict) {
	console.timeEnd('start');

		console.time('load');
		fetch('dictionary.json')
			.then(response => response.json())
			.then(function (json) {
				dict = json;
				alert('load ok');	
				console.timeEnd('load');
				localStorage.setItem('word-ladder-dictionary', JSON.stringify(dict))
			})
			.catch(alert)	
			;
	} else  {
		dict = JSON.parse(dict);
		console.timeEnd('start')
	}
});
