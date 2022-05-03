import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'

export type Alert = {
  id: string
  autoClose: boolean
  type: string
  message: string
  keepAfterRouteChange?: boolean
  fade?: boolean
}

export type Alerts = Array<Alert>

export const AlertType = {
  Success: 'Success',
  Error: 'Error',
  Info: 'Info',
  Warning: 'Warning'
}

const alertSubject = new Subject<Alert>()
export const defaultId = 'default-alert'

// enable subscribing to alerts observable
function onAlert(id = defaultId) {
  return alertSubject.asObservable().pipe(filter(alert => alert.id === id))
}

// convenience methods
function success(message: string, options?: Alert) {
  if (options) alert({ ...options, type: AlertType.Success, message })
}

function error(message: string, options?: Alert) {
  if (options) alert({ ...options, type: AlertType.Error, message })
}

function info(message: string, options?:Alert) {
  if (options) alert({ ...options, type: AlertType.Info, message })
}

function warn(message: string, options?: Alert) {
  if (options) alert({ ...options, type: AlertType.Warning, message })
}

// core alert method
function alert(alert: Alert) {
  alert.id = alert.id || defaultId
  alert.autoClose = alert.autoClose || true
  alertSubject.next(alert)
}

// clear alerts
function clear(id = defaultId) {
  alertSubject.next({ id } as Alert)
}

export const alertService = {
  onAlert,
  success,
  error,
  info,
  warn,
  alert,
  clear
}
