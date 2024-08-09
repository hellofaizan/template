import crypto from "crypto";
import { NextResponse } from "next/server";
import { AddCredit } from "~/action/credits";
import { storeWebhookEvent } from "~/action/ls";
import { RecordPurchase } from "~/action/purchase";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET as string;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8",
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    // Logic according to event
    if (eventType === "order_created") {
      const userId: string = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";

      if (isSuccessful) {
        const data = {
          orderNumber: body.data.attributes.order_number,
          userId,
          userName: body.data.attributes.user_name,
          userEmail: body.data.attributes.user_email,
          receipt: body.data.attributes.urls.receipt,
          price: body.data.attributes.subtotal_formatted,
          tax: body.data.attributes.tax_name,
          variantId: body.data.attributes.first_order_item.variant_id,
          variantName: body.data.attributes.first_order_item.variant_name,
        };

        switch (body.data.attributes.subtotal_formatted) {
          case "$3.00":
            await AddCredit({
              userId,
              credits: 13,
            });
            break;
          case "$6.00":
            await AddCredit({
              userId,
              credits: 30,
            });
            break;
          case "$8.90":
            await AddCredit({
              userId,
              credits: 50,
            });
            break;
          case "$18.00":
            await AddCredit({
              userId,
              credits: 100,
            });
            break;
          default:
            break;
        }

        // Record Purchase
        await RecordPurchase({ userId, data });
      } else {
        // Store event for manual processing
        await storeWebhookEvent(eventType, body);
      }
    }

    return NextResponse.json({ message: "Event processed" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
