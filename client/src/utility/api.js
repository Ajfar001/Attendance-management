import axios from 'axios';

const API_URL = 'http://localhost:3000';

const fetchUsers = async (page = 1, limit = 20) => {
  try {
    const response = await axios.get(`${API_URL}/api/users`, {
      params: { page, limit }
    });
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
};
const fetchUsersCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users/count`);
    return response.data.count;
  } catch (error) {
    console.log(error);
  }
};






const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/api/users`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${API_URL}/api/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createTeam = async (team) => {
  try {
    const response = await axios.post(`${API_URL}/api/team`, team);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchTeamById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/team/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
  createTeam,
  fetchTeamById,
  fetchUsersCount
};
