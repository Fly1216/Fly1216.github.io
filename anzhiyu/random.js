var posts=["2023/04/26/Hudi学习文档1/","2021/12/10/可视化手册/","2023/04/27/Hudi学习文档3/","2023/04/26/Hudi学习文档2/","2023/03/12/电商例题文档/","2023/02/27/读写HBase/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};