function compareTriplets(a, b) {
	let aliceScore = 0
	let bobScore = 0

	a.forEach((_e, index) => {
		if (a[index] > b[index]) aliceScore++
		else if (a[index] < b[index]) bobScore++
	})

	return [aliceScore, bobScore]
}
