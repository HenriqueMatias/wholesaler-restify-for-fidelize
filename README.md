json utilizado na requisição

{
  "id": 12345,
  "wholesaler": "santacruz",
  "industry": "gsk",
  "layout": "1.0",
  "order": {
    "project_code": "GSK",
    "pos_code": "88888888888888",
    "email": "teste@teste.com",
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
}