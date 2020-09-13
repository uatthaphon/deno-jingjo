import { config } from "../deps.ts";

const env = config({ safe: true });

export const APP_HOST = env.APP_HOST || '127.0.0.1';
export const APP_PORT = Number(env.APP_PORT) || 7700;