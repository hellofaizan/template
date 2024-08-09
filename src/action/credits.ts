"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { getUserById } from "~/server/user";

export async function AddCredit({
  userId,
  credits,
}: {
  userId: string;
  credits: number;
}) {
  if (!userId) {
    return { error: "UserId is must 🚧" };
  }

  // Update Credits
  // await db.user.update({
  //   where: { id: userId },
  //   data: {
  //     credits: {
  //       increment: credits,
  //     },
  //   },
  // });

  return { success: "Profile updated." };
}

export async function GetCredits() {
  const usersession = await auth();
  const userid = usersession?.user?.id;

  if (!userid) {
    return { error: "You must be logged in to update your profile" };
  }
  const user = await getUserById(userid);

  const credits = user?.credits || 0;
  return { credits };
}

export async function DeductCredits() {
  const usersession = await auth();
  const userid = usersession?.user?.id;

  if (!userid) {
    return { error: "You must be logged in to update your profile" };
  }
  const user = await getUserById(userid);
  const credits = user?.credits || 0;

  if (credits < 1) {
    return { error: "You don't have enough credits" };
  }

  // Deduct Credit
  // await db.user.update({
  //   where: { id: userid },
  //   data: {
  //     credits: {
  //       decrement: 1,
  //     },
  //   },
  // });

  return { user };
}
