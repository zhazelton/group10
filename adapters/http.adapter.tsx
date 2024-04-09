import axios from "axios";
import { getToken, setToken } from "../common/getSetToken";
import { BEURL } from "../config";

const http = axios.create({
  baseURL: BEURL + "/apiv1",
});

export const POST = async (
  url: any,
  body = {},
  secured = false,
  contentType = "application/json"
) => {
  console.log("get token,>>", getToken());

  const token = await getToken();
  await setToken(token); // update the local storage with new token if it is available in response of
  console.log("post token >>>", token);

  return http({
    method: "POST",
    url,
    data: body,
    headers: {
      Authorization: secured ? token : null,
      "Content-Type": contentType,
    },
  }).then((data) => data.data);
};

export const GET = async (url: any, secured = false) => {
  const token = await getToken();
  return http({
    method: "GET",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};

export const PUT = async (
  url: any,
  body = {},
  secured = false,
  contentType = "application/json"
) => {
  const token = await getToken();
  return http({
    method: "PUT",
    url,
    data: body,
    headers: {
      "Content-Type": contentType,
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};

export const REMOVE = async (url: any, secured = false) => {
  const token = await getToken();
  return http({
    method: "DELETE",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};