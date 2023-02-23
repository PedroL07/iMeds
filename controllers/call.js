const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "1d3dcce9b4b784cfb24e44f72ab47290";
const client = require("twilio")(accountSid, authToken);


module.exports = {


  createCall: async (req, res) => {
    client.calls
      .create({
         url: "http://demo.twilio.com/docs/voice.xml",
         to: '+17816914251',
         from: '+13466332747'
       })
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("/post/"+req.params.id);},
      
      
};
