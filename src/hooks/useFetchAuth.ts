import useSWR from 'swr'
import { getMockPermissions } from '../utils/mock'

export function useFetchAuth() {
  const swrKey = { key: 'FetchAuth' }

  const {
    data: response,
    isLoading,
    isValidating,
    mutate,
  } = useSWR(swrKey, fetchers, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  })

  return { response, isLoading, isValidating, mutate }
}

async function fetchers() {
  return await getMockPermissions()
}
