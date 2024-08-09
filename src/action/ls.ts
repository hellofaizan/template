"use server";

import { db } from "~/server/db";
import { LEMONSQUEEZY_SETUP } from "~/lib/lemonsqueeze";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { webhookEvent } from "@prisma/client";
import { v4 } from "uuid";
import { currentUser } from "~/server/user";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const authUSer = await currentUser();

  if (!authUSer) {
    console.error("You need to be signed in to make a purchase.");
    redirect("/auth");
  }
  const user = await db.user.findUnique({
    where: {
      id: authUSer.id,
    },
  });

  return user;
};

export async function getCheckoutURL(variantId: number) {
  LEMONSQUEEZY_SETUP();

  const user = await getCurrentUser();
  if (!user) {
    console.error("You need to be signed in to make a purchase.");
    redirect("/auth");
  }

  const checkout = await createCheckout(
    process.env.LEMONSQUEEZY_STORE_ID!,
    variantId,
    {
      checkoutOptions: {
        media: false,
        logo: true,
        dark: true,
        subscriptionPreview: true,
      },
      checkoutData: {
        email: user.email || "",
        custom: {
          user_id: user.id,
        },
      },
      productOptions: {
        redirectUrl: `${process.env.NEXT_PUBLIC_Website_URL}/dashboard`,
        receiptButtonText: "Continue ✨",
        confirmationTitle: "Purchase Successful",
        confirmationButtonText: "Continue ✨",
        receiptThankYouNote:
          "Thank you for making this purchase! It helps us a lot to keep the website running.",
      },
    },
  );

  return checkout.data?.data?.attributes?.url;
}

export async function processWebhookEvent(webhookEvent: webhookEvent) {
  try {
  } catch {}
}

export async function storeWebhookEvent(
  eventName: string,
  body: webhookEvent["body"],
) {
  try {
    await db.$connect();

    const returnedValue = await db.webhookEvent.create({
      data: {
        id: v4(),
        eventName,
        processed: false,
        body: body as any,
      },
    });

    return returnedValue;
  } catch (error) {
    console.error("Error storing webhook event:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}
