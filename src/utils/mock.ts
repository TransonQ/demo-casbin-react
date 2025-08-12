import { sleep } from './sleep'
import permissions from '../permissions.json'

/** 模拟请求权限配置 */
export const getMockPermissions = async () => {
  await sleep(500)
  return permissions
}
