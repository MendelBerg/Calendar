const baseUrl = 'https://60e4752d5bcbca001749e9f9.mockapi.io/calendar/events';

export function fetchEvents() {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(() => {
      alert("Internal Server Error. Can't display events");
    });
}

export const postEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).catch(() => {
    alert("Internal Server Error. Can't display events");
  });
};

export const deleteEvent = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).catch(() => {
    alert("Internal Server Error. Can't display events");
  });
};

export function createEvent(event) {
  event.preventDefault();
  const fieldEl = [...document.querySelectorAll('.event-form__field')].map(el => el.value);
  const [title, date, startTime, endTime, description] = fieldEl;

  return postEvent({
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  });
}
