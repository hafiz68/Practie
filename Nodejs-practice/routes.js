const express = require("express");
const creds = require("./credentials.json");
const router = express.Router();
var fs = require('fs');
router.get("/socreds", function (req, res) {
  res.send({
    client_id: creds.web.client_id,
    project_id: creds.web.project_id,
    javascript_origins: creds.web.javascript_origins.toString(),
  });
});


router.get("/creds", function (req, res) {
 try {
  res.send({ creds });
  console.log(creds1);
 }
 catch(err){
   console.error(err.message)
 }
});


router.get("/somcreds", function (req, res) {
  res.send(
    creds.web.client_id + creds.web.project_id + creds.web.javascript_origins
  );
});


router.get("/somecreds/:id", function (req, res) {
  console.log(req.params);
  var c_id = { client_id: creds.web.client_id };
  var p_id = { project_id: creds.web.project_id };
  var js_org = { javascript_origins: creds.web.javascript_origins.toString() };
  // console.log({ c_id: c_id, p_id: p_id, js_org: js_org });
  res.send({ c_id, p_id, js_org });
});

router.put("/myaction", function(req, res){
  try{
    // console.log(creds);
    // let newcreds = creds;
    
    // creds.web.client_id = "user1";
    // console.log(newcreds);

    // creds.web.javascript_origins.shift();
     creds.web.javascript_origins.push("user1");
    // fs.appendFile( 'credentials.json' , 'Itwas changed through PUT', function(err, result){
    //       console.log("result : ", 'Itwas changed through PUT' );
    fs.writeFileSync('credentials.json', JSON.stringify(creds, null, 4), 'utf8');
         res.send( creds );
    }
    catch(err){
      console.error(err.message)
    }
  });

  router.delete("/myactiondel", function(req, res){
    try{
      
  
      
       creds.web.javascript_origins.splice();
    fs.writeFileSync('credentials.json', JSON.stringify(creds, null, 4), 'utf8');

                 res.send( creds );
      }
      catch(err){
        console.error(err.message)
      }
    });
    router.delete("/somcredsdel", function (req, res) {
      delete creds.web.javascript_origins;
    fs.writeFileSync('credentials.json', JSON.stringify(creds, null, 4), 'utf8');

      res.send(creds);
    });



module.exports = router;
