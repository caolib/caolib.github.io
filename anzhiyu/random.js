var posts=["2023/07/28/C/","2024/02/18/Everything搜索常用技巧/","2024/02/19/Axios/","2023/08/31/Redis/","2024/03/18/apifox测试工具/","2024/03/25/git/","2023/08/31/linux命令/","2024/03/01/markdown从入门到上天/","2023/08/31/mybatis-plus/","2023/10/14/mybatis/","2024/03/16/nacos从入门到入土/","2023/07/28/mysql/","2024/03/27/npm-yarn/","2024/02/20/pinia-vue存储库/","2024/02/19/redis二次校验实现jwt“失效”/","2024/03/03/springboot发送邮件/","2024/01/07/springboot相关配置/","2024/03/17/springcloud从入门到放弃/","2024/03/19/windows定时关机/","2024/03/08/使用shields给仓库生成技术栈标签/","2023/10/26/计算机网络/","2023/07/28/操作系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };