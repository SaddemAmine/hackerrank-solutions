function diagonalDifference(arr) {
	let ltrDiag = 0
	let rtlDiag = 0

	for (let i in arr) {
		ltrDiag += arr[i][i]
		rtlDiag += arr[i][arr.length - i - 1]
	}

	return Math.abs(rtlDiag - ltrDiag)
}
