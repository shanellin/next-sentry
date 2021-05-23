import React from "react"
import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body style={{ height: "100vh", margin: 0, fontFamily: "Roboto", fontWeight: 400 }}>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next * {
              font-family: Roboto !important;
              letter-spacing: normal !important;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `}</style>
        </body>
      </html>
    )
  }
}
