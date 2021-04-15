var request = require('request');
const rp = require('request-promise');
const $ = require('cheerio');

var url = 'url';
const email = "email";
const pass = "password";
var token = "null";
rp(url)
  .then(function (html) {
    //success!

    token = $('html tag that you want to get', html)['0'].attribs.value;
    
    // console.log($('input', html));
    var data = {
      "email": email,
      "password": pass,
      // "authenticity_token": token
    };
    request.post({ url: url, formData: data }, function (err, httpResponse, body) {
      console.log('||| post request sent |||');
      if (err) {
        return console.error('post failed:', err);
      }
      
      console.log('Post successful!  Server responded with:', body);
      console.log('Token =>',token);
    });
  })
  .catch(function (err) {
    //handle error
  });

