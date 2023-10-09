import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

export const adminLogin = async (data) => {
  console.log('baseURL: ', baseURL);
  return await axios.post(`${baseURL}/admin/auth/adminLogin`, data);
};

export const inviteAdmin = async (data) => {
  return await axios.post(`${baseURL}/admin/inviteAdmin`, data);
};

export const adminAcceptInvitation = async (data) => {
  return await axios.post(`${baseURL}/admin/auth/acceptInvitation`, data, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
};

export const adminForgotPass = async (data) => {
  return await axios.post(`${baseURL}/admin/auth/adminForgotPass`, data);
};

export const adminForgotEmailConfirmation = async (data) => {
  return await axios.post(
    `${baseURL}/admin/auth/adminVerifyForgotEmail`,
    data,
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    }
  );
};

export const adminFirstTimeSetPass = async (data, token) => {
  return await axios.post(
    `${baseURL}/admin/auth/setPassFirstTime`,
    { ...data, token: token },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const adminSetNewPass = async (data, token) => {
  return await axios.post(
    `${baseURL}/admin/auth/adminChangeForgotPassword`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
