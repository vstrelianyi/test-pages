import React from "react";
import foodPageArticlesData, {
  getArticlesMap
} from "../FoodPageContent/FoodPageContent/FoodPafeArticles/foodPageArticlesData";
import ArticleContent from "./Article/ArticleContent/ArticleContent";
import ArticleSideBar from "./Article/ArticleSideBar/ArticleSideBar";

import "./singlearticlepage.css";

const SingleArticlePage = ({
  match,
  articlesMap = getArticlesMap(foodPageArticlesData)
}) => {
  return (
    <div className="articlePage">
      <div className="article-intro">
        <img
          className="article-img"
          src={articlesMap[match.params.article].image}
          alt={articlesMap[match.params.article].title}
        />
        <div className="article-title">
          <div className="main-article-title">
            {articlesMap[match.params.article].title}
          </div>
          <span>Home ></span>
          <span>Foods ></span>
          <span>{articlesMap[match.params.article].category} ></span>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="article">
          <ArticleSideBar />

          <ArticleContent
            image2={articlesMap[match.params.article].image2}
            subTitle1={articlesMap[match.params.article].subTitle1}
            subTitle2={articlesMap[match.params.article].subTitle2}
            p1={articlesMap[match.params.article].p1}
            p2={articlesMap[match.params.article].p2}
            author={articlesMap[match.params.article].author}
          />
        </div>
      </div>
    </div>
  );
};

// const SingleArticlePage = ({ foodPageArticlesData, id, location, match, history }) => {

//     const filterById = id ? (article) => article.id === id : Boolean;
// console.log(location, match, history)

//     return (
//         <div >
//             {foodPageArticlesData.filter(filterById).map(({
//                 id,
//                 image,
//                 image2,
//                 category,
//                 year,
//                 title,
//                 author,
//                 subTitle1,
//                 subTitle2,
//                 p1,
//                 p2,
//             }) => (
//                     <Article key={id}
//                     {...{id, image, image2, category, year, title,
//                         author,
//                         subTitle1,
//                         subTitle2,
//                         p1,
//                         p2,}} />
//                 ))

//             }
//         </div>
//     )
// }

export default SingleArticlePage;
