import { Router, Context } from "../deps.ts";

const router = new Router();

router
  .get("/", (ctx: Context) => {
    ctx.response.body = "Our Server Is Ok!!";
    ctx.response.status = 200;
  });

export default router;
