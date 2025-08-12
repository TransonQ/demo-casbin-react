import useSWR from 'swr'
import { getMockModelAndPolicy } from '../utils/mock'
import { useEffect } from 'react'
import { useAuthStore } from './useAuthStore'

/** 获取并初始化权限配置 */
export function useFetchAuth() {
  const swrKey = { key: 'FetchAuth' }
  const { initEnforcer } = useAuthStore()

  const { data: response } = useSWR(swrKey, fetchers, {
    refreshInterval: 10_000, // 10 秒自动刷新
  })

  useEffect(() => {
    if (response) {
      initEnforcer(response)
    }
  }, [initEnforcer, response])

  return { response }
}

async function fetchers() {
  const res = await getMockModelAndPolicy()
  const formattedTime = new Date().toLocaleString()
  console.log(`[${formattedTime}]`, res)
  return res
}
