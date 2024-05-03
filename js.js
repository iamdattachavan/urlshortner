function generateCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for (var i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
  
  var urlMappings = {};
  
  function saveMapping(code, longURL) {
    urlMappings[code] = longURL;
  }
  
  function retrieveLongURL(code) {
    return urlMappings[code];
  }
  
  function encodeURL() {
    var longURL = document.getElementById("longURL").value;
    var code = generateCode();
    saveMapping(code, longURL);
    var shortURL = " " + code;
    document.getElementById("shortURL").innerHTML = "Shortened URL: <a href='" + shortURL + "'>" + shortURL + "</a>";
  }