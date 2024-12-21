import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id} className="border p-4 mb-2 rounded">
                        <h2 className="font-bold">{event.name}</h2>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
