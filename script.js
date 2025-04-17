// // buslist.html
// async function loadBuses() {
//     const response = await fetch('buses.json');
//     const buses = await response.json();
//     const busList = document.getElementById('bus-list');
  
//     buses.forEach(bus => {
//       const card = document.createElement('div');
//       card.className = 'bus-card';
  
//       card.innerHTML = `
//         <div class="bus-header">
//           <div>
//             <strong>${bus.operator}</strong> ${bus.label ? `<span class="label"> | ${bus.label}</span>` : ''}
//             <div class="bus-type">${bus.busType}</div>
//           </div>
//           <div class="rating">${bus.rating}</div>
//         </div>
  
//         <div class="bus-body">
//           <div class="time-block">
//             <div><strong>${bus.departure}</strong></div>
//             <div>Departure</div>
//           </div>
//           <div class="time-block">
//             <div>${bus.duration}</div>
//             <div>Duration</div>
//           </div>
//           <div class="time-block">
//             <div><strong>${bus.arrival}</strong></div>
//             <div>Arrival</div>
//           </div>
//           <div class="time-block price">
//             ₹${bus.price}
//           </div>
//         </div>
  
//         <div class="amenities">
//           🪑 Seats: ${bus.seatsAvailable} | 🧍‍♂️ Singles: ${bus.singleSeats}<br>
//           🚏 From: ${bus.from}<br>
//           🛬 To: ${bus.to}<br>
//           🔧 Amenities: ${bus.amenities.join(", ")}
//           ${bus.status ? `<div class="status">🟢 ${bus.status}</div>` : ''}
//         </div>
//       `;
  
//       busList.appendChild(card);
//     });
//   }
  
//   loadBuses();
  