
import React, { useState } from "react";

const SlotScheduler = () => {
  const [slots, setSlots] = useState([]); // State to hold the slots
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Handle slot addition
  const addSlot = () => {
    if (!startTime || !endTime) {
      alert("Please enter both start and end times.");
      return;
    }

    const start = parseInt(startTime.replace(":", ""), 10);
    const end = parseInt(endTime.replace(":", ""), 10);

    if (start >= end || start < 900 || end > 2100) {
      alert("Invalid time range. Please follow the 9:00 AM to 9:00 PM range.");
      return;
    }
    //@ts-ignore 
    setSlots([...slots, { startTime, endTime }]);
    setStartTime("");
    setEndTime("");
  };

  // Handle slot removal
  const removeSlot = (index:any) => {
    setSlots(slots.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Daily Slot Scheduler</h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              min="09:00"
              max="21:00"
            />
            <span className="text-gray-500">to</span>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              min="09:00"
              max="21:00"
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={addSlot}
          >
            Add Slot
          </button>
        </div>

        {/* Display Slots */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Scheduled Slots:</h2>
          {slots.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {slots.map((slot, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-md border border-gray-300"
                >
                  {/*//@ts-ignore} */}
                  <span>{`${slot.startTime} - ${slot.endTime}`}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeSlot(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No slots added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlotScheduler;

