export default function About() {
  return (
    <div className="About">
      <div class="about-header">
        <div class="about-header-img">
          <img
            src="https://gamerwall.pro/uploads/posts/2022-03/thumbs/1648681051_7-gamerwall-pro-p-fon-muzhskoi-s-mashinoi-krasivie-8.jpg"
            alt=""
          />
        </div>
        <div class="about-header-text">
          {" "}
          <h1>
            Our store is one of the largest auto centers on the Eurasian
            continent and meets the highest standards and requirements for car
            dealers around the world.
          </h1>
        </div>
      </div>
      <div class="about-main">
        <div class="about-main-img">
          <img
            src="https://damion.club/uploads/posts/2022-09/1663926489_1-damion-club-p-fon-avtomobilnii-vkontakte-3.jpg"
            alt=""
          />
        </div>
        <div className="about-main-text">
          <h1>
            Our collections reflect our passion for cars and mobility. Our
            knowledge and experience in both these areas is reflected in the
            design, materials and finishes of our products. After all, this is
            the only way driving pleasure can become your constant companion -
            on special occasions, in sports, or in everyday life.
          </h1>
        </div>
      </div>
      <div class="about-main-future">
        <div class="container">
          <h1>
            The engine of the future will be powered by electricity. And the
            future starts here and now. We invite you to take a glimpse at the
            innovations that will define our mobility. In doing so, we span the
            spectrum from today’s technologies to hydrogen and upcoming
            technologies. This electric future offers tremendous opportunities
            for a greener and more sustainable society.
          </h1>
        </div>
      </div>

      <nav>
        <a href="#page-1">1</a>
        <a href="#page-2">2</a>
        <a href="#page-3">3</a>
      </nav>
      <scroll-container>
        <scroll-page id="page-1">
          <div className="scroll-page-news">
            <div className="scroll-page-news-text">
              <h3></h3>
              <span>China is not only the world’s largest automobile market, with annual sales north of 20 million units a year placing it well ahead of the former champion, the United States. It is also the world’s largest electric car market, with more than 1.2 million units sold in 2019. Overall, more than 3.4 million battery electric vehicles – or BEVs – can be found on Chinese roads, or more than 45 percent of all BEVs worldwide. And that number is only set to grow. In June 2020 alone, more than 88,000 brand new BEVs hit the roads of the Chinese mainland. The impressive growth is in part spurred by Chinese policy ambitions, which actively push for greener energy solutions to environmental challenges caused primarily by growing urbanization. This in turn has paved the way for an overall goal by Chinese authorities to have BEVs take up a 30 percent market share by 2030.</span>
            </div>
            <div className="scroll-page-news-img">
              <img src="https://content2.rozetka.com.ua/goods/images/big/19784994.jpg" alt="" />
            </div>

          </div>
        
        </scroll-page>
        <scroll-page id="page-2">2</scroll-page>
        <scroll-page id="page-3">3</scroll-page>
      </scroll-container>
    </div>
  );
}
