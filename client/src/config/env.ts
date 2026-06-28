export interface EnvConfig {
  apUrl: string;
}

const envConfig: EnvConfig = {
  apUrl: import.meta.env.VITE_API_URL,
};

export default envConfig;
