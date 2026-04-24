export function useApi() {
  const config = useRuntimeConfig()
  return config.public.apiUrl
}
