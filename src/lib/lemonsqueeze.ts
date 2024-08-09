import {
  lemonSqueezySetup,
  getAuthenticatedUser,
} from "@lemonsqueezy/lemonsqueezy.js";

export const LEMONSQUEEZY_ENDPOINT = "https://api.lemonsqueezy.com/v1/";

export const LEMONSQUEEZY_API_KEY = process.env.LEMONSQUEEZY_API_KEY;

export const LEMONSQUEEZY_SETUP = async () => {
  try {
    const apiKey = process.env.LEMONSQUEEZY_API_KEY;

    lemonSqueezySetup({
      apiKey,
      onError: (error) => {
        console.error(error);
        return error;
      },
    });

    const { data, error } = await getAuthenticatedUser();

    if (error) {
      console.error(error);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};
