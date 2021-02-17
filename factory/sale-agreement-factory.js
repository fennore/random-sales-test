import clients from '../data-source/clients.source.js';
import salespersons from '../data-source/salespersons.source.js';
import SaleAgreement from '../entity/sale-agreement.js';
import ArticleCollectionFactory from './article-collection-factory.js';
import sample from "lodash.sample";

export default class SaleAgreementFactory
{
    createRandomized() {
        let articleCollectionFactory = new ArticleCollectionFactory();
        return new SaleAgreement(
            this.#generateDelimitedRandomDate(),
            this.#pickRandomSalesPerson(),
            articleCollectionFactory.createRandomized(),
            this.#pickRandomClient()
        );
    }
    
    #pickRandomSalesPerson() {
        return sample(salespersons);
    }
    
    #pickRandomClient() {
        return sample(clients);
    }
    
    #generateDelimitedRandomDate(lowerBoundary = "1 January 2016", upperBoundary = "31 December 2020") {
        let from = (new Date(lowerBoundary)).getTime();
        let to = (new Date(upperBoundary)).getTime();
        return new Date(from + Math.random() * (to - from));
    }
}