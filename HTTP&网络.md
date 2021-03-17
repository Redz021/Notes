# HTTP状态码

## GET

- 200（OK） - 表示已在响应中发出

- 204（无内容） - 资源有空表示
- 301（Moved Permanently） - 资源的URI已被更新
- 303（See Other） - 其他（如，负载均衡）
- 304（not modified）- 资源未更改（缓存）
- 400 （bad request）- 指代坏请求（如，参数错误）
- 404 （not found）- 资源不存在
- 406 （not acceptable）- 服务端不支持所需表示
- 500 （internal server error）- 通用错误响应
- 503 （Service Unavailable）- 服务端当前无法处理请求

## POST

- 200（OK）- 如果现有资源已被更改

- 201（created）- 如果新资源被创建
- 202（accepted）- 已接受处理请求但尚未完成（异步处理）
- 301（Moved Permanently）- 资源的URI被更新
- 303（See Other）- 其他（如，负载均衡）
- 400（bad request）- 指代坏请求
- 404 （not found）- 资源不存在
- 406 （not acceptable）- 服务端不支持所需表示
- 409 （conflict）- 通用冲突
- 412 （Precondition Failed）- 前置条件失败（如执行条件更新时的冲突）
- 415 （unsupported media type）- 接受到的表示不受支持
- 500 （internal server error）- 通用错误响应
- 503 （Service Unavailable）- 服务当前无法处理请求

## PUT

- 200 （OK）- 如果已存在资源被更改

- 201 （created）- 如果新资源被创建
- 301（Moved Permanently）- 资源的URI已更改
- 303 （See Other）- 其他（如，负载均衡）
- 400 （bad request）- 指代坏请求
- 404 （not found）- 资源不存在
- 406 （not acceptable）- 服务端不支持所需表示
- 409 （conflict）- 通用冲突
- 412 （Precondition Failed）- 前置条件失败（如执行条件更新时的冲突）
- 415 （unsupported media type）- 接受到的表示不受支持
- 500 （internal server error）- 通用错误响应
- 503 （Service Unavailable）- 服务当前无法处理请求

## DELETE

- 200 （OK）- 资源已被删除

- 301 （Moved Permanently）- 资源的URI已更改
- 303 （See Other）- 其他，如负载均衡
- 400 （bad request）- 指代坏请求
- 404 （not found）- 资源不存在
- 409 （conflict）- 通用冲突
- 500 （internal server error）- 通用错误响应
- 503 （Service Unavailable）- 服务端当前无法处理请求

# 缓存

## HTTP缓存

当客户端向服务器请求资源时，会**先检查浏览器缓存**，如果浏览器有当前请求资源的副本，则直接从浏览器缓存中提取资源。

常见的HTTP缓存**只能缓存GET请求响应的资源**。第一次请求时，服务器返回资源，在response header中回传资源的缓存参数；第二次请求时，浏览器判断这些请求参数，命中强缓存就直接200，否则将请求参数加到request header中传给服务器，若命中协商缓存则返回304，否则返回新的数据。

### 强制缓存

利用响应头中的Expires或Cache-Control来控制。

**Expires**：缓存过期时间，用来指定资源到期的时间，是服务端具体的时间点。

绝对时间

**Cache-Control**：相对时间，与Expires同时启用时Cache-Control优先级较高。

### 协商缓存

若未命中强缓存，则浏览器会将请求发送至服务器，服务器根据http头信息中的Last-Modify/If-Modify-Since或ETag/If-None-Match来判断是否命中协商缓存。如果命中，则http返回码为304，浏览器从缓存中加载资源。

**Last-Modify/If-Modify-Since**

浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，Last-Modify是一个时间，表示该资源的最后修改时间。

当浏览器再次请求该资源时，发送的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存。

如果命中缓存，则返回http304，并且不会返回资源内容，并且不会返回Last-Modify。

由于对比的服务端时间，所以客户端与服务端时间差距不会导致问题。但是有时候通过最后修改时间来判断资源是否修改还是不太准确（资源变化了最后修改时间也可以一致）。于是出现了ETag/If-None-Match。

**ETag/If-None-Match**

与Last-Modify/If-Modify-Since不同的是，Etag/If-None-Match返回的是一个校验码（ETag: entity tag）。ETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化*。ETag值的变更则说明资源状态已经被修改。服务器根据浏览器上发送的If-None-Match值来判断是否命中缓存。

## 总结:

浏览器第一次请求：

![img](https://images2018.cnblogs.com/blog/940884/201804/940884-20180423141945261-83532090.png)

 

浏览器再次请求时：

[![img](https://images2018.cnblogs.com/blog/940884/201804/940884-20180423141951735-912699213.png)](http://jbcdn2.b0.upaiyun.com/2016/07/c55ff974d09c5b729c795cb7fe7d5950.png)

# GET和POST的区别

| GET                  | POST                                                        |
| -------------------- | ----------------------------------------------------------- |
| 参数依靠url附带query | 参数来自表单提交，数据编码到请求体body中，url中也可传递参数 |
|                      |                                                             |
|                      |                                                             |
|                      |                                                             |
|                      |                                                             |

# OSI七层模型

## 物理层

物理线路、光纤、中继器、集线器、双绞线

* 管理通信设备和网络媒体之间的互联互通。传输比特流。

## 数据链路层

以太网、网卡、交换机、PPTP、L2TP、ARP、ATMP

**提供访问介质和链路管理**

* 接收来自物理层的比特流数据，封装成帧，传送到网络层；

* 将网络层的数据帧拆分为比特流形式的数据转发到物理层；

* 负责建立和管理节点之间的链路，通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路。

## 网络层

IP、ICMP、RIP、IGMP、OSPF

**IP选址及路由选择**

* 通过路由选择算法，为报文或通信子网选择最适合的路径。
* 控制数据链路层与传输层之间的信息转发，建立、维持和终止网络的链接。
* 数据帧在这一层被转换为数据包，然后通过路径选择、分段组合、顺序、进出路由等控制，将信息从一个网络设备传送到另一个网络设备。

## 传输层

TCP、UDP

**数据通信**

建立主机端到端的链接，为会话层和网络层提供端到端可靠的和透明的数据传输服务，确保数据能完整的传输到网络层。

## 会话层

SSL、TLS、DAP、LDAP

**创建、管理和维护会话**

接收来自传输层的数据，负责建立、管理和终止表示层实体之间的通信会话，支持它们之间的数据交换。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。

## 表示层

LPP、NBSSP

**数据编码、格式转换、数据加密**

提供各种用于应用层数据的编码和转换功能，确保一个系统的应用层发送的数据能被另一个系统的应用层识别。如果必要，该层可提供一种标准表示形式，用于将计算机内部的多种数据格式转换成通信中采用的标准表示形式。数据压缩和加密也是表示层可提供的转换功能之一。

## 应用层

HTTP、FTP、SMTP、POP3、TELNET、NNTP、IMAP4、FINGER

**为应用程序或用户提供各种请求服务**

OSI参考模型最高层，也是最靠近用户的一层，为计算机用户，各种应用程序以及网络提供接口，也为用户直接提供各种网络服务。

