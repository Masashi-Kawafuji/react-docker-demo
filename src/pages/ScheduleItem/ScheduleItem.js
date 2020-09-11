import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

export const ScheduleItem = () => {
  const { id } = useParams();

  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/schedules/${id}`)
      .then(response => {
        setSchedule(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  });

  return (
    <div>
      <p>{schedule.held_on}</p>
      <p>{schedule.title}</p>
      <p>{schedule.venue}</p>
      <p>{schedule.description}</p>
    </div>
  );
}