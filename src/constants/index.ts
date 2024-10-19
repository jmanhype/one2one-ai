//const DEV_URL = "http://127.0.0.1:3000";
//const TEST_URL = "https://backend-ai-chat-audio-influencer.vercel.app";
//const PROD_URL = "http://213.173.108.102";  // Your RunPod instance IP or domain
const ADMIN_PROD_URL = "https://admin.one2one.ai";
 //"https://enlighten-me-api-env.eba-gcie6i22.ap-south-1.elasticbeanstalk.com";

const HOST = '213.173.110.201';
export const API_PORT = '20100';  // Updated external port mapping
const RTMP_PORT = '38887'; // Maps to internal port 1935
const WHEP_PORT = '38889'; // Maps to internal port 1985

export const BASE_URL = `https://${HOST}`;
export const API_URL = `https://${HOST}:${API_PORT}`;
export const WEBSOCKET_URL = `wss://${HOST}:${API_PORT}/humanecho`;
export const WHEP_URL = `https://${HOST}:${WHEP_PORT}/rtc/v1/whep/?app=live&stream=livestream`;
export const RTMP_URL = `rtmps://${HOST}:${RTMP_PORT}/live/livestream`;
export const ADMIN_URL = ADMIN_PROD_URL;
export const MIN_PASSWORD_LENGTH = 8;
