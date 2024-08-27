'use client'

import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {calendarEvents} from "@/lib/data"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react'
import { View, Views } from 'react-big-calendar'



const localizer = momentLocalizer(moment)
const BigCalender = () => {
  const [view, setView] = useState<View>(Views.DAY)
  const handleOnchangeView = (view: View) => {
    setView(view);
  }
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views ={["work_week", 'day']}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnchangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
    </div>
  )
}

export default BigCalender