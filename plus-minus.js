function plusMinus(arr) {
	var partitions = [0, 0, 0]
	arr.forEach(function (num) {
		if (num > 0) partitions[0]++
		else if (num < 0) partitions[1]++
		else partitions[2]++
	})
	partitions.forEach(function (num) {
		console.log((num / arr.length).toFixed(6))
	})
}
