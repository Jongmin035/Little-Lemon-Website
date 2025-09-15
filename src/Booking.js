import React from "react";

function BookingForm({formData, availableTimes, handleChange, handleSubmit, updateTimes}) {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={(e) => {
          handleChange(e);
          updateTimes({ type: "update_time", date: e.target.value });
        }}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

function BookingPage({formData, availableTimes, handleChange, handleSubmit, updateTimes}) {
  return (
    <BookingForm
      formData={formData}
      availableTimes={availableTimes}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      updateTimes={updateTimes}
    />
  );
}

export default BookingPage;