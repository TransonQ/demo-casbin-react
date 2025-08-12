import { sleep } from './sleep'
import permissions from '../permissions.json'

export const getMockPermissions = async () => {
  await sleep(500)
  return permissions
}
