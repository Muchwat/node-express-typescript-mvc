import cors from 'cors';
import config from "config";
const allowedOrigins: Array<string> = config.get('cors.allowedOrigins');

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

const corsConfig = cors(options);

export default corsConfig;