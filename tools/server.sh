#!/bin/sh

# __readINI [配置文件路径 + 名称] [节点名] [键值]
function __readINI() {
 INIFILE=$1; SECTION=$2; ITEM=$3
 _readIni=`awk -F '=' '/\['$SECTION'\]/{a=1}a==1&&$1~/'$ITEM'/{print $2;exit}' $INIFILE`
echo ${_readIni}
}

# 获取服务器 IP Address
_IP=( $( __readINI tools/config.ini SERVER ip ) )

# 获取服务器线上 Nginx 配置路径
_NGINX_PATH=( $( __readINI tools/config.ini SERVER path ) )

# 获取服务器备份 Nginx 配置路径
_NGINX_BACKUP_PATH=( $( __readINI tools/config.ini SERVER backup_path ) )

# 获取服务器登陆 Role
_ROLE=( $( __readINI tools/config.ini SERVER role ) )

# 获取本地项目路径
_LOCAL_PATH=( $( __readINI tools/config.ini LOCAL path ) )

# 进入本地项目文件夹
cd ${_LOCAL_PATH}

# 构建本地项目文件
sh tools/build.sh true

# 访问线上服务并清空当前文件夹
ssh ${_ROLE}@${_IP} "rm -rf ${_NGINX_BACKUP_PATH}/* ; cp -r ${_NGINX_PATH}/. ${_NGINX_BACKUP_PATH} ; cd ${_NGINX_PATH} ; rm -rf * ;"

# 将 dist 打包上传到服务器中
scp -r _book/* ${_ROLE}@${_IP}:${_NGINX_PATH}