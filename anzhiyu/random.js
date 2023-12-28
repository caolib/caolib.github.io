var posts=["2023/07/28/C/","2023/08/31/Redis/","2023/08/31/linux命令/","2023/07/28/git/","2023/08/31/mybatis-plus/","2023/10/14/mybatis/","2023/07/28/mysql/","2023/07/28/操作系统/","2023/10/26/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };