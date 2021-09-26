# MyBlog
第一次搭建个人博客的demo（2021-09-24）

# 1.准备开发环境

1. git（版本管理）
2. cmder（可选的命令行工具）
3. node（核心）
4. yarn（npm包管理的替代）
5. vscode（编辑器）

# 2.VuePress
1. 创建Github账号
2. 创建项目
3. 初体验 [vuepress](https://vuepress.vuejs.org/zh/guide/)
4. 默认主题的首页
   在github创建名为blog的项目，使用git clone ...命令克隆到本地，打开git here 下载vuepress ，npm init -y 命令初始化项目，新建docs目录和README.md，添加默认主题配置

# 3.导航栏
1. 了解目录结构的约定
2. 页面路由的映射规则
3. 导航栏的配置（全局、文件）

# 4.侧边栏
1. 为什么需要？
a.文章内快速检索（目录TOC）
b.关联内容快速调转（导航）
2. 适合介绍页与博客的两种形式（数组与对象）

`git checkout master`
   
博客npm官网搜vuepress sidebar

# 5.SEO
1. title（标题）
2. description（描述信息）
3. favicon（favicon.io）
4. author（作者）
5. keywords（关键词）

# 6.更新时间
1. 基于 git 提交时间
2. 修改文字
3. 时间格式 moment

# 7.发布到github.io
1. 指向 github 仓库
2. 修改 base
3.新增部署文件 （deploy.sh)
4. 验证 gh-pages
5. 设置 website，便于他人访问