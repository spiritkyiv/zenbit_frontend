import axios, { AxiosResponse } from 'axios';

interface UserData {
  name: string;
  email: string;
  text: string;
}

export const postDataMessage = async (data: UserData): Promise<AxiosResponse> => {
  try {
    const response = await axios.post('http://54.175.253.210:8080/users', data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
