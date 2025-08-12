import { sleep } from './sleep'
import permissions from '../permissions.json'

/** 模拟请求权限配置 */
export const getMockPermissions = async () => {
  await sleep(500)
  return permissions
}

export const getMockModelAndPolicy = async () => {
  await sleep(500)

  return {
    model: mockModel,
    policy: mockPolicy,
  }
}

export const mockModel = `
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act
`
export const mockPolicy = [
  // 用户直接绑定权限
  ['alice', 'data1', 'read'],
  ['alice', 'data2', 'write'],
  ['bob', 'data2', 'read'],

  // 角色绑定权限
  ['admin', 'data1', 'read'],
  ['admin', 'data1', 'write'],
  ['admin', 'data2', 'read'],
  ['admin', 'data2', 'write'],
]
