import useSWR from 'swr'
import { getMockPermissions } from '../utils/mock'
import { useEffect } from 'react'
import { useAuthStore } from './useAuthStore'

export function useFetchAuth() {
  const swrKey = { key: 'FetchAuth' }
  const { setAuth } = useAuthStore()

  const {
    data: response,
    isLoading,
    isValidating,
    mutate,
  } = useSWR(swrKey, fetchers, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  })

  useEffect(() => {
    console.log('response: ', response)
    setAuth(response)
  }, [setAuth, response])

  return { response, isLoading, isValidating, mutate }
}

async function fetchers() {
  return await getMockPermissions()
}
