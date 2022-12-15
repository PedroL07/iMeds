const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "566b487cad5777c53e331f792777b118";
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
