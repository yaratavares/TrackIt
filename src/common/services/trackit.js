import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getUser(data) {
  const request = axios.post(`${BASE_URL}/auth/login`, data);
  return request;
}

function postRegistration(data) {
  const request = axios.post(`${BASE_URL}/auth/sign-up`, data);
  return request;
}

function getHabits(token) {
  const request = axios.get(`${BASE_URL}/habits`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request;
}

function saveHabits(token, habit) {
  const request = axios.post(`${BASE_URL}/habits`, habit, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request;
}

function deleteHabits(token, idHabit) {
  const request = axios.delete(`${BASE_URL}/habits/${idHabit}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request;
}

function getHabitsToday(token) {
  const request = axios.get(`${BASE_URL}/habits/today`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request;
}

function checkTheHabit(token, id, checkOrUncheck) {
  const request = axios.post(
    `${BASE_URL}/habits/${id}/${checkOrUncheck}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return request;
}

function getHistoryUser(token) {
  const request = axios.get(`${BASE_URL}/habits/history/daily`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request;
}

export {
  getUser,
  postRegistration,
  getHabits,
  saveHabits,
  deleteHabits,
  getHabitsToday,
  checkTheHabit,
  getHistoryUser,
};
