const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Git",
				weight: 12
			}, {
				text: "CSS",
				weight: 6
			}, {
				text: "SQL",
				weight: 13
			}, {
				text: "AWS",
				weight: 15
			}, {
				text: "CI/CD",
				weight: 7
			}, {
				text: "Python",
				weight: 13
			}, {
				text: "flask",
				weight: 8
			}, {
				text: "HTML",
				weight: 4
			}, {
				text: "Data bases",
				weight: 9
			},{
				text: "Agile",
				weight: 10
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2200; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an aspiring Cloud Engineer.", "am intrested in cloud technologies.", "love automation and solving problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 2,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
