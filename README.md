# HTML网页示例

这是一个基础的HTML网页示例，展示了HTML的基本元素和CSS样式。

## 文件说明

- `index.html`: 主网页文件，包含HTML基础元素展示

## 如何上传到GitHub

由于当前环境无法直接推送到GitHub，请按照以下步骤手动上传：

1. 登录您的GitHub账户
2. 创建新仓库或进入已有仓库 `wangjiaating-17/工作中`
3. 点击「上传文件」按钮
4. 将本地的`index.html`文件拖拽到上传区域
5. 添加提交信息（如："初始提交HTML网页代码"）
6. 点击「提交更改」按钮

## 使用Git命令行上传（需要网络连接正常）

```bash
# 初始化Git仓库
git init

# 添加文件到暂存区
git add .

# 提交更改
git commit -m "初始提交HTML网页代码"

# 添加远程仓库（注意：中文名称可能需要URL编码）
git remote add origin https://github.com/wangjiaating-17/工作中.git

# 推送到GitHub
git push -u origin master
```

如果使用中文名称的仓库遇到问题，可以尝试创建英文名称的仓库，如`working`或`work-repo`。