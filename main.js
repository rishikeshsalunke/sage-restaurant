document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#bookingDate", {
        enableTime: true,
        dateFormat: "Y-m-d h:i K", 
        time_24hr: false,
        minuteIncrement: 15,
        minDate: "today",
        minTime: "10:00",
        maxTime: "23:60",
        allowInput: false
    });
});



