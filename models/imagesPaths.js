const images = [
  "https://cdn4.vectorstock.com/i/1000x1000/01/28/buy-car-online-by-means-of-modern-smartphone-vector-18710128.jpg",
  "https://www.digitaldealer.com/wp-content/uploads/2018/05/red-car-in-shopping-cart.jpg",
  "https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2015/04/online-car-buying.jpg?itok=xlDLQJ9W",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQdn0JiM6rEkBJEdmoDIOoGi3fy6RTn1EOsc-u6eX6uRM2jdo9&usqp=CAU", 
  "https://dealerinspire1.s3.amazonaws.com/KDi-B-dqtiXrrVOyJy4%3D/CDy2BvBgoiXPo024/Vm3pWw%3D%3D/ASWoEPx9tijdt1O0PSg%3D/secc1.jpg",
  "https://dealerinspire1.s3.amazonaws.com/KDi-B-dqtiXrrVOyJy4%3D/CDy2BvBgoiXPo024/Vm3pWw%3D%3D/ASWoEPx9tijdt1O0PSg%3D/secc1.jpg",
  "https://www.geico.com/living/wp-content/uploads/GEICOMORE_DigitalDealership_GrahamMurdoch_600x400.jpg",
  "https://www.geico.com/living/wp-content/uploads/GEICOMORE_DigitalDealership_GrahamMurdoch_600x400.jpg",
  "https://www.onlinemarketplaces.com/ext/resources/2017/07/buy_a_car_online.jpg?height=488&t=1536947321&width=650",
  "https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/uploads/2018/02/online-shopping-platforms.jpg?itok=wkn0XDaL",
  "https://www.collectivelondon.com/images/case-studies/ctb/challenge--large.png",
  "https://2.bp.blogspot.com/-ajyPSDA7K9w/W_lYB8E1nnI/AAAAAAAABN8/u5Dz-CRsnKEMU2AYEb8bYEtD2_SproHBgCLcBGAs/s1600/top-15-best-online-car-buying-sites.PNG",
  "https://lh3.googleusercontent.com/proxy/wHVvseT3g9OGcm_brzvlkThX0aLk2ytlJ1mhOfOypYsux3fJJ5X5Pu-8AJfD4l5VPIDYOxgMwuUUhuEsLaR0ID0Gigce6gxY6yE8DgGyZLaB2VykgHOA05Pa-jN5ctcjxwk66xWeD-6H6ob3Wg"
];

const selectImg = () => {
    let path = images[Math.floor(Math.random()*images.length)];
    return path;
};
exports.randomImg = selectImg;



