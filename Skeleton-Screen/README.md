<!--
 * @Author: your name
 * @Date: 2021-01-23 21:38:39
 * @LastEditTime: 2021-01-23 22:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Treasure-Bag/Skeleton-Screen/README.md
-->
# Skeleton Screen

💁‍♂️ [项目预览](https://hymanchoi.github.io/Treasure-Bag/Skeleton-Screen/index.html)

### 项目介绍

CSS骨架屏

### 相关知识

1. CSS Background  
2. CSS Animation  
3. @keyframes

### 关键代码

```
// style.css

.loading .image,
.loading h4 {
  background-color: var(--loading-grey);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 120%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
```