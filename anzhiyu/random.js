var posts=["2023/05/17/Azkaban学习文档/","2021/12/10/可视化手册/","2023/02/27/读写HBase/","2023/03/12/电商例题文档/","2023/05/25/国赛试题技术点/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};