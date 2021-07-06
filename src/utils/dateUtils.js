import moment from 'moment';

export const getWeekStartDate = date => {
	const dateCopy = new Date(date);
	const dayOfWeek = dateCopy.getDay();
	const difference =
		dayOfWeek === 0
			? -6 // for Sunday
			: 1 - dayOfWeek;

	const monday = new Date(dateCopy.setDate(date.getDate() + difference));
	return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate => {
	const result = [];
	for (let i = 0; i < 7; i += 1) {
		const base = new Date(startDate);
		result.push(new Date(base.setDate(base.getDate() + i)));
	}
	return result;
};

export const getDateTime = (date, time) => {
	const [hours, minutes] = time.split(':');
	const withHours = new Date(new Date(date).setHours(Number(hours)));
	const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
	return withMinutes;
};

export const formatMins = mins => {
	return mins < 10 ? `0${mins}` : mins;
};

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const currentDate = moment(new Date()).format('M D Y');

export const formatDate = date => moment(date).format('M D Y');

export const isCurrentDay = date => currentDate === formatDate(date);

export function switchWeek(startDate, setNewDate, isNext, today = false) {
	if (today) {
		setNewDate(new Date());
		return;
	}

	const dateCopy = new Date(startDate);
	dateCopy.setDate(dateCopy.getDate() + (isNext ? 7 : -7));
	setNewDate(dateCopy);
}
