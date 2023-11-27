1. Remove-Item .git -Recurse -Force(如果有旧的，先移除旧的)
2. git init
   Initialized empty Git repository in C:/Users/yi/Desktop/桌面/msater lenrn/git_hub/.git/
   你已经成功地在xx路径下初始化了一个新的Git仓库。 现在你可以开始添加文件，进行提交，创建分支等操作了。
3. git add .--来添加文件
4. git commit -m "word"[message] 可以是一些备注信息。 提交暂存区的指定文件到仓库区.
    此次的token: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
5. git branch -M main添加到哪个分区，一般是main
6. git remote add origin https://ywf154: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@github.com/ywf154/learning-System.git
    添加到云端.  远程仓库名为origin
7. git push --set-upstream origin main
    push推送，origin main：远程仓库的主分支
8. 这代表是将本地已存在的git项目的所有分支推送到的仓库。
