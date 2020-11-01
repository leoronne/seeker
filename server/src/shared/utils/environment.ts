import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

export const { APP_NAME } = process.env;
export const { APP_API_URL } = process.env;
export const { API_KEY } = process.env;
export const { APP_WEB_URL } = process.env;
