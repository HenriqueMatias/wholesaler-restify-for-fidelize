import fs from 'fs';
import assert from 'assert';
import {FileManager} from '../helper/FileManager';
import {OrderLayout} from '../layout/OrderLayout';


describe("Tests - FileManager", function() {
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
    
    describe('FileManager.construct', function() {
            it('should be a Array', function() { 
                let orderLayout = new OrderLayout(requisition); 
                let fileManager = new FileManager(orderLayout);
                assert(Array.isArray(fileManager.fileLines));
            });
            it('should have the right variables', function() { 
                let orderLayout = new OrderLayout(requisition); 
                let fileManager = new FileManager(orderLayout);
                assert(Array.isArray(fileManager.fileLines));
            });
    });
    describe('FileManager.saveFile', function () {
        it('should be created', function () {
            let orderLayout = new OrderLayout(requisition);
            let testFilePath= orderLayout.getFileName();
            let fileManager = new FileManager(orderLayout);
            fs.unlink(testFilePath);
            fileManager.completePath = testFilePath;
            fileManager.saveFile();
            fs.access(testFilePath, (err) => {
                if(err){
                    assert(false);
                }else{
                    fs.unlink(testFilePath);
                    assert(true);
                }
                console.log();
            });
        });
    
    });
});