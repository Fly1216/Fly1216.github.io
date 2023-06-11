var posts=["2023/05/17/Azkaban学习文档/","2023/05/28/DolphinScheduler学习文档/","2023/06/09/Spark调优笔记/","2021/12/10/可视化手册/","2023/06/09/国赛样题-离线部分整合版/","2023/03/12/电商例题文档/","2023/06/07/备忘录/","2023/02/27/读写HBase/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"安知鱼","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"杨文振","link":"#","avatar":"https://flyohh.cloud/blog_img/2023/05/17/646490296d48f.jpg","descr":"我自风情万种，与世无争"},{"name":"刘涛","link":"https://www.tianyancha.com/company/6044864872","avatar":"https://flyohh.cloud/blog_img/2023/05/17/6464907c3755b.jpg","descr":"习惯微笑"},{"name":"张贻辉","link":"#","avatar":"https://flyohh.cloud/blog_img/2023/05/17/646490ae68c67.jpg","descr":"不要巴望别人，一切都要靠自己💪"},{"name":"彭樟涛","link":"#","avatar":"https://flyohh.cloud/blog_img/2023/05/17/646490f446b87.jpg","descr":"不管你一天当中经历了什么，天黑了，我带你回家"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };