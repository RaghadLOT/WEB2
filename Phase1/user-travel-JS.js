// Mock data for demonstration
const travels = [
    {
        travelId: 1,
        travelTime: 'July 2024',
        country: 'Japan',
        places: [
            {
                placeName: 'Mount Fuji',
                location: 'Honshu',
                description: 'A beautiful volcanic mountain in the Japanese island of Honshu.',
                photo: 'mount-fuji.jpg', // Replace with actual photo URL if available
                likes: 55,
                comments: [
                    { userName: 'John Doe', comment: 'Amazing place!' },
                    { userName: 'Jane Smith', comment: 'Loved the view.' }
                ]
            }
        ]
    },
    {
        travelId: 2,
        travelTime: '...',
        country: '...',
        places: [
            // Add more place details if needed
        ]
    }
    // Add more travel data as needed
];

// Function to display all travels
function displayTravels(travels) {
    const tableBody = document.getElementById('travels-table-body');
    tableBody.innerHTML = '';

    travels.forEach((travel) => {
        const travelRow = document.createElement('tr');
        travelRow.innerHTML = `
            <td rowspan="2">
                ${travel.travelId}
                <div class="travel-actions">
                    <a href="#">Edit Travel Details</a>
                    <a href="#">Delete Travel</a>
                </div>
            </td>
            <td rowspan="2">${travel.travelTime}</td>
            <td rowspan="2">${travel.country}</td>
        `;
        tableBody.appendChild(travelRow);

        travel.places.forEach((place) => {
            const placeRow = document.createElement('tr');
            placeRow.innerHTML = `
                <td>${place.placeName}</td>
                <td>${place.location}</td>
                <td>${place.description}</td>
                <td>
                    <img src="${place.photo}" alt="Place Photo" class="travel-photo">
                </td>
                <td>❤️ ${place.likes}</td>
                <td class="comments-section">
                    ${place.comments.map(comment => `<div>[${comment.userName}]: ${comment.comment}</div>`).join('')}
                </td>
            `;
            tableBody.appendChild(placeRow);
        });
    });
}

// Display all travels initially
displayTravels(travels);
