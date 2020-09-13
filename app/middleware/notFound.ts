import { Context, Status } from "../../deps.ts";

function notFound(ctx: Context) {
  ctx.response.status = Status.NotFound;
  ctx.response.body = {
    error: "NotFound",
    message: `Path ${ctx.request.url} not found`,
  };
}

export default notFound;
