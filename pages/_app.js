import '../styles/globals.css'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.key_dsn) {
  console.log(process.env.APP_ENV)
  Sentry.init({
    // --- main ---
    dsn: process.env.key_dsn, // 金鑰
    release: process.env.version, // 測試版本
    environment: process.env.APP_ENV, // 測試環境
    // --- extra ---
    integrations: [new Integrations.BrowserTracing()],
    beforeSend(event, hint) {
      console.log({ event, hint })
      if (event.request?.url.includes("http://localhost:3070/") && false) {
        return null // 返回 null， 表示過濾事件，不上傳
      }
      // Modify the event
      if (event.user.name == "shanelin") {
        delete event.user.name
      }
      return event
    },
    beforeBreadcrumb(breadcrumb, hint) {
      console.log({ breadcrumb, hint })
      return breadcrumb.category === "ui.click" ? null : breadcrumb
    }
    // tracesSampleRate: 1.0,
    // denyUrls: [/https?:\/\/xxx.yyy.cc/],
    // allowUrls: [/https?:\/\/xxx.yyy.cc/],
    // ignoreErrors: [/ResizeObserver loop limit exceeded/i],
    // ....
  })

  Sentry.configureScope((scope) => {
    scope.setTag("user_name", "shanelin");
    scope.setUser({
      account: "shanelin@xx.xx",
      name: "shanelin",
      mobile: "xxxx"
    })
  })

  console.log(Sentry)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
