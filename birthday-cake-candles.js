function birthdayCakeCandles(candles) {
	const max = Math.max(...candles)
	let count = 0
	candles.forEach(candle => {
		if (candle === max) count++
	})
	return count
}
