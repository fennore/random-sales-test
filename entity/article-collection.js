export default class ArticleCollection
{
    #articleList = [];
    #articleCount = [];
    #totalPrice = 0;
    
    add(article, count) {
        if(!this.#articleList[article.id]) {
            this.#articleList[article.id] = article;
            this.#articleCount[article.id] = 0;
        }

        this.#articleCount[article.id] += count;
        this.#totalPrice += count * article.price;
    }
    
    get totalPrice() {
        return this.#totalPrice;
    }
    
    toJSON() {
        return Object.values(this.#articleList).map((article) => {
            return {
                name: article.name,
                price: article.price,
                amount: this.#articleCount[article.id]
            }
        }, this);
    }
}

