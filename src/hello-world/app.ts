import axios from 'axios';
import { CHECK_IP_URL } from '../constants/constants';

export interface Response {
    statusCode: number;
    body: string;
}

export const handler = async (event: any, _context: any): Promise<Response> => {
  try {
    const ret = await axios(CHECK_IP_URL);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: ret.data,
      }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Unable to fetch IP',
      }),
    };
  }
};
