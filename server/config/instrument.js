import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://2f28d5a2a902a9fd43c366876110ed26@o4509858390736896.ingest.us.sentry.io/4509858398535680",
 // tracesSampleRate: 1.0,
  sendDefaultPii: true,
  integrations: [
    nodeProfilingIntegration,
    Sentry.mongooseIntegration(),
  ],
});
