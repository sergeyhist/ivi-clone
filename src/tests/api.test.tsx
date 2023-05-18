import axios from "axios";
import {getUserByEmail} from "/src/api/userApi";

jest.mock('axios');

describe("userApi",()=>{
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch user by email successfully', async () => {
    const email = 'test@example.com';
    const userData = { id: 1, name: 'John Doe', email };

    axios.get.mockResolvedValueOnce({ data: userData });

    const result = await getUserByEmail(email);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER_HOST}/users/${email}`);
    expect(result).toEqual(userData);
  });
  it('should handle error and return undefined', async () => {
    const email = 'test@example.com';
    const error = new Error('Request failed');

    axios.get.mockRejectedValueOnce(error);

    const result = await getUserByEmail(email);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.SERVER_HOST}/users/${email}`);
    expect(result).toBeUndefined();
  });
})