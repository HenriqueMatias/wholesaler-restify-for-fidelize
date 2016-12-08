
export class OrderLayout {

    constructor(name, obj) {
        this.fileName = name;
        this.itensLength = 0;
        this.lineList = [];
        this.lineFooterCode = '9';
        this.obj = obj;
        this.process();
    }
    processHeader() {
        let resolve = function (resolve, reject) {
            this.lineList.push(
                [
                    this.obj.order.pos_code,
                    this.obj.order.email,
                    this.obj.order.wholesaler_code,
                    this.obj.order.term,
                    this.obj.order.condition_code,
                    this.obj.order.order_client,
                    this.obj.id,
                    this.obj.order.markup
                ]
            );
        }
        return new Promise(resolve.bind(this));
    }
    processBody() {
        let resolve = function () {
            for (let i in this.obj.order.itens) {
                let item = this.obj.order.itens[i];
                let product = [
                    item.ean,
                    item.amount,
                    item.discount,
                    item.net_price
                ]
                this.lineList.push(product);
                this.itensLength++
            }
        }
        return new Promise(resolve.bind(this));
    }
    processFooter() {
        let resolve = function () {
            this.lineList.push(
                [
                    this.lineFooterCode,
                    this.itensLength
                ]
            );
        };
        return new Promise(resolve.bind(this));
    }
    process() {
        this.processHeader()
            .then(this.processBody()
                .then(this.processFooter()));
    }
    getLines() {
        return this.lineList;
    }
    getFileName() {
        return this.fileName;
    }
}