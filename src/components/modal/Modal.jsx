import React from 'react';
import { createEvent } from '../../gateway/events.js';

import './modal.scss';

const Modal = ({ onCloseModal }) => {
  function getInputEvent(event) {
    event.preventDefault();
    const fieldEl = [...document.querySelectorAll('.event-form__field')].map(el => el.value);

    if (fieldEl.includes('')) {
      return null;
    }

    const [title, date, startTime, endTime, description] = fieldEl;
    const [a, b, c] = date.split('-').map(el => +el);
    const [r, t] = startTime.split(':').map(el => +el);
    const [y, z] = endTime.split(':').map(el => +el);

    createEvent({
      title,
      description,
      dateFrom: new Date(a, b, c, r, t),
      dateTo: new Date(a, b, c, y, z),
    });
    onCloseModal();
  }
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form className="event-form">
            <input type="text" name="title" placeholder="Title" className="event-form__field" />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                // onChange={this.handleChange}
              />
              <span>-</span>
              <input type="time" name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onClick={getInputEvent}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
