// takto sa robí refactoring; niektoré funkcie, ktoré sa opakujú a nie len pomocné pre app.js, tie sa dajú do modulov, ktoré sa opakovane volajú z main app.js; aby bol code zrozumiteľný a jednoduchý; je to konvencia


module.exports.getDate = getDate(); //toto bude výstupom, ak použijem napríklad ako let date = date.getDate


function getDate () {

  let today = new Date();

  let dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", dateFormat);

return day;

}

module.exports.getDay = getDay(); //toto bude výstupom, ak použijem napríklad ako let date = date.getDay

function getDay () {

  let today = new Date();

  let dateFormat = {
    weekday: "long",
    };

  let day = today.toLocaleDateString("en-US", dateFormat);

return day;

}
