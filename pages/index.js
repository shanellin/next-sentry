import Head from "next/head"
import styles from "../styles/Home.module.css"
import { captureMessage, captureEvent, captureWithScope } from "../utils/sentryTool"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sentry App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sentry Page</h1>
      <div>{process.env.key_dsn}</div>
      {/* <button onClick={methodDoesNotExist}>Break the world</button>; */}
      <button onClick={() => captureMessage()}>Send ERR Msg</button>
      <button onClick={() => captureEvent()}>Send Manual Event</button>
      <button onClick={() => captureWithScope({ text: "Custom ERR withScope" })}>Send Custom ERR Msg (withScope)</button>
    </div>
  )
}

const UserProfile = () => {
  return (
    <div>
      <input type="text" />
    </div>
  )
}
