import SaleAgreementFactory from './factory/sale-agreement-factory.js';

let saleAgreementFactory = new SaleAgreementFactory();
let agreementList = [];
let agreementCount = 100 + Math.floor(Math.random() * 101);

for(let i = 0; i < agreementCount; i++) {
    agreementList.push(
        saleAgreementFactory.createRandomized()
    );
}

console.log(JSON.stringify(agreementList))