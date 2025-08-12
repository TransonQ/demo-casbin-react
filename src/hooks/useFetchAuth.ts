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
    refreshInterval: 10_000,
  })

  useEffect(() => {
    if (response) {
      setAuth(response)
    }
  }, [setAuth, response])

  return { response, isLoading, isValidating, mutate }
}

async function fetchers() {
  const res = await getMockPermissions()
  const formattedTime = new Date().toLocaleString()
  console.log(`[${formattedTime}]`, res)
  return res
}
