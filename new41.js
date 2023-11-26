function bookTickets() {
    return new Promise((resolve, reject) => {
      // Logic to book tickets
      setTimeout(() => {
        resolve('Tickets booked');
      }, 2000); // Simulating ticket booking delay
    });
  }
  
  function arrangeAccommodation() {
    return new Promise((resolve, reject) => {
      // Logic to arrange accommodation
      setTimeout(() => {
        resolve('Accommodation arranged');
      }, 1500); // Simulating accommodation arrangement delay
    });
  }
  
  // Planning the trip to Manali
  async function planTripToManali() {
    try {
      const [tickets, accommodation] = await Promise.all([
        bookTickets(),
        arrangeAccommodation()
      ]);
      console.log(tickets);
      console.log(accommodation);
      console.log('Trip to Manali planned successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  planTripToManali();
  