var posts=["2023/12/26/hello-world/","2023/08/31/mybatis-plus/","2023/10/26/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };