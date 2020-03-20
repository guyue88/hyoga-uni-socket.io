## @hyoga/uni-socket

项目源自：[weapp.socket.io](https://github.com/10cella/weapp.socket.io)，该项目作者已经两年没有维护，出现bug无法修复。

最近需要在uni-app中用到socket.io，遇到bug没有人修复很是头疼，所以基于weapp.socket.io新起一个项目。

### 介绍

重写socket.io-client的engin.io-client处理件，h5依旧使用原生WebSocket，APP与小程序使用uni-app的WebSocket协议，所以h5端任然可以支持长轮询等方式，APP与小程序只能支持WebSocket协议。

### 安装

```
npm i @hyoga/uni-socket.io --save
// yarn add @hyoga/uni-socket.io
```

### 使用

与[socket.io-client](https://github.com/socketio/socket.io-client)完全相同，参考其写法即可。

### API

参考[官网API](https://socket.io/docs/client-api/)