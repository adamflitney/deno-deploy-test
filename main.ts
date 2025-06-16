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
  if (crashed) {
    throw new Error("Simulated server crash after 60 seconds");
  }
  return new Response(
    "Hello from Deno! The server will crash after 60 seconds."
  );
});
