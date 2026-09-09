import { partnerFormSchema } from "@/features/(site)/ecosystem/schema";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = partnerFormSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid form", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // Stub: persist / email destination lands in a later pass.
  console.info("[partner-inquiry]", parsed.data);

  return Response.json({ ok: true });
}
