"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { alertService, AlertType, Alert, Alerts, defaultAlertId } from 'src/services'

type AlertComponentProps = {
  id?: string
  fade?: boolean
}

const AlertComponent: React.FC<AlertComponentProps> = (props) => {
  const { id = defaultAlertId, fade = true } = props
  const router = useRouter()
  const [alerts, setAlerts] = useState<Alerts>([])

  useEffect(() => {
    //subscribe to new alert notifications
    const subscription = alertService.onAlert(id)
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          setAlerts(alerts => {
            // filter out alerts without 'keepAfterRouteChange' flag
            const filteredAlerts = alerts.filter(a => a.keepAfterRouteChange)

            // remove 'keepAfterRouteChange' flag on the rest
            filteredAlerts.forEach(a => delete a.keepAfterRouteChange)
            return filteredAlerts
          })
        } else {
          // add alert to array
          setAlerts(alerts => [...alerts, alert])

          // auto close alrt if required
          if (alert.autoClose) {
            setTimeout(() => removeAlert(alert), 3000)
          }
        }
      })

    // clear alerts on location change
    const onRouteChange = () => alertService.clear(id)
    // router.on('routeChangeStart', onRouteChange) // TODO

    // clean up function that runs when the component is unmounted
    return () => {
      // unsubscribe to avoid memory leaks
      subscription.unsubscribe()
      // router.events.off('routeChangeStart', onRouteChange) // TODO
    }
  })

  const removeAlert = (alert: Alert) => {
    if (fade) {
      // fade out alert
      const alertWithFade = { ...alert, fade: true }
      setAlerts(alerts.map(a => a === alert ? alertWithFade : a))

      // remove alert after faded out
      setTimeout(() => {
        setAlerts(alerts.filter(x => x !== alertWithFade))
      }, 250)
    } else {
      // remove alert
      setAlerts(alerts.filter(x => x !== alert))
    }
  }

  const cssClasses = (alert: Alert) => {
    if (!alert) return

    const classes = ['alert', 'alert-dismissable']

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning'
    }

    classes.push(alertTypeClass[alert.type])

    if (alert.fade) classes.push('fade')

    return classes.join(' ')
  }

  if (!alerts.length) return null

  return (
    <div className="container">
      <div className="m-3">
        {alerts.map((alert, index) =>
          <div key={index} className={cssClasses(alert)}>
            {/* using a uniq alert id to use as key */}
            <a className="close" onClick={() => removeAlert(alert)}>&times;</a>
            <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlertComponent
