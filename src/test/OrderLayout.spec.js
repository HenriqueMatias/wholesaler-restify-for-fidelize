import assert from 'assert';
import {OrderLayout} from '../layout/OrderLayout';

describe("Tests - OrderLayout", function() {

    var requisition = {
        "id": 12345,
        "wholesaler": "santacruz",
        "industry": "gsk",
        "layout": "1.0",
        "order": {
            "project_code": "GSK",
            "pos_code": "88888888888888",
            "email": "buda@teste.com",
            "wholesaler_code": "99999999999999",
            "term": "007",
            "condition_code": "TX",
            "order_client": "S23333123DB",
            "markup": "6",
            "itens": [
                {
                    "ean": "7890000000001",
                    "amount": 1,
                    "monitored": false,
                    "discount": 10.5,
                    "net_price": 12.50
                },
                {
                    "ean": "7890000000002",
                    "amount": 2,
                    "monitored": false,
                    "discount": 0.5,
                    "net_price": 10
                }
            ]
        }
    };
    describe('Test OrderLayout.getFileName function', function() {
            it('should return same name of rule', function() {
                let order = new OrderLayout(requisition);
                let rule = [
                    'PEDIDO',
                    requisition.id,
                    requisition.order.wholesaler_code,
                    requisition.order.project_code
                ];
                let answer = rule.join('_') + '.PED';
                assert.equal(order.getFileName().split(".").slice(0,2).join(".") , answer);
            });
    });
    describe('Test OrderLayout.process function', function () {
        it('after execute, the first item of lines should be a array with values of requisition order atribute', function () {
            let orderLayout = new OrderLayout(requisition);
            let expectedOrder = requisition.order;
            let expected = [
                expectedOrder.pos_code,
                expectedOrder.email,
                expectedOrder.wholesaler_code,
                expectedOrder.term,
                expectedOrder.condition_code,
                expectedOrder.order_client,
                requisition.id,
                expectedOrder.markup
            ];
            let orderHeader = orderLayout.getLines();
            assert.deepEqual(orderHeader[0], expected);
        });
    });

    describe('Test OrderLayout.process function', function () {
        it('after execute, the first item of lines should be a array with values of requisition order atribute', function () {
            let orderLayout = new OrderLayout(requisition);
            let expectedOrder = requisition.order;
            let expected = [
                expectedOrder.pos_code,
                expectedOrder.email,
                expectedOrder.wholesaler_code,
                expectedOrder.term,
                expectedOrder.condition_code,
                expectedOrder.order_client,
                requisition.id,
                expectedOrder.markup
            ];
            let lines = orderLayout.getLines();
            assert.deepEqual(lines[0], expected);
        });
    });
    describe('Test OrderLayout.process function', function () {
        it('first item of order should have the rigth structure', function () {
            let orderLayout = new OrderLayout(requisition);
            let expectedOrder = requisition.order;
            let expected = [
                "7890000000001",
                 1,
                10.5,
                12.50
            ];
            let lines = orderLayout.getLines();
            assert.deepEqual(lines[1], expected);
        });
    });
});