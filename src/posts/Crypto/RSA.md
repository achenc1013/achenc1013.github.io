---
title: RSA解密
cover: 
icon: pen-to-square
date: 2025-02-23
category:
  - Crypto
tag:
  - CTF
  - 密码学
star: false
sticky: false
---
# 简述

结合网上大量的文献，省略部分繁琐的过程和工具的使用，更方便快捷的解出RSA加密。

<!-- more -->

### Kali终端 （注意带.pem文件）

```bash 
openssl rsa -pubin -text -modulus -in warmup -in pub.pem
```


得到：<br>
E= 65537 <br>
N= DD0289BC00E0C37B136A91B4071D0A398549F94CB885F756B73F9F3A14A1A56D

![image](/assets/images/RSA/1.png)

### 进制转换

将N值转换成10进制<br>
N= 99965623838843374711411183391444104726307314029768628656811347707805304989037

### Yafu工具

首先打开cmd，进入yafu所在路径<br>
输入：

```bash
yafu-64.exe factor(30578675145816634962204467309994126955968568987449100734690153203822106214253)
```

得到：<br>
P= 301421686937198008750983790559102741399<br>
Q= 331647085034301039007512063728344459163

![image](/assets/images/RSA/2.png)

### Python脚本

```python
# 从公钥里面提取n 和 e
with open('rsa_public_key.pem', 'r') as f:
    key = RSA.import_key(f.read())
e = key.e
n = key.n
print('e = %d\nn = %d' % (e, n))

# p q e 得 d
p = 301421686937198008750983790559102741399
q = 331647085034301039007512063728344459163
phi = (p - 1) * (q - 1)
d = inverse(e, phi)
print('d =', d)

key = rsa.PrivateKey(n, e, d, q, p)
with open("venus.en", "rb") as f:
    f = f.read()
    print(rsa.decrypt(f, key))
# e = 65537
# n = 86934482296048119190666062003494800588905656017203025617216654058378322103517
# d = 81176168860169991027846870170527607562179635470395365333547868786951080991441
# b'flag{decrypt_256}\n'

```

填入P、Q<br>
第一个open打开.pem<br>
第二个open打开.enc