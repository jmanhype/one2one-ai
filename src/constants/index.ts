//const DEV_URL = "http://127.0.0.1:3000";
//const TEST_URL = "https://backend-ai-chat-audio-influencer.vercel.app";
//const PROD_URL = "http://213.173.108.102";  // Your RunPod instance IP or domain
const ADMIN_PROD_URL = "https://admin.one2one.ai";
 //"https://enlighten-me-api-env.eba-gcie6i22.ap-south-1.elasticbeanstalk.com";

const HOST = '213.173.110.201';
export const API_PORT = '38888';  // Maps to internal port 8010
const RTMP_PORT = '38887'; // Maps to internal port 1935
const WHEP_PORT = '38889'; // Maps to internal port 1985

export const BASE_URL = `http://${HOST}`;
export const API_URL = `http://${HOST}:${API_PORT}`;
export const WEBSOCKET_URL = `ws://${HOST}:${API_PORT}/humanecho`;
export const WHEP_URL = `http://${HOST}:${WHEP_PORT}/rtc/v1/whep/?app=live&stream=livestream`;
export const RTMP_URL = `rtmp://${HOST}:${RTMP_PORT}/live/livestream`;
export const ADMIN_URL = ADMIN_PROD_URL;
export const MIN_PASSWORD_LENGTH = 8;
