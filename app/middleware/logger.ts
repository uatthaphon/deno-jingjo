import { Context, green, cyan, white, bgRed } from "../../deps.ts";

async function logger(ctx: Context, next: () => Promise<void>) {
  await next();
  const responseTime = ctx.response.headers.get("X-Response-Time");

  console.log(`${green(ctx.request.method)} ${cyan(decodeURIComponent(ctx.request.url.pathname))}`);
  console.log(`${bgRed(white(String(responseTime)))}`);
}

async function responseTime(ctx: Context, next: () => Promise<void>) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}

export default { logger, responseTime };
