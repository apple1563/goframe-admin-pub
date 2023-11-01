#!/bin/bash
name="goframe-admin"
#设置操作权限
chmod +x ./$name
# 停止正在运行的程序
echo "停止正在运行的程序..."
pkill -f $name



