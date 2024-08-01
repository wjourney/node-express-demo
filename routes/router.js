/* 这是路由模块 */

// 导入 express
const express = require("express");
// 创建路由对象
const router = express.Router();

// 挂载具体的路由
// apiRouter.js【路由模块】
router.get("/get", (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;
  // 调用 res.send() 方法，向客户端响应处理的结果
  res.send({
    status: 201, // 201代表处理成功，404代表处理失败
    msg: "GET 请求成功！", // 状态的描述
    data: query, // 需要响应给客户端的数据
  });
});

// apiRouter.js【路由模块】
router.post("/post", (req, res) => {
  // 通过 req.body 获取请求体重包含的 url-encoded 格式的数据
  const body = req.body;
  // 调用 res.send() 方法，像客户端响应结果
  res.send({
    status: 201,
    msg: "POST 请求成功！",
    data: body,
  });
});

// 向外导出路由对象
module.exports = router;
