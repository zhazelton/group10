import axios from "axios";
import { getToken } from "../common/getSetToken";
import { BEURL } from "../config";

const http = axios.create({
  baseURL: BEURL + "/apiv1",
});

export const GET = async (url, secured = false) => {
  const token = await getToken();
  return http({
    method: "GET",
    url,
    headers: {
      "Access-Control-Allow-Origin": BEURL + "/apiv1",
      "Content-Type": "application/json",
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};

export const POST = async (
  url,
  body = {},
  secured = false,
  contentType = "application/json"
) => {
  const token = await getToken();
  try {
    const result = await http({
      method: "POST",
      url,
      data: body,
      headers: {
        "Access-Control-Allow-Origin": BEURL + "/apiv1",
        "Content-Type": contentType,
        // Authorization: secured ? token : null,
      },
    });
    return result;
  } catch (err) {
    console.log("post >> ", err);
  }
};

export const PUT = async (
  url,
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
      "Access-Control-Allow-Origin": BEURL + "/apiv1",
      "Content-Type": contentType,
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};

export const REMOVE = async (url, secured = false) => {
  const token = await getToken();
  return http({
    method: "DELETE",
    url,
    headers: {
      "Access-Control-Allow-Origin": BEURL + "/apiv1",
      "Content-Type": "application/json",
      Authorization: secured ? token : null,
    },
  }).then((data) => data.data);
};