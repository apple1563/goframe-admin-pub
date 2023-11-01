#!/bin/bash

# Go 可执行文件名
name="goframe-admin"
# 日志文件名
logFile="output_$(date '+%Y%m%d_%H%M%S').log"
errorFile="error_$(date '+%Y%m%d_%H%M%S').log"  # 新增的错误日志文件名
configFile="config.prod.yaml"

# 执行发布流程
echo "Fetching latest code..."
git fetch --all
git reset --hard origin/master

#设置操作权限
chmod +x ./$name

# 停止正在运行的程序
echo "停止正在运行的程序..."
pkill -f $name
sleep 2  # 等待程序停止

# 启动 Go 程序并将输出重定向到日志文件
echo "启动 Go 程序..."
nohup ./$name --gf.gcfg.file=$configFile > $logFile 2> $errorFile &

# 如果你想在脚本中输出错误信息，可以使用 cat 命令
cat $errorFile

# 打印进程 ID
echo "Go 程序已在后台运行，进程 ID：$!"

