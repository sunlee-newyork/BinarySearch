class BinarySearchCounter {
	search(range, answer, median, counter) {
		median = median || 0

		if (median != answer) {
			var answerIsLess = answer < median ? true : false

			if (answerIsLess) {
				range[1] = median
				median = Math.floor((median - range[0]) / 2) + range[0]
			} else {
				range[0] = median
				median = Math.floor((range[1] - median) / 2) + range[0]
			}

			return this.search(range, answer, median, ++counter)
		}

		return counter
	}

	run(max, num) {
		return this.search([0, max], num, Math.floor(max / 2), 1)
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const bsc = new BinarySearchCounter()
bsc.run(10000, 57)