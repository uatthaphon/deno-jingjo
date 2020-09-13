import { Application, green, yellow } from "./deps.ts";

import { APP_HOST, APP_PORT } from "./config/app.ts";
import logger from "./app/middleware/logger.ts";
import errorHandler from "./app/middleware/errorHandler.ts";
import notFound from "./app/middleware/notFound.ts";
import healthCheckRouter from "./routes/healthCheck.ts";
import exampleRouter from "./routes/example.ts";

const host: string = APP_HOST;
const port: number = APP_PORT;

const app = new Application();

app.use(logger.logger);
app.use(logger.responseTime);
app.use(errorHandler);

// assign routes
app.use(healthCheckRouter.routes());
app.use(healthCheckRouter.allowedMethods());
app.use(exampleRouter.routes());
app.use(exampleRouter.allowedMethods());

app.use(notFound);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? host}:${port}`;

  console.log(`${yellow("Listening on:")} ${green(url)}`);
});

await app.listen({ port });
