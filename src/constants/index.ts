//const DEV_URL = "http://127.0.0.1:3000";
//const TEST_URL = "https://backend-ai-chat-audio-influencer.vercel.app";
//const PROD_URL = "http://213.173.108.102";  // Your RunPod instance IP or domain
const ADMIN_PROD_URL = "https://admin.one2one.ai";
//"https://enlighten-me-api-env.eba-gcie6i22.ap-south-1.elasticbeanstalk.com";

const HOST = 'api.one2one.ai';
const RTMP_HOST = 'rtmp.one2one.ai';
const WHEP_HOST = 'whep.one2one.ai';

export const BASE_URL = `https://${HOST}`;
export const API_URL = `https://${HOST}`;
export const WEBSOCKET_URL = `wss://${HOST}/humanecho`;
export const WHEP_URL = `https://${WHEP_HOST}/rtc/v1/whep/?app=live&stream=livestream`;
export const RTMP_URL = `rtmps://${RTMP_HOST}/live/livestream`;
export const ADMIN_URL = ADMIN_PROD_URL;
export const MIN_PASSWORD_LENGTH = 8;