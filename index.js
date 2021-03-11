function twoNumberSum(array, targetSum) {
	let sum = 0
	let index = 0
	let second_index = index+1

	console.log(array)

	while(index < array.length) {
		sum = array[second_index] + array[index]
		if(sum === targetSum) {
			let new_array = [array[index], array[second_index]]
			return new_array
		} else {
			second_index++
			if(second_index === array.length-1) {
				index++
				second_index = index+1
			}
		}
	}

}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;