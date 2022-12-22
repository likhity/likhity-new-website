import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

const AlertsContext = React.createContext();
const AlertsAddContext = React.createContext();
const AlertsRemoveContext = React.createContext();

export function useAlerts() {
  return useContext(AlertsContext)
}

export function useAlertsAdd() {
  return useContext(AlertsAddContext)
}

export function useAlertsRemove() {
  return useContext(AlertsRemoveContext)
}

export default function AlertsProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  function addAlert(message) {
    const newAlert = {
      id: uuid(),
      message,
    }
    setAlerts(prevAlerts => [...prevAlerts, newAlert]);
    setTimeout(() => {
      removeAlert(newAlert);
    }, 5000);
  }
  
  function removeAlert(alert) {
    setAlerts(prevAlerts => prevAlerts.filter(prevAlert => prevAlert.id !== alert.id))
  }

  return (
    <AlertsContext.Provider value={alerts}>
      <AlertsAddContext.Provider value={addAlert}>
        <AlertsRemoveContext.Provider value={removeAlert}>
          { children }
        </AlertsRemoveContext.Provider>
      </AlertsAddContext.Provider>
    </AlertsContext.Provider>
  )
}
