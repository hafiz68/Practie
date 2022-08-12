// const express = require ("express");
// const app = express();
// const cors = require ("cors");
// const routes = require('./routes');
const Funtask = require('./FunTask');

// app.use(cors());
// app.use(express.json());


// app.use("/", routes);
var inputArray = Funtask.inputArray;

var ShipDate;
var Shipments = [];
const Shipments1 = [];





for (let i = 0; i < inputArray.length + 1; i++) {
    var nDate = new Date(inputArray[i]?.orderDate);
    Dateofship = nDate.toLocaleDateString();
    if (!inputArray[i]) {
        let sum = 0;
        for (j = 0; j < Shipments.length; j++) {

            sum += Shipments[j].charges;
        }
        Shipments1.push({ "Date": ShipDate, "Count": Shipments.length, "Total Charges": sum, Shipments });
        //  Shipments.splice(0,Shipments.length)
        Shipments = [];
        Shipments.push({ code: inputArray[i]?.shipmentCode, charges: inputArray[i]?.shipmentCharges });
        ShipDate = Dateofship;



    }
    else if (!ShipDate) {
        Shipments.push({ code: inputArray[i].shipmentCode, charges: inputArray[i].shipmentCharges })
        ShipDate = Dateofship;
    }
    else if (Dateofship === ShipDate) {
        Shipments.push({ code: inputArray[i].shipmentCode, charges: inputArray[i].shipmentCharges })



    }
    else if (Dateofship !== ShipDate) {
        let sum = 0;
        for (j = 0; j < Shipments.length; j++) {

            sum += Shipments[j].charges;
        }
        Shipments1.push({ "Date": ShipDate, "Count": Shipments.length, "Total Charges": sum, Shipments });
        //  Shipments.splice(0,Shipments.length)
        Shipments = [];
        Shipments.push({ code: inputArray[i].shipmentCode, charges: inputArray[i].shipmentCharges });
        ShipDate = Dateofship;
    }
}

// app.listen(5000, ()=>{
//     console.log("Server is starting on port 5000");

// });


console.log(JSON.stringify(Shipments1))