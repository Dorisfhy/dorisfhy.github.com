---
layout: post
category : work
tagline: "MongoDB在MacOX下的简单安装"
tags : [MongoDB]
---
{% include JB/setup %}


## {简单了解} 

*  官方地址： [mongoDB](http://www.mongodn.org) 
*  什么是mongoDB？
	* 由C++语言编写的开源数据库系统。
	* 高性能、易部署、易使用，存储数据非常方便
	* 基于分布式文件存储的数据库。
* 主要功能特性有：
	* 面向集合存储，易存储对象类型的数据。
	* 模式自由。
	* 支持动态查询。
	* 支持完全索引，包含内部对象。
	* 支持查询。
	* 支持复制和故障恢复。
	* 使用高效的二进制数据存储，包括大型对象（如视频等）。
	* 自动处理碎片，以支持云计算层次的扩展性
	* 支持Python，PHP，Ruby，Java，C，C#，Javascript，Perl及C++语言的驱动程序，社区中也提供了对Erlang及.NET等平台的驱动程序。
	* 文件存储格式为BSON（一种JSON的扩展）。
	* 可通过网络访问。


## {安装}
* 从官方网站下载最新版本 ，[点击这里](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) 
* 本人使用的是manual安装方法
	1. 在远程终端 输入 <strong>curl -O http://downloads.mongodb.org/osx/mongodb-osx-x86_64-2.4.9.tgz </strong> 进行下载；
	2. 解压你刚才下载的压缩包 <strong>tar -zxvf mongodb-osx-x86_64-2.4.9.tgz</strong>
	3. 在根目录新建文件夹 /data/db 输入命令行 : <strong>sudo mkdir -p /data/db </strong> 
	4. 给计算机里/data文件夹授权 ，输入命令行：<strong>sudo chown -R 你的计算机名字 /data</strong>
	5. 启动mongo服务：
	    - 首先找到安装包下的bin文件，例如我的 cd mongodb-osx-x86_64-2.4.9/bin ；之后在bin文件夹输入./mongod 启动mongoDB的服务 ；
	6. 再重新打开另一个终端，同样进入在安装包下的bin文件，输入./mongo 链接服务端
	

## 更多链接
* [http://www.w3cschool.cc/mongodb/mongodb-connections.html](http://www.w3cschool.cc/mongodb/mongodb-connections.html)
* [http://api.mongodb.org/js/](http://api.mongodb.org/js/)
* [Install MongoDB on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)	
