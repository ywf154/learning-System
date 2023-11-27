**步骤**

# 初次使用

1. Remove-Item .git -Recurse -Force(如果有旧的，先移除旧的)
2. git init（第一次使用需要）后续不需要
   Initialized empty Git repository in C:/Users/yi/Desktop/桌面/msater lenrn/git_hub/.git/
   你已经成功地在xx路径下初始化了一个新的Git仓库。 现在你可以开始添加文件，进行提交，创建分支等操作了。
3. git add .--来添加文件
4. git commit -m "message"[message] 可以是一些备注信息。 
    提交暂存区的指定文件到仓库区.
5. git branch -M main添加到哪个分区，一般是main
6. git remote add origin https://ywf154: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@github.com/ywf154/learning-System.git
    添加到云端.  远程仓库名为origin
这条命令的意思是将名为 origin 的远程仓库与位于 https://github.com/xxx.git 的远程仓库关联起来。
远程仓库的地址包含了用户名、个人访问令牌（token）和仓库路径信息。
通过执行这个命令，您可以使用 origin 作为远程仓库的简便名称进行后续的 Git 操作，
例如拉取（pull）、推送（push）等。
7. git push --set-upstream origin main
  也可使用git push -u origin main
push推送，origin main：远程仓库的主分支
这代表是将本地已存在的git项目的所有分支推送到的仓库。
拉取（pull）：从远程仓库获取最新的更改并合并到当前分支。执行 git pull 命令时，Git 会自动下载远程仓库中的最新更改，并将其合并到您当前所在的分支。这样可以确保您的本地代码与远程仓库保持同步，并获取其他人员在项目中所做的更新。
推送（push）：将本地分支的更改推送到远程仓库。执行 git push 命令时，Git 会将您在本地仓库中提交的更改上传到指定的远程仓库。这样可以共享您的更改，使其他团队成员能够查看、审查和集成您的代码更新。

# 二次使用
1. `git add .--来添加文件`
2. `git commit -m "message"`
3. `git push -u origin main`

# 错误案例

fatal: Authentication failed for 'https://github.com/ywf154/yis_first_project.git/'
这个错误提示表示在尝试使用提供的凭据进行 GitHub 身份验证时，认证失败。这可能是由以下几种原因导致的：
错误的用户名或密码：请确保您输入的 GitHub 用户名和密码是正确的。确认没有输入错误或遗漏字符，并确保使用的是访问您目标仓库所需的凭据。
二步验证（Two-Factor Authentication）：如果您已启用 GitHub 的二步验证功能，您需要使用生成的个人访问令牌（Personal Access Token）来替代密码进行身份验证。
登录到您的 GitHub 帐户，生成并使用个人访问令牌作为密码进行身份验证。
访问权限限制：检查您是否具有足够的权限来访问该仓库。如果您不是仓库的所有者或没有被授予写入权限，将无法进行身份验证和推送更改。
网络连接问题：确认您的网络连接正常工作，没有任何防火墙或代理设置干扰访问 GitHub 的请求。
临时问题：有时候，GitHub 服务器可能遇到临时问题，导致无法进行身份验证。请等待一段时间后再次尝试。

# git仓库的用法


`git remote add <remote_name> <remote_url>`
添加一个新的远程仓库，指定远程仓库的名称（<remote_name>）和URL（<remote_url>）。
`git remote -v`
显示所有已配置的远程仓库及其对应的URL。
`git remote show <remote_name>`
显示指定远程仓库的详细信息，包括远程分支和本地分支的对应关系。
`git remote rename <old_name> <new_name>`
将已配置的远程仓库重命名，将旧名称（<old_name>）改为新名称（<new_name>）。
`git remote remove <remote_name>`
移除指定的远程仓库。
`git remote set-url <remote_name> <new_url>`
修改指定远程仓库的URL，将其改为新的URL（<new_url>）。
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
`git remote set-url origin  https://ywf154:ghp_??@github.com/ywf154/learning-System.git`
这个用来修改远程仓库的url(token)