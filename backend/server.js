import express from 'express';
import { newEnforcer, newModel } from 'casbin';
import cors from 'cors';
const app = express();
const port = 7001;
app.use(cors());

(async () => {
  const modelText = `
  [request_definition]
  r = sub, obj, act

  [policy_definition]
  p = sub, obj, act

  [policy_effect]
  e = some(where (p.eft == allow))

  [matchers]
  m = r.sub == p.sub && r.obj == p.obj && r.act == p.act
  `;

  const model = newModel(modelText);
  const enforcer = await newEnforcer(model);

  // 添加策略
  await enforcer.addPolicy('alice', 'data1', 'read');
  await enforcer.addPolicy('bob', 'data2', 'write');

  // 手动构造 auto 模式数据
  app.get('/casbin', async (req, res) => {
    const sub = req.query.sub || 'alice';
    const allPolicies = await enforcer.getFilteredPolicy(0, sub);

    // 转成 auto 模式要求的格式
    const permMap = { [sub]: {} };
    for (const [_, obj, act] of allPolicies) {
      if (!permMap[sub][obj]) permMap[sub][obj] = [];
      permMap[sub][obj].push(act);
    }

    // 返回符合 CasbinJsGetPermissionForUser 的格式
    res.json(permMap[sub]);
  });

  app.listen(port, () => {
    console.log(`服务已启动: http://localhost:${port}/casbin?sub=alice`);
  });
})();
