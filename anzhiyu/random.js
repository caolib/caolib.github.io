var posts=["2024/02/19/Axios/","2024/02/18/Everything搜索常用技巧/","2023/08/31/Redis/","2023/07/28/C/","2024/01/07/SpringBoot相关配置/","2023/07/28/git/","2023/08/31/linux命令/","2023/08/31/mybatis-plus/","2023/07/28/mysql/","2023/10/14/mybatis/","2024/02/20/pinia-vue存储库/","2024/02/19/redis二次校验实现jwt“失效”/","2023/07/28/操作系统/","2024/03/03/springboot发送邮件/","2023/10/26/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };