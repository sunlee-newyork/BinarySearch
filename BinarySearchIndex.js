class BinarySearchIndex {
	search(array, num, leftIndex, rightIndex) {
		if (array.slice(leftIndex, rightIndex + 1).length === 2) {
			if (array[leftIndex] === num) return leftIndex
			else if (array[rightIndex] === num) return rightIndex
			else return "Not found!"
		}

		const median = Math.floor((leftIndex + rightIndex) / 2)

		if (num === array[median]) return median

		if (num < array[median]) return this.search(array, num, leftIndex, median - 1)
		else return this.search(array, num, median, rightIndex)
	}

	run(array, num) {
		return this.search(array, num, 0, array.length - 1)
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const bsi = new BinarySearchIndex()
bsi.run([1,2,3,4,5], 5)