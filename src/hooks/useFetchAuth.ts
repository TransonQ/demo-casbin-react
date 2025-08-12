import useSWR from 'swr'
import { getMockPermissions } from '../utils/mock'
import { useEffect } from 'react'
import { useAuthStore } from './useAuthStore'

/** 获取并初始化权限配置 */
export function useFetchAuth() {
  const swrKey = { key: 'FetchAuth' }
  const { initAuth } = useAuthStore()

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
      initAuth(response)
    }
  }, [initAuth, response])

  return { response, isLoading, isValidating, mutate }
}

async function fetchers() {
  const res = await getMockPermissions()
  const formattedTime = new Date().toLocaleString()
  console.log(`[${formattedTime}]`, res)
  return res
}
