import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

function getUser(data) {
  const request = axios.post(`${BASE_URL}/login`, data);
  return request;
}

function postRegistration(data) {
  const request = axios.post(`${BASE_URL}/sign-up`, data);
  return request;
}

export { getUser, postRegistration };
