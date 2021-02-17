import articles from '../data-source/articles.source.js';
import ArticleCollection from '../entity/article-collection.js';
import sample from "lodash.sample";

export default class ArticleCollectionFactory
{
    createRandomized() {
        let articleCollection = new ArticleCollection();
        let articleAddCount = Math.ceil(Math.random() * 8);
        
        for(let i = 0; i < articleAddCount; i++) {
            articleCollection.add(sample(articles), Math.ceil(Math.random() * 1500));
        }
        
        return articleCollection;
    }
}