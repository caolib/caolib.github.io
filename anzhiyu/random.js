var posts=["2024/02/18/Everything搜索/","2024/02/19/Axios/","2023/08/31/Redis/","2023/07/28/C/","2024/03/18/apifox测试工具/","2024/03/01/markdown使用/","2024/03/25/git/","2023/10/14/mybatis/","2023/08/31/mybatis-plus/","2024/03/16/nacos从/","2024/12/26/openfeign/","2023/07/28/mysql/","2024/02/20/pinia-vue存储库/","2024/03/08/shields.io标签/","2024/02/19/redis二次校验实现jwt“失效”/","2024/12/25/springboot发送邮件/","2024/03/17/springcloud从入门到放弃/","2024/03/19/windows定时关机/","2023/07/28/操作系统/","2023/10/26/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };