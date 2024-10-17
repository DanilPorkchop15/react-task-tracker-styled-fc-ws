import {Method, Request} from "../model";

export const request = async (method: Method, url: string, request?: Request<any>): Promise<Response> => {
  try {
    const res = await fetch(url, {
      method,
      ...request,
    });
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(
        `${method} request to ${url} failed with ${res.status} ${res.statusText}`
      );
    }
  } catch (e) {
    console.log(`${method} request error: `, e);
    throw e;
  }
};
