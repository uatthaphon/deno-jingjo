import { Router, Context } from "../deps.ts";

const router = new Router();

router
  .get("/examples", (ctx: Context) => {
    ctx.response.body = "GET Method: Deno Example list";
  })
  .get("/examples/:id", (ctx: Context) => {
    ctx.response.body = "GET Method: Deno Example detail";
  })
  .post("/examples", (ctx: Context) => {
    ctx.response.body = "POST Method: Deno Example";
  })
  .put("/examples/:id", (ctx: Context) => {
    ctx.response.body = "PUT Method: Deno Example";
  })
  .delete("/examples/:id", (ctx: Context) => {
    ctx.response.body = "DELETE Method: Deno Example";
  });

export default router;
