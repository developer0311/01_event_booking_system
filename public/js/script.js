const events = [
  {
    title: "Music Night",
    date: "2025-04-25",
    location: "New York Arena",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Art Festival",
    date: "2025-04-25",
    location: "Downtown Gallery",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/bombay_spirit_1-one_one.jpg?VersionId=AQpmr19hHmYiTjhGIvdqq8luklZcNIC9",
  },
  {
    title: "Tech Conference",
    date: "2025-04-27",
    location: "Silicon Hall",
    image:
      "https://media.assettype.com/analyticsinsight%2F2024-12-16%2Fauhtq9cf%2FMIND-2024.jpg?w=640&auto=format%2Ccompress",
  },
];

// --------------------- RENDER EVENT CARDS --------------------- //

function renderEventCards() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";
  events.forEach((ev) => {
    container.innerHTML += `
      <div class="col-lg-6 mb-3">
        <div class="card">
        <div class="img-container-2">
        <img src="${ev.image}" class="card-img-top" alt="${ev.title}">
        </div>
          <div class="card-body">
            <h5 class="card-title">${ev.title}</h5>
            <p class="card-text">Date: ${ev.date}<br>Location: ${
      ev.location
    }</p>
            <a href="event-booking.html?event=${encodeURIComponent(
              ev.title
            )}&date=${ev.date}" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>`;
  });
}


// --------------------- RENDER AVAILABLE EVENT CARDS --------------------- //

function showEventsForDate(dateStr) {
  const selected = events.filter((ev) => ev.date === dateStr);
  const list = document.getElementById("eventList");
  list.innerHTML = "";

  if (selected.length === 0) {
    list.innerHTML = `<p>No events on this date.</p>`;
    return;
  }

  selected.forEach((ev) => {
    list.innerHTML += `
      <div class="card col-sm-6 col-md-4 mb-3 available-event-card">
      <div class="img-container-1">
      <img src="${ev.image}" class="card-img-top" alt="${ev.title}">
      </div>
        <div class="card-body">
          <h5 class="card-title">${ev.title}</h5>
          <p class="card-text">${ev.location}</p>
          <a href="event-booking.html?event=${encodeURIComponent(
            ev.title
          )}&date=${ev.date}" class="btn btn-sm btn-primary">Book Now</a>
        </div>
      </div>`;
  });
}



document.addEventListener("DOMContentLoaded", () => {
  renderEventCards();

  const enabledDates = events.map((ev) => ev.date);
  flatpickr("#calendar", {
    enable: enabledDates,
    onChange: function (selectedDates, dateStr, instance) {
      showEventsForDate(dateStr);
    },
  });
});
