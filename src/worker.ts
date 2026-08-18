import type { ExportedHandler } from "@cloudflare/workers-types";
import handler, {
  createScheduledHandler,
  PluginBridge
} from "@emdash-cms/cloudflare/worker";
// import { env } from 'cloudflare:workers';

export { PluginBridge };

export default {
  ...handler,
  scheduled: createScheduledHandler(),
} satisfies ExportedHandler;