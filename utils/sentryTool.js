import * as Sentry from "@sentry/react"

export const captureMessage = () => {
  Sentry.captureMessage("Send Message")
}

export const captureEvent = () => {
  Sentry.captureEvent({
    message: "Manual Event",
    level: Sentry.Severity.Warning,
    extra: { message: "can record something extra data" }
  })
}

export const captureWithScope = (error) => {
  Sentry.withScope((scope) => {
    scope.setExtra("blockId", "123456")
    scope.setLevel(Sentry.Severity.Error)
    Sentry.addBreadcrumb({
      message: "My Custom Breadcrumb"
    })
    Sentry.captureException(new Error(error?.text))
  })
}

// error status
// Critical: "critical"
// Debug: "debug"
// Error: "error"
// Fatal: "fatal"
// Info: "info"
// Log: "log"
// Warning: "warning"