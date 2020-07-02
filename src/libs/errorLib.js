import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({dsn: "https://e6026c26bb5c4012aebb76abf9576de0@o414228.ingest.sentry.io/5303301"});

}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
      message = error.message;
    }

    alert(message);
  }