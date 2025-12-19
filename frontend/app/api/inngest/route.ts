import { inngest } from "@/lib/inngest/client";
import { sendSignUpEmail, sendDailyNewsSummary } from "@/lib/inngest/function";
import {} from "@/lib/nodemailer";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail, sendDailyNewsSummary],
});
