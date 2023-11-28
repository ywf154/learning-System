**步骤**

# 初次使用

1. `Remove-Item .git -Recurse -Force`(如果有旧的，先移除旧的)
2. `git init`（第一次使用需要）后续不需要
   Initialized empty Git repository in C:/Users/yi/Desktop/桌面/msater lenrn/git_hub/.git/
   你已经成功地在xx路径下初始化了一个新的Git仓库。 现在你可以开始添加文件，进行提交，创建分支等操作了。
3. `git add .`--来添加文件
4. `git commit -m "message"`[message] 可以是一些备注信息。 
    提交暂存区的指定文件到仓库区.
5. `git branch -M main`添加到哪个分区，一般是main
6. `git remote add origin https://ywf154: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@github.com/ywf154/learning-System.git`
    添加到云端.  远程仓库名为origin
这条命令的意思是将名为 origin 的远程仓库与位于 https://github.com/xxx.git 的远程仓库关联起来。
远程仓库的地址包含了用户名、个人访问令牌（token）和仓库路径信息。
通过执行这个命令，您可以使用 origin 作为远程仓库的简便名称进行后续的 Git 操作，
例如拉取（pull）、推送（push）等。
7. `git push --set-upstream origin main`
  也可使用`git push -u origin main`
push推送，origin main：远程仓库的主分支
这代表是将本地已存在的git项目的所有分支推送到的仓库。
拉取（pull）：从远程仓库获取最新的更改并合并到当前分支。执行 git pull 命令时，Git 会自动下载远程仓库中的最新更改，并将其合并到您当前所在的分支。这样可以确保您的本地代码与远程仓库保持同步，并获取其他人员在项目中所做的更新。
推送（push）：将本地分支的更改推送到远程仓库。执行 git push 命令时，Git 会将您在本地仓库中提交的更改上传到指定的远程仓库。这样可以共享您的更改，使其他团队成员能够查看、审查和集成您的代码更新。

# 二次使用
1. `git add .`
2. `git commit -m "message"`
3. `git push -u origin main`
# 关于身份验证出错的问题

要使用SSH密钥进行GitHub身份验证，您需要完成以下步骤：
生成SSH密钥对：首先，您需要在您的计算机上生成SSH密钥对。打开命令行终端（如Git Bash、Terminal等），然后运行以下命令：

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

这将生成一个RSA类型的4096位SSH密钥对，并将其关联到您提供的电子邮件地址。
提供密钥存储位置和文件名：在运行上述命令后，系统会提示您提供密钥的存储位置和文件名。您可以选择使用默认值（按Enter键），或者根据需要指定特定的位置和文件名。
设置SSH密钥的密码（可选）：系统还会询问您是否要为SSH密钥设置密码。如果您希望增加密钥的安全性，可以选择设置密码。否则，您可以留空密码字段并直接按Enter键。
添加SSH密钥到GitHub帐户：生成SSH密钥对后，您需要将公钥部分添加到您的GitHub帐户。通过以下步骤完成此操作：
登录到GitHub帐户，并转到帐户设置。
在左侧导航栏中，点击"SSH and GPG keys"（SSH和GPG密钥）。
点击"New SSH key"（新建SSH密钥）。
在"Title"（标题）字段中，为密钥提供一个描述性的名称。
在"Key"（密钥）字段中，复制并粘贴您的公钥（通常位于您生成的密钥对的.pub文件中）。
点击"Add SSH key"（添加SSH密钥）。
验证SSH连接：完成上述步骤后，您可以通过SSH连接验证是否成功。在命令行终端中运行以下命令：

`ssh -T git@github.com`

系统会尝试使用您的SSH密钥进行连接，并显示相关的验证信息。
一旦您成功配置了SSH密钥，您可以在进行Git操作时省去输入用户名和密码的步骤。请确保妥善保管您的私钥，并避免将其泄露给他人。

# 错误案例

fatal: Authentication failed for 'https://github.com/ywf154/yis_first_project.git/'
这个错误提示表示在尝试使用提供的凭据进行 GitHub 身份验证时，认证失败。这可能是由以下几种原因导致的：
错误的用户名或密码：请确保您输入的 GitHub 用户名和密码是正确的。确认没有输入错误或遗漏字符，并确保使用的是访问您目标仓库所需的凭据。
二步验证（Two-Factor Authentication）：如果您已启用 GitHub 的二步验证功能，您需要使用生成的个人访问令牌（Personal Access Token）来替代密码进行身份验证。
登录到您的 GitHub 帐户，生成并使用个人访问令牌作为密码进行身份验证。
访问权限限制：检查您是否具有足够的权限来访问该仓库。如果您不是仓库的所有者或没有被授予写入权限，将无法进行身份验证和推送更改。
网络连接问题：确认您的网络连接正常工作，没有任何防火墙或代理设置干扰访问 GitHub 的请求。
临时问题：有时候，GitHub 服务器可能遇到临时问题，导致无法进行身份验证。请等待一段时间后再次尝试。
当你在使用 Git 执行与 GitHub 仓库相关的操作时，如 git push 或 git clone，出现 "fatal: Authentication failed for 'https://github.com/ywf154/learning-System.git/'" 错误通常表示认证失败。

这个错误通常发生在以下几种情况下：

无效的凭据：检查你使用的凭据（用户名和密码或访问令牌）是否正确。确保没有输入错误并且凭据没有过期。如果你使用的是访问令牌，确保该令牌具有足够的权限来执行所需的操作。

未配置凭据：如果你尚未配置 Git 用于与 GitHub 进行身份验证的凭据，或者凭据已过期或被删除，会导致认证失败。你可以使用以下命令来配置凭据：

使用用户名和密码：

`git config --global credential.helper wincred`

使用访问令牌：

`git config --global credential.helper manager-core`

在配置凭据后，Git 将在首次访问 GitHub 时要求你提供凭据，并在本地缓存它们以供将来使用。

受限制的访问权限：该错误可能是由于你没有足够的权限来访问该仓库导致的。确保你具有正确的权限来执行所需的操作。如果你是仓库的拥有者或管理员，可以检查仓库的权限设置。

如果你仍然遇到认证失败的问题，可以尝试以下解决方法：

重新输入凭据：重新输入你的用户名和密码或访问令牌，确保没有输入错误。
更新 Git 版本：确保你正在使用最新版本的 Git，因为旧版本可能存在与身份验证相关的问题。
尝试使用 SSH 协议：考虑使用 SSH 协议而不是 HTTPS 进行仓库操作。使用 SSH 协议时，你需要设置 SSH 密钥并将其添加到 GitHub 帐户中。
检查网络连接：确保你的网络连接正常，没有任何防火墙或代理服务器阻止与 GitHub 的通信。
如果尝试了这些解决方法后问题仍然存在，建议检查 GitHub 支持文档或联系 GitHub 支持团队以获取更多帮助和指导。

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


`git remote set-url origin  https://ywf154:ghp_??@github.com/ywf154/learning-System.git`

这个用来修改远程仓库的url(token)

https://ywf154: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@github.com/ywf154/learning-System.git 