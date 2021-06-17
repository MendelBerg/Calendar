import React from 'react';
import { createEvent } from '../../gateway/events.js';

import './modal.scss';

const Modal = ({ onCloseModal }) => {
  function onCreateEvent(event) {
    event.preventDefault();
    const [title, date, startTime, endTime, description] = fieldEl;
    createEvent({
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    });
    onCloseModal();
  }

  const checkFormValidaion = () => {
    const fieldEl = [...document.querySelectorAll('.event-form__field')].map(el => el.value);
    console.log('fieldEl', fieldEl);
    if (fieldEl.includes('')) {
      return null;
    }

    const submitBtn = document.querySelector('.event-form__submit-btn');
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('event-form__submit-btn_enabled');
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form className="event-form">
            <input
              onInput={checkFormValidaion}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                onInput={checkFormValidaion}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                onInput={checkFormValidaion}
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                onInput={checkFormValidaion}
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              onInput={checkFormValidaion}
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button
              disabled
              type="submit"
              className="event-form__submit-btn"
              onClick={onCreateEvent}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
