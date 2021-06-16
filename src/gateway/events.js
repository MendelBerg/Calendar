const baseUrl = 'https://60c763ce06f3160017d29430.mockapi.io/projects/events';

const events = [];

export function fetchEvents() {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });
};



export default events;

// {
//   id: 1,
//   title: 'Go to the gym',
//   description: 'some text here',
//   dateFrom: new Date(2021, 5, 15, 10, 15),
//   dateTo: new Date(2021, 5, 15, 15, 0),
// },
// {
//   id: 2,
//   title: 'Go to the school',
//   description: 'hello, 2 am',
//   dateFrom: new Date(2021, 5, 16, 10, 15),
//   dateTo: new Date(2021, 5, 16, 11, 0),
// },
// {
//   id: 3,
//   title: 'Lunch',
//   description: '',
//   dateFrom: new Date(2021, 5, 17, 10, 30),
//   dateTo: new Date(2021, 5, 17, 11, 30),
// },
// {
//   id: 4,
//   title: 'Meet friend',
//   description: 'at the cafe',
//   dateFrom: new Date(2021, 5, 25, 10, 30),
//   dateTo: new Date(2021, 5, 25, 11, 0),
// },
