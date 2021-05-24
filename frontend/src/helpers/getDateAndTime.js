export default function getSeparateDateAndTime(dateTime) {
	if (!dateTime) return;

	const d = new Date(dateTime);
	return {
		date: d.toLocaleString('en-UK', {dateStyle: 'long'}),
		time: d.toLocaleString('en-UK', {timeStyle: 'long'}),
	};
}
