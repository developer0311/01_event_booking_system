document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const eventName = params.get("event") || "";
    const eventDate = params.get("date") || "";
  
    document.getElementById("eventName").value = eventName;
    document.getElementById("eventDate").value = eventDate;
  
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Simulate form validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const contact = document.getElementById("contact").value.trim();
      const details = document.getElementById("details").value.trim();
  
      if (!name || !email || !contact || !details) {
        alert("Please fill all fields.");
        return;
      }
  
      document.getElementById("confirmation").classList.remove("d-none");
      document.getElementById("bookingForm").reset();
    });
  });
  