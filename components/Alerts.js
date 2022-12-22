import React from 'react'

import styles from "../styles/Alerts.module.scss";
import { FiAlertCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { useAlerts, useAlertsRemove } from '../contexts/AlertsContext';

export default function Alerts() {

  const alerts = useAlerts()
  const removeAlert = useAlertsRemove()

  return (
    <div className={styles.alerts}>
      {
        alerts.map(alert => (
          <div key={alert.id} className={styles.alert}>
            <FiAlertCircle />
            <p>{ alert.message }</p>
            <button onClick={() => {
              removeAlert(alert)
            }}>
              <MdClose />
            </button>
          </div>
        ))
      }
    </div>
  )
}
