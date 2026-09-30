import { env } from 'cloudflare:workers';
export function binding() { if (!env.DB) throw new Error('Database unavailable'); return env.DB; }
