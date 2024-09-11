import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="InputContainer">
      <ReactDatePicker
        className="input"
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        isClearable
        placeholderText="Select date range"
        zIndexOffset={9999}
      />
    </div>
  );
};

export default DateRangePicker;
