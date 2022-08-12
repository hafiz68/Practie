// // [
// //   {
// //     Date: "7/5/2021",
// //     Count: 3,
// //     "Total Charges": 18.9,
// //     Shipments: [
// //       { code: "NA001-001", charges: 0 },
// //       { code: "AC002-002", charges: 13 },
// //       { code: "CO003-003", charges: 5.9 },
// //     ],
// //   },
// //   {
// //     Date: "7/6/2021",
// //     Count: 2,
// //     "Total Charges": 0,
// //     Shipments: [
// //       { code: "NA004-001", charges: 0 },
// //       { code: "NA005-001", charges: 0 },
// //     ],
// //   },
// //   {
// //     Date: "7/7/2021",
// //     Count: 1,
// //     "Total Charges": 33,
// //     Shipments: [{ code: "AC006-002", charges: 33 }],
// //   },
// //   {
// //     Date: "7/8/2021",
// //     Count: 2,
// //     "Total Charges": 61.85,
// //     Shipments: [
// //       { code: "CO007-003", charges: 28.85 },
// //       { code: "AC008-004", charges: 33 },
// //     ],
// //   },
// // ];

// // const myArr = ['a', 'b', 'b', 'b', 'c'];

// // const counts = {};
// // myArr.forEach((x) => {
// //   counts[x] = (counts[x] || 0) + 1;
// // });
// // console.log(counts)

// // sorting and counting of duplication

// // const arr=[48,48,1,48,5,7,7,27,7,31,31,25,25,];
// //  const arr1 =[];
// //  var vari=0;
// //  var sum1=1;
// // for(let i=0;i<arr.length;i++)
// // {
// //   for(let j=0;j<arr.length;j++)

// //   if(arr[i]<arr[j]){
// //     let sum=0;
// //   sum= arr[i];
// //     arr[i]= arr[j];
// //     arr[j]= sum;
// //   }
// // }
// // for(let k=0; k<arr.length+1; k++){

// //     if(vari==arr[k]){
// //       delete   arr[k]
// //       sum1 +=1;
// //     }
// //     else if(!vari){
// //         vari = arr[k]
// //     }
// //         else{

// //     arr1[arr1.length] = { value:vari , totalCount: sum1};
// //        sum1 = 1;
// //        vari= arr[k];}
// // }

// // const filtered = arr.filter(Boolean);
// // console.log(filtered[filtered.length-2]);

// // minimum

// // const arr=[48,48,1,48,5,7,7,27,7,31,31,25,25,];
// // let sum = arr[0];
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]< sum){
// //         sum = arr[i]
// //     }

// // }
// // console.log(sum)

// //----- swapping ----

// // let a = 9;
// // let b = 17;

// // a = a+b;

// // b= a-b;

// // a = a-b;

// // console.log ({a, b})

// // var target =[1,2,5,6,7,8,9]
// // var nums = 9;

// //     var i = 0;
// // while (target[i] == nums) {
// //     var arr = 0;
// //     console.log(target[i])
// //      arr = target[i];
// //      i ++;
// //      console.log(arr);
// // }

// // var array = [1,2,3,4,6,7,8,9,5,5,6,4];
// // let i = 0;
// // let arrayLength = array.length;
// // for(i; i< arrayLength; i++){
// //     if(array[i] == 9){
// //         let num = 0;
// //         num = array.indexOf(array[i])
// //         console.log(num)
// //         return num;
// //     }
// //     else{

// //     }
// // }

var twoSum = function (nums, target) {
  let i = 0;
  for (let j = 0; true; j++) {
    if (i !== j && nums[i] + nums[j] === target) {
      return [i, j];
    }
    if (j === nums.length) {
      j = 0;
      i++;
    }
  }
};
// // console.log(twoSum([3,3], 6))

// // let arr = [1,2,2,2,3,4,5,6,6,66,6]

// // let sum = 0 ;

// // sum = arr[0]
// // arr[0] = arr[arr.length-2];
// // arr[arr.length-2] = sum;

// // console.log(arr)

// // let num = 123;

// // for(const e in num){
// //     console.log(`${e}: ${object[e]}`)
// // }

// // let num = 12321;
// // let variable = `${num}`;
// // let ans = true;
// // let i =0;
// // let j = variable.length-1
// // for(const x of variable){

// //     console.log(variable[i]);
// //     console.log(variable[j]);
// //     if(variable[i] != variable[j]){
// //         ans = false
// //         return ans;
// //     }
// //     else if(i == j) {
// //         console.log(ans)
// //         return ans;
// //     }
// //     i++;
// //     j--;
// // }

// // let x = 88888

// // let variable = `${x}`;
// // let ans = true;
// // let i =0;
// // let j = variable.length-1
// // for(const x of variable){
// //     if (variable.length == 2 && variable[i] === variable[j]){
// //         return ans;
// //     }
// //      if (variable.length < 2 ){
// //         return ans;
// //     }
// //     else if(variable[i] != variable[j]){
// //         ans = false
// //         return ans;
// //     }
// //     else if(j < i) {
// //         console.log(ans)
// //         return ans;
// //     }

// //     i++;
// //     j--;
// // }

// // let x = 1234

// // let variable = `${x}`;
// // let arr = variable.split('')
// // let arr1 = [];

// //     for(let i=0;i<arr.length;i++)
// // {
// //     if(-231 <= x <= 231 - 1){
// //         return 0;
// //     }
// //     else if(arr[0] == '-'){
// //         arr1[arr1.length]= arr[i]
// //         for(let j= arr.length-1;j>0;j--){
// //             arr1[arr1.length]= arr[j]

// //             }

// //             console.log(arr1.join(''))
// //             return arr1;
// //     }
// //     else{
// //         for(let j= arr.length-1;j> -1;j--){
// //             arr1[arr1.length]= arr[j]

// //             }
// //             console.log(arr1.join('')
// //             )

// //             return arr1

// // }}

// // console.log(arr1)

// // let arr = [ 'PersonID', 'LastName', 'FirstName', 'Address', 'City' ];
// // let arr1 = [];
// // for(i=0; i<arr.length; i++){
// //     arr1.push(arr[i])
// // }
// // let object = Object.assign({}, arr1);
// // let vari = []
// // for (const property in object) {
// //     vari.push(`'${object[property]}'`)

// //   }

// //   console.log(`${vari}`);

// // var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// // var result = Object.keys(obj).map((keys) => `'${obj[keys]}'`);
// // console.log(result)
// // const fs = require("fs");

// // let arr = []
// // for(i=0; i<=5000;i++){
// // let str = Math.random().toString(36).substr(2, 5);
// //   const filesGen =  fs.appendFile(`Flake_queries.js`,
// //   `{
// //     id: ${i},
// //     fullName: '${str}',
// //     country: '${str}',
// //     city: '${str}',
// //     zipCode: '${str}',
// //     societyAdmin: '${str}',
// //   },` ,
// //   function (err) {
// //     if (err) throw err;
// //     console.log("It's saved!");
// //   }
// // );
// // }

// //  console.log(arr);

// // let arr = {
// // name:["The society.name has already been taken."],
// // email:["The society_admin_user.email has already been taken."]}

// // for (const property in arr) {
// //   let arr1 = arr[property]
// //   console.log(arr1[0]);
// //   console.log(arr[property]);
// // }

// // var result = Object.keys(arr).map((keys) => console.log(`'${arr[keys]}'`));

// // const QRCode = require('qrcode')

// // let data = {
// // 	url: 'https//:metastreetapes.com/'
// // }

// // let stringdata = JSON.stringify(data.url)

// // ;
// // let qr ;
// // QRCode.toString(stringdata,{
// //     width: 100,
// //     height: 100
// //    },
// // 					function (err, url) {

// // 	if(err) return console.log("error occurred")

// //     qr= url;

// // })
// // console.log(qr)

// // Converting the data into base64

// // QRCode.toDataURL(stringdata, function (err, code) {
// // 	if(err) return console.log("error occurred")

// // 	// Printing the code
// // 	console.log(code)
// // })

// //    let str= new Date;
// //  console.log(str)

// // const getDeviceType = () => {
// //     const ua = navigator.userAgent;
// //     if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
// //       return "tablet";
// //     }
// //     if (
// //       /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
// //         ua
// //       )
// //     ) {
// //       return "mobile";
// //     }
// //     return "desktop";
// //   };

// //   getDeviceType();

// // var express = require('express');
// // var app = express();
// // var device = require('express-device');
// // app.use(device.capture());

// // app.get('/hello',function(req,res) {

// //   res.send("Hi to "+req.device.type.toUpperCase()+" User");
// // });

// // app.listen(5001, '192.168.1.59');
// // console.log("Listening to Port 3000");
// // let date = new Date();
// // let date2 = new Date(date.getTime() + 5*60000);
// // console.log(date)
// // console.log(date2)
// // console.log(date>date2)

// // let Country = require('country-state-city').Country;
// // let State = require('country-state-city').State;
// // let City = require('country-state-city').City;

// // // console.log(Country.getAllCountries()[0])
// // let country = "PK";
// // let state = Country.getAllCountries();
// // let Arr = [];
// // for (let i = 0; i < state.length; i++) {
// //   if (state[i].isoCode === country) {
// //     country = state[i].name;
// //   }
// // }

// // console.log(country)

// // const arr = [
// //     {
// //         "id": 1,
// //         "society_id": 1,
// //         "name": "kunji admin",
// //         "is_permanent": 1,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [
// //                 {
// //                     "id": 10,
// //                     "name": "Access Roles",
// //                     "route": "api/user/roles-permissions",
// //                     "module_name": "User Management"
// //                 },
// //                 {
// //                     "id": 9,
// //                     "name": "Assign Permissions",
// //                     "route": "api/user/assign_permission_to_roles",
// //                     "module_name": "User Management"
// //                 },
// //                 {
// //                     "id": 6,
// //                     "name": "View Profile",
// //                     "route": "api/user/profile",
// //                     "module_name": "User Management"
// //                 },
// //                 {
// //                     "id": 5,
// //                     "name": "Create a User",
// //                     "route": "api/user/add",
// //                     "module_name": "User Management"
// //                 }
// //             ],
// //             "Society": [
// //                 {
// //                     "id": 42,
// //                     "name": "Add society user",
// //                     "route": "api/society-admin/user/add",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 35,
// //                     "name": "Get society in a city",
// //                     "route": "api/society-in",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 34,
// //                     "name": "Authorize society member",
// //                     "route": "api/society-member/authorize",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 33,
// //                     "name": "Add society member view",
// //                     "route": "api/society-member/add-view",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 32,
// //                     "name": "Add society member",
// //                     "route": "api/society-member/add",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 31,
// //                     "name": "Society admin profile",
// //                     "route": "api/society-admin/profile",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 30,
// //                     "name": "Society admin society list",
// //                     "route": "api/society-admin/societies-list",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 29,
// //                     "name": "Kinji society view",
// //                     "route": "api/society/kunji-view-society",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 28,
// //                     "name": "View society data",
// //                     "route": "api/society/view-data",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 27,
// //                     "name": "View society in a city",
// //                     "route": "api/society/city",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 26,
// //                     "name": "View assets and facilities",
// //                     "route": "api/society/get-assets-facilities",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 25,
// //                     "name": "Add society facilities",
// //                     "route": "api/society/add-facility",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 24,
// //                     "name": "Add society assets",
// //                     "route": "api/society/add-assets",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 23,
// //                     "name": "Change society status",
// //                     "route": "api/society/change-status",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 22,
// //                     "name": "View society",
// //                     "route": "api/society/view",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 21,
// //                     "name": "Update society",
// //                     "route": "api/society/update",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 20,
// //                     "name": "Kinji add society",
// //                     "route": "api/society/add",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 19,
// //                     "name": "Kunji list society",
// //                     "route": "api/society/list",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 7,
// //                     "name": "Add a Role",
// //                     "route": "api/user/create-role",
// //                     "module_name": "Society"
// //                 },
// //                 {
// //                     "id": 44,
// //                     "name": "Mapping evel1",
// //                     "route": "api/society-admin/mapping/level-one",
// //                     "module_name": "Society"
// //                 }
// //             ],
// //             "Web User": [
// //                 {
// //                     "id": 17,
// //                     "name": "View Profile",
// //                     "route": "api/user/view-mobile-profile",
// //                     "module_name": "Web User"
// //                 }
// //             ],
// //             "": [
// //                 {
// //                     "id": 43,
// //                     "name": "Add society user view",
// //                     "route": "api/society-admin/user/add-view",
// //                     "module_name": null
// //                 },
// //                 {
// //                     "id": 45,
// //                     "name": "View Vertical Level two",
// //                     "route": "api/society-admin/mapping/level-two-view",
// //                     "module_name": null
// //                 }
// //             ]
// //         }
// //     },
// //     {
// //         "id": 3,
// //         "society_id": 1,
// //         "name": "Security Guard",
// //         "is_permanent": 0,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [],
// //             "Society": [],
// //             "Web User": [],
// //             "": []
// //         }
// //     },
// //     {
// //         "id": 4,
// //         "society_id": 1,
// //         "name": "Super admin",
// //         "is_permanent": 0,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [],
// //             "Society": [],
// //             "Web User": [],
// //             "": []
// //         }
// //     },
// //     {
// //         "id": 5,
// //         "society_id": 1,
// //         "name": "Accountant",
// //         "is_permanent": 0,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [],
// //             "Society": [],
// //             "Web User": [],
// //             "": []
// //         }
// //     },
// //     {
// //         "id": 6,
// //         "society_id": 1,
// //         "name": "tenant",
// //         "is_permanent": 0,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [],
// //             "Society": [],
// //             "Web User": [],
// //             "": []
// //         }
// //     },
// //     {
// //         "id": 7,
// //         "society_id": 1,
// //         "name": "Guard",
// //         "is_permanent": 0,
// //         "society": {
// //             "id": 1,
// //             "name": "Kunji"
// //         },
// //         "permissions": {
// //             "User Management": [],
// //             "Society": [],
// //             "Web User": [],
// //             "": []
// //         }
// //     }
// // ]

// //  console.log(Object.keys(arr[0].permissions))

// // const str =  "http://18.141.204.254/kunji-api/public/images/7165087566562665d119c9ad.png";

// // const myArray = str.split(".");

// // console.log(str.split(".").pop())

// // function dateFormat(inputDate, format) {
// //     //parse the input date
// //     const date = new Date(inputDate);

// //     //extract the parts of the date
// //     const day = date.getDate();
// //     const month = date.getMonth() + 1;
// //     const year = date.getFullYear();

// //     //replace the month
// //     format = format.replace("MM", month.toString().padStart(2,"0"));

// //     //replace the year
// //     if (format.indexOf("yyyy") > -1) {
// //         format = format.replace("yyyy", year.toString());
// //     } else if (format.indexOf("yy") > -1) {
// //         format = format.replace("yy", year.toString().substr(2,2));
// //     }

// //     //replace the day
// //     format = format.replace("dd", day.toString().padStart(2,"0"));

// //     return format;
// // }

// // console.log('Converted date: '+ dateFormat("2022-04-27T06:51:09.000000Z", 'MM-dd-yyyy'));

// // let date = "2022-04-27T06:51:09.000000Z";
// // const year =new Date (date).getHours();
// // const year1 =new Date (date).getMinutes();
// // const year2 =new Date (date).getSeconds();

// // console.log(year+" "+year1+" "+year2)

// // const data = new Date ().toLocaleString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: true, timeZone: "Asia/Jakarta" })

// // console.log(data)

// // let arr = [ 'PersonID', 'LastName', 'FirstName', 'Address', 'City' ];

// // let arr1 = arr.splice(1,3);

// // console.log(arr1);

// // const address = '0xf7D5125aA0D7faC91415146F7e5E484F3C74858c';

// // const walletAddress = address.substring(address.length-3,address.length);

// //  console.log(walletAddress)

// // let arr = [1, 20, 5, 78, 30];
// // let element, pos, i;

// // let size = arr.length;

// // element = 90;
// // pos = 3;

// // if (pos <= size || pos >= 0) {
// //   for (i = size; i > pos; i--)
// //   arr[i] = arr[i - 1];

// //   arr[pos] = element;
// //   console.log(arr)

// // } else console.log("Invalid Position\n");

// // const date = new Date();

// // const date1 = date.getTime();
// // const newTime = date.getTime() + 2 * 60 * 60 * 1000;

// // console.log(date1, "date")
// // console.log(newTime, "newTime")
// // console.log(newTime < date1, "newTime")

// // var a = ['dog', 'cat', 'hen'];

// // a[100] = 'fox';

// // console.log(a.length)

// // let rainForestAcres = 10; let animals = 0;

// // while(rainForestAcres < 13 || animals <= 2)
// // { rainForestAcres++; animals += 2; }

// // console.log(animals);

// // let scores = [];
// // scores.push(1, 2);
// // scores.pop();
// // scores.push(3, 4);
// // scores.pop();
// // score = scores.reduce((a, b) => a + b);
// // console.log(score);

// // const check = (arr, str) => {
// //   for (i = 0; i < arr.length; i++) {
// //     if (arr[i] === str) return true;
// //   }
// //   return false;
// // };

// // console.log(check([1,2,3,4,5], 3))

// // const str = 'add_project';

// // const str2 = str.split('_');

// //   const ne =         str.split('_')[0].charAt(0).toUpperCase() + str.split('_')[0].slice(1) + " " + str.split('_').slice(1)

// // console.log(ne)

// // const a = {
// //   name: "Ahmad",
// //   age: 27,
// //   designation: "jr developer Js"
// // };

// // // let b = {...a}

// // let b = Object.assign({}, a)

// //  b.name = "Hafiz"

// // console.log(a);
// // console.log(b);

// // console.log([100]==100);

// // let nums = [1,2,3,4,5,6,7];
// // let k = 3;
// // var rotate = function (nums, k) {
// //     [...nums ]= [...nums.slice(k+1), ...nums.slice(0,k+1)];
// //     console.log(nums);

// // };

// rotate(nums,k)

// let rotate1 = function (nums, k) {
//   for (let i = 1; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   console.log(nums);
// };

// let h = 54666;
// rotate1(cls, h);

// var rotate = function(nums, k) {
//   console.log(nums.length)
//   if(k>nums.length){
//     k=k%nums.length
// }
// console.log("k", k)
// if(k>nums.length/2){
// for(i=0;i,i<nums.length-k;i++){
//     console.log('dec')
//     nums.push(nums.shift())
// }}
//   else{
//     console.log('inc')
//      for(i=0;i,i<k;i++){
//         nums.unshift(nums.pop())
// }}
// console.log(nums)
//   };
//  let cls = [1,2,3,4,5,6]
//   let j = 8;
// rotate(cls, j);

// var rotate = function(nums, k) {
//     if(k>=nums.length){
//         k=k%nums.length;
//     }
//     if(k>nums.length/2){
//                 console.log('if')
//         const newArray=[...nums]
//         nums.length=0;
//         nums.push(...newArray.slice(newArray.length-k,newArray.length),...newArray.slice(0,newArray.length-k))
//         console.log('nym',nums)
//     }
//     else{
//         console.log('else')
//         for(let i=0;i<k;i++){
//             nums.unshift(nums.pop());
//         }
//     }
// };

// let nums = [0, 0, 1];
// let Arr = [];
// let count = 0;
// for (const element of nums) {
//   if (element === 0) {
//     count += 1;
//   }
//   else {
//     Arr.push(element)
//   }
// }

// let j = 0;
// while(j< count){
//     Arr.push(0);
//     j++;
// }
// nums.length =0
// nums.push(...Arr);
// console.log(nums);

// function createDimondShape(size){
//     for(var i=1;i<=size;i++){
//        for(var s=size-1;s>=i;s--){
//           process.stdout.write(" ");
//        }
//        for(var j=1;j<=i;j++){
//           process.stdout.write("* ")
//        }
//        console.log();
//     }
//     if(i==size+1){
//        for(var i=1;i<=size-1;i++){
//           for(var s=1;s<=i;s++){
//              process.stdout.write(" ");
//           }
//           for(j=i;j<=size-1;j++){
//              process.stdout.write("* ");
//           }
//           console.log();
//        }
//     }
//  }
//  createDimondShape(9);

// for (let i = 0; i < 2; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// (function a() {
//   var a = (b = 5);
// })();
// Promise.all(
//     console.log("1"),
//     setTimeout(()=>{console.log("2")},0),
//     console.log("3")
//     )
// .then((values) => {
//   values
// })
// .catch((error) => {
//   console.error(error.message)
// });


// const abc = async () => {
   
//     console.log("1");
//     await new Promise((x)=>setTimeout(() => {
//         console.log("2");
//         x();
//     }, 1000)); 
//     console.log(
//         "3"
//     );
// }

// abc();

let a=5;
let b=15;

a = a+b;
b=a-b;
a=a-b;

console.log(a);


console.log(b);




