var module = module || {};

module.BinarySearch = (function() {
	var counter;
	var done;

	function run(max) {
		counter = 1;

		binarySearch([0,max], randomNum(max), Math.floor(max/2));

		if (done) {
			return counter;
		}
	}

	function randomNum(max) {
		return Math.floor(Math.random() * max);
	}

	function binarySearch(range, answer, median) {
		console.log("Starting iteration #" + counter + "...");
		console.log("Working with median value " + median + ".");

		median = median || 0;

		if (median != answer) {
			console.log("Median is not yet equal to answer.");
			var answerIsLess = answer < median ? true : false;

			if (answerIsLess) {
				console.log("Answer is less than median.");
				range[1] = median;
				console.log("Setting max to median: " + range[1]);
				median = Math.floor((median - range[0]) / 2) + range[0];
				console.log("New median value: " + median);
			} else {
				console.log("Answer is greater than median.");
				range[0] = median;
				console.log("Setting min to median: " + range[0]);
				median = Math.floor((range[1] - median) / 2) + range[0];
				console.log("New median value: " + median);
			}

			console.log("Restarting recursion with following values:");
			console.log("Range: ", JSON.stringify(range));
			console.log("Answer: " + answer);
			console.log("Median: " + median);

			counter++;

			binarySearch(range, answer, median, counter);
		} else {
			done = true;
		}
	}

	return {
		run: run
	}
})();


/*****************/
/* SAMPLE RUNNER */
/*****************/

var max = 10000;

module.BinarySearch.run(max);