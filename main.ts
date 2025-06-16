// main.ts
// Basic Deno app for Deno Deploy that crashes after 60 seconds
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

let crashed = false;

// Crash after 60 seconds
setTimeout(() => {
  crashed = true;
  // Deno.exit(1); // Not allowed on Deno Deploy
}, 60000);

serve((req) => {
  const url = new URL(req.url);
  if (url.pathname === "/error") {
    throw new Error("Simulated server crash: error thrown on /error");
  }
  console.log("[INFO] Sent normal hello response to", url.pathname);
  return new Response("Hello from Deno! Visit /error to simulate a crash.");
});
