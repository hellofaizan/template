"use server";

import { db } from "~/server/db";
import { getUserById } from "~/server/user";

export async function RecordPurchase({
  userId,
  data,
}: {
  userId: string;
  data: any;
}) {

  // Record Purchase
  // await db.purchase.create({
  //   data: {
  //     userId,
  //     orderNumber: data.orderNumber,
  //     userName: data.userName,
  //     userEmail: data.userEmail,
  //     receipt: data.receipt,
  //     price: data.price,
  //     tax: data.tax,
  //     variantId: data.variantId,
  //     variantName: data.variantName,
  //   },
  // });


  return { success: "Purchase recorded." };
}