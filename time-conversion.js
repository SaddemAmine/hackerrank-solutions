function timeConversion(s) {
	const meridiem = s.slice(s.length - 2)
	const values = s.replace(meridiem, '').split(':')

	if (meridiem === 'PM') {
		if (values[0] !== '12') {
			values[0] = (parseInt(values[0]) + 12).toString()
		}
	} else if (values[0] === '12') {
		values[0] = '00'
	}

	return values.join(':')
}
