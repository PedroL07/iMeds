const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "566b487cad5777c53e331f792777b118";
const client = require("twilio")(accountSid, authToken);
const gVoice = '+17816914251';
const twilioVoice = '+13466332747';

module.exports = {

  createText: async (req, res) => {


    client.messages 
      .create({         
            body: "Live as if you were to die tomorrow. Learn as if you were to live forever. –  Mahatma Gandhi", from: (twilioVoice), to: (gVoice) 
       })
      .then(message => console.log(message.sid)) 
      .done();
      console.log(req.body.med)
      res.redirect("/post/"+req.params.id);
    
    },
      
      
};

// const schedule = require("node-schedule");

// module.exports = {
//   createText: async (req, res) => {
//     schedule.scheduleJob("31 16 1 12 *", () => {
//       client.messages
//         .create({
//           body: "Thank you for your visit!",
//           from: "+13466332747",
//           to: "+16174078920",
//         })
//         .then((message) => console.log(message.sid))

//         .done();
//       res.redirect("/profile");
//     });
//   },
// };
