export const getBaseApiUrl = (): string => {
  const config = useRuntimeConfig();
  // return config.public.baseApiUrl;
  return 'https://api.surish-kerak.uz';
};
