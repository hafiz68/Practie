const inputArray = [
        {
            "id": 1,
            "shipmentCode": "NA001-001",
            "cbvNo": "NA001",
            "orderDate": "2021-07-05T10:23:03.361Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": null,
            "referralCode": "REF-NA001-001",
            "active": true,
            "paid": false,
            "buynship": true,
            "transactionId": null,
            "shipmentCharges": 0,
            "userId": 4,
            "shipmentStatusId": 3,
            "receiverId": 2
        },
        {
            "id": 2,
            "shipmentCode": "AC002-002",
            "cbvNo": "AC002",
            "orderDate": "2021-07-05T11:04:08.953Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": "PLANE",
            "referralCode": "REF-AC002-002",
            "active": true,
            "paid": false,
            "buynship": true,
            "transactionId": "IUYI7656YU",
            "shipmentCharges": 13,
            "userId": 4,
            "shipmentStatusId": 3,
            "receiverId": 3
        },
        {
            "id": 3,
            "shipmentCode": "CO003-003",
            "cbvNo": "CO003",
            "orderDate": "2021-07-05T11:20:31.264Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": "SHIP",
            "referralCode": "REF-CO003-003",
            "active": true,
            "paid": true,
            "buynship": true,
            "transactionId": "IUYI7656YU",
            "shipmentCharges": 5.9,
            "userId": 4,
            "shipmentStatusId": 5,
            "receiverId": 4
        },
        {
            "id": 5,
            "shipmentCode": "NA004-001",
            "cbvNo": "NA004",
            "orderDate": "2021-07-06T11:01:30.858Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": null,
            "referralCode": "REF-NA004-001",
            "active": true,
            "paid": false,
            "buynship": true,
            "transactionId": null,
            "shipmentCharges": 0,
            "userId": 11,
            "shipmentStatusId": 3,
            "receiverId": 6
        },
        {
            "id": 6,
            "shipmentCode": "NA005-001",
            "cbvNo": "NA005",
            "orderDate": "2021-07-06T11:07:43.714Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": null,
            "referralCode": "REF-NA005-001",
            "active": true,
            "paid": false,
            "buynship": true,
            "transactionId": null,
            "shipmentCharges": 0,
            "userId": 13,
            "shipmentStatusId": 3,
            "receiverId": 7
        },
        {
            "id": 7,
            "shipmentCode": "AC006-002",
            "cbvNo": "AC006",
            "orderDate": "2021-07-07T12:02:47.241Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": "PLANE",
            "referralCode": "REF-AC006-002",
            "active": true,
            "paid": false,
            "buynship": false,
            "transactionId": null,
            "shipmentCharges": 33,
            "userId": 11,
            "shipmentStatusId": 1,
            "receiverId": 6
        },
        {
            "id": 8,
            "shipmentCode": "CO007-003",
            "cbvNo": "CO007",
            "orderDate": "2021-07-08T16:16:17.976Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": "SHIP",
            "referralCode": "REF-CO007-003",
            "active": true,
            "paid": false,
            "buynship": false,
            "transactionId": null,
            "shipmentCharges": 28.85,
            "userId": 11,
            "shipmentStatusId": 1,
            "receiverId": 6
        },
        {
            "id": 9,
            "shipmentCode": "AC008-004",
            "cbvNo": "AC008",
            "orderDate": "2021-07-08T16:16:46.119Z",
            "placeOfTransaction": "UK",
            "placeOfDestination": "Kenya",
            "courierType": "PLANE",
            "referralCode": "REF-AC008-004",
            "active": true,
            "paid": true,
            "buynship": false,
            "transactionId": "Helo",
            "shipmentCharges": 33,
            "userId": 11,
            "shipmentStatusId": 1,
            "receiverId": 6
        }
    ]

module.exports = {
    inputArray
}
