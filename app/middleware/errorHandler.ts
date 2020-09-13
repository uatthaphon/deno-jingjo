import { Context, isHttpError, Status } from "../../deps.ts";

async function errorHandler(ctx: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      ctx.response.status = err.status;
    } else {
      switch (err.name) {
        default:
          ctx.response.status = Status.BadRequest;
      }
    }

    ctx.response.body = {
      error: err.name,
      message: err.message,
      timestamp: Date.now(),
    };
    ctx.response.type = "json";
  }
}

export default errorHandler;
