import React, {createContext} from 'react';

const EventsContext = createContext({});

export const EventsProvider = ({children}) => {
  const [events, setEvents] = React.useState([]);

  const addEvent = event => {
    setEvents(e => [...e, event]);
  };

  const deleteEvent = event => {
    // clearInterval();
    setEvents(e => e.filter(ev => ev !== event));
  };

  return (
    <>
      <EventsContext.Provider value={{addEvent, events, deleteEvent}}>
        {children}
      </EventsContext.Provider>
    </>
  );
};

export function useEvents() {
  const context = React.useContext(EventsContext);

  return context;
}

export default EventsContext;
