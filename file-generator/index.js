const fs = require('fs');

for(let i =1 ; i<=600; i++){
   console.log("summ"+i)
   fs.writeFile(`${i}`, 
    `{
      "animation_url": "ipfs://QmYrVK9bVD18U761xLj8AHuPKXogCPo1f8v5bGMd4zVMQY/${i}.gltf",
      "image": "ipfs://QmZzJ3UjncmHv237fKmyzo7xwSr8SWNrp9D7wVjyDWQtCb/${i}.jpg",
      "name": "Sachin Tendulkar’s Batting Gloves Card ${i}",
      "description": "Own a piece of cricketing history with a fractionalised NFT of Sachin Tendulkar’s batting gloves. Worn during the 2nd Test match of the Border-Gavaskar trophy in Bengaluru from the 9th-13th October 2010. Sachin scored his 49th test century in the first innings with 214 followed by an unbeaten 53* in the second innings to take India to victory by 7 wickets. Authenticated by Michael Fahey - Sports Memorabilia Australia",
      "attributes": [
        {
          "trait_type": "Type",
          "value": “Glove”
        },
        {
          "trait_type": "Card",
          "value": "${i}"
        }
      ]
    }
`
   , function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}
