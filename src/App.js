import './App.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import Calendar from '@toast-ui/calendar';
import {useEffect} from 'react'
function App() {
  useEffect(() => {
   
    
 const container = document.getElementById('calendar');
 const options = {
   defaultView: 'week',
   timezone: {
     zones: [
       {
         timezoneName: 'Asia/Seoul',
         displayLabel: 'Seoul',
       },
       {
         timezoneName: 'Europe/London',
         displayLabel: 'London',
       },
     ],
   },
   calendars: [
     {
       id: 'cal1',
       name: 'Personal',
       backgroundColor: '#03bd9e',
     },
     {
       id: 'cal2',
       name: 'Work',
       backgroundColor: '#00a9ff',
     },
   ],
 };
 
 const calendar = new Calendar(container, options);
 calendar.setOptions({
   useFormPopup: true,
   useDetailPopup: true,
 });
 calendar.createEvents([
   {
     id: 'event1',
     calendarId: 'cal2',
     title: 'Weekly meeting',
     start: '2022-06-07T09:00:00',
     end: '2022-06-07T10:00:00',
   },
   {
     id: 'event2',
     calendarId: 'cal1',
     title: 'Lunch appointment',
     start: '2022-06-08T12:00:00',
     end: '2022-06-08T13:00:00',
   },
   {
     id: 'event3',
     calendarId: 'cal2',
     title: 'Vacation',
     start: '2022-06-08',
     end: '2022-06-10',
     isAllday: true,
     category: 'allday',
   },
 ]);
 
 

 calendar.setTheme({
   common: {
     gridSelection: {
       backgroundColor: 'rgba(81, 230, 92, 0.05)',
       border: '1px dotted #515ce6',
     },
   },
 });
 function formatTime(time) {
   const hours = `${time.getHours()}`.padStart(2, '0');
   const minutes = `${time.getMinutes()}`.padStart(2, '0');
 
   return `${hours}:${minutes}`;
 }
 
 calendar.setOptions({
   template: {
     time(event) {
       const { start, end, title } = event;
 
       return `<span style="color: white;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
     },
     allday(event) {
       return `<span style="color: gray;">${event.title}</span>`;
     },
   },
 });

 calendar.on('clickEvent', ({ event }) => {
  const el = document.getElementById('clicked-event');
  el.innerText = event.title;
  console.log(event)
});
 
    
  })
  
  return (
    <div className="App">
          <div className="container">
      <div id="calendar" style={{height: '600px'}}></div>
 
  </div>

    
      </div>
   
  );
}

export default App;


/*

    
  
*/


