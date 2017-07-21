console.log ("Generator is running");

// zunächst benötigen wir ein Array, in dem die zu suchenden Adressen liegen. Die können mit allen möglichen anderen Angaben angereichert sein.

var cities=[{City:"Istanbul",Value:9897599,Country:"Turkey",Class:6,Countrycode:"TR"},{City:"London (greater city)",Value:8256400,Country:"United Kingdom",Class:6,Countrycode:"UK"},{City:"Paris (greater city)",Value:6695233,Country:"France",Class:6,Countrycode:"FR"},{City:"Berlin",Value:3501872,Country:"Germany",Class:6,Countrycode:"DE"},{City:"Ankara",Value:3401573,Country:"Turkey",Class:6,Countrycode:"TR"},{City:"Madrid",Value:3233527,Country:"Spain",Class:6,Countrycode:"ES"},{City:"Barcelona (greater city)",Value:3202571,Country:"Spain",Class:6,Countrycode:"ES"},{City:"Milano (greater city)",Value:3105489,Country:"Italy",Class:6,Countrycode:"IT"},{City:"Napoli (greater city)",Value:3103234,Country:"Italy",Class:6,Countrycode:"IT"},{City:"Athina (greater city)",Value:2989023,Country:"Greece",Class:5,Countrycode:"EL"},{City:"Greater Manchester",Value:2693800,Country:"United Kingdom",Class:5,Countrycode:"UK"},{City:"Roma",Value:2638842,Country:"Italy",Class:5,Countrycode:"IT"},{City:"Izmir",Value:2386759,Country:"Turkey",Class:5,Countrycode:"TR"},{City:"Bucuresti",Value:1883425,Country:"Romania",Class:5,Countrycode:"RO"},{City:"Lisboa (greater city)",Value:1849472,Country:"Portugal",Class:5,Countrycode:"PT"},{City:"Hamburg",Value:1798836,Country:"Germany",Class:5,Countrycode:"DE"},{City:"Budapest",Value:1727495,Country:"Hungary",Class:5,Countrycode:"HU"},{City:"Warszawa",Value:1715517,Country:"Poland",Class:5,Countrycode:"PL"},{City:"Wien",Value:1687271,Country:"Austria",Class:5,Countrycode:"AT"},{City:"Stockholm (greater city)",Value:1579896,Country:"Sweden",Class:5,Countrycode:"SE"},{City:"München",Value:1378176,Country:"Germany",Class:5,Countrycode:"DE"},{City:"Bursa",Value:1336111,Country:"Turkey",Class:5,Countrycode:"TR"},{City:"Lyon",Value:1307101,Country:"France",Class:5,Countrycode:"FR"},{City:"Dublin (greater city)",Value:1261332,Country:"Ireland",Class:5,Countrycode:"IE"},{City:"Praha",Value:1246780,Country:"Czech Republic",Class:5,Countrycode:"CZ"},{City:"Sofia",Value:1208097,Country:"Bulgaria",Class:5,Countrycode:"BG"},{City:"Adana",Value:1197332,Country:"Turkey",Class:5,Countrycode:"TR"},{City:"Bruxelles / Brussel",Value:1159448,Country:"Belgium",Class:5,Countrycode:"BE"},{City:"Lille",Value:1113813,Country:"France",Class:5,Countrycode:"FR"},{City:"Birmingham",Value:1079900,Country:"United Kingdom",Class:5,Countrycode:"UK"},{City:"Liverpool (greater city)",Value:1063200,Country:"United Kingdom",Class:5,Countrycode:"UK"},{City:"Helsinki / Helsingfors (greater city)",Value:1059631,Country:"Finland",Class:5,Countrycode:"FI"},{City:"Marseille",Value:1042873,Country:"France",Class:5,Countrycode:"FR"},{City:"Amsterdam (greater city)",Value:1021754,Country:"Netherlands",Class:5,Countrycode:"NL"},{City:"Köln",Value:1017155,Country:"Germany",Class:5,Countrycode:"DE"},{City:"Rotterdam (greater city)",Value:977584,Country:"Netherlands",Class:4,Countrycode:"NL"},{City:"Porto (greater city)",Value:968905,Country:"Portugal",Class:4,Countrycode:"PT"},{City:"Gaziantep",Value:945804,Country:"Turkey",Class:4,Countrycode:"TR"},{City:"Torino",Value:872091,Country:"Italy",Class:4,Countrycode:"IT"},{City:"Konya",Value:829636,Country:"Turkey",Class:4,Countrycode:"TR"},{City:"Valencia",Value:797028,Country:"Spain",Class:4,Countrycode:"ES"},{City:"Bilbao (greater city)",Value:785793,Country:"Spain",Class:4,Countrycode:"ES"},{City:"Zagreb",Value:779145,Country:"Croatia",Class:4,Countrycode:"HR"},{City:"Kraków",Value:758334,Country:"Poland",Class:4,Countrycode:"PL"},{City:"Leeds",Value:754200,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Bordeaux",Value:720028,Country:"France",Class:4,Countrycode:"FR"},{City:"Lódz",Value:718960,Country:"Poland",Class:4,Countrycode:"PL"},{City:"Toulouse",Value:714318,Country:"France",Class:4,Countrycode:"FR"},{City:"Sevilla",Value:702355,Country:"Spain",Class:4,Countrycode:"ES"},{City:"Frankfurt am Main",Value:691518,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Antalya",Value:689665,Country:"Turkey",Class:4,Countrycode:"TR"},{City:"Zaragoza",Value:679624,Country:"Spain",Class:4,Countrycode:"ES"},{City:"Palermo",Value:654987,Country:"Italy",Class:4,Countrycode:"IT"},{City:"Riga",Value:649853,Country:"Latvia",Class:4,Countrycode:"LV"},{City:"Greater Nottingham",Value:641900,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Wroclaw",Value:631188,Country:"Poland",Class:4,Countrycode:"PL"},{City:"Oslo",Value:623966,Country:"Norway",Class:4,Countrycode:"NO"},{City:"Stuttgart",Value:613392,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Diyarbakir",Value:609465,Country:"Turkey",Class:4,Countrycode:"TR"},{City:"Zürich (greater city)",Value:598986,Country:"Suisse",Class:4,Countrycode:"CH"},{City:"Glasgow",Value:594100,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Nantes",Value:593983,Country:"France",Class:4,Countrycode:"FR"},{City:"Düsseldorf",Value:592393,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Genova",Value:582320,Country:"Italy",Class:4,Countrycode:"IT"},{City:"Dortmund",Value:580956,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Essen",Value:573468,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Kayseri",Value:572170,Country:"Turkey",Class:4,Countrycode:"TR"},{City:"Málaga",Value:567433,Country:"Spain",Class:4,Countrycode:"ES"},{City:"København",Value:559440,Country:"Denmark",Class:4,Countrycode:"DK"},{City:"Sheffield",Value:554600,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Poznan",Value:550742,Country:"Poland",Class:4,Countrycode:"PL"},{City:"Bremen",Value:548319,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Vilnius",Value:533279,Country:"Lithuania",Class:4,Countrycode:"LT"},{City:"Leipzig",Value:531809,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Dresden",Value:529781,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Hannover",Value:525875,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Bradford",Value:523900,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Portsmouth (greater city)",Value:522500,Country:"United Kingdom",Class:4,Countrycode:"UK"},{City:"Nice",Value:522008,Country:"France",Class:4,Countrycode:"FR"},{City:"Göteborg",Value:520374,Country:"Sweden",Class:4,Countrycode:"SE"},{City:"Nürnberg",Value:510602,Country:"Germany",Class:4,Countrycode:"DE"},{City:"Antwerpen",Value:507368,Country:"Belgium",Class:4,Countrycode:"BE"},{City:"'s-Gravenhage",Value:502055,Country:"Netherlands",Class:4,Countrycode:"NL"}];






//Hier deklarieren wir zwei Variablen. Map benötigen wir zum zeichnen einer Map. Das ist für diesen Zweck zwar eigentlich nicht notwendig, google maps braucht aber die function initMap() um zu funktionieren. Wir haben der Karte kein CSS verpasst, daher ist sie nicht zu sehen.
// in geolocatedCities speichern wir alle Ausgaben. Ist erstmal auch nicht notwendig, aber was man hat, das hat man.

var map;
var geolocatedCities = [];
var changedArray = [];
var counter = 0;

//Hier zeichnen wir die Map. Google Maps braucht die initMap um zu funktionieren. Ohne initMap kein Geocoding im zweiten Schritt.
function initMap(){
    // creating a new google map
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 52.420112, lng: 10.790285},
        zoom: 11
    });

// Hier kommt das eigentliche Geolocation-Tool. Wir arbeiten mit einer forEach-Schleife, da in einer for-Schleife immer nur das letzte Ergebnis ausgedruckt werden würde.

    //Erstmal schaffen wir eine Variable, die den Geocoder aktiviert.
    var geocoder = new google.maps.Geocoder();

    //Dann deklarieren wir die Funktion, die später mit einem forEach-Befehl unser Array nimmt und zunächst die Adresse jedes Array-Elements geocoded.
    //Danach wird in einem Element ein HTML-Text zusammengeschoben, aus Name, Bevölkerung etc. Und: die Location wird eingefügt.
    //Dann wird der ganze Kram auf den Screen gedruckt, dort kann man dann Copypasten und das ganze in ein Array verwandeln.

    // function creatingGeocode(element, index, array){

    //     var origin = element.City;
    //     var city = element;
    //     geocoder.geocode(
    //         {address: origin},          // hier kann noch Begrenzung rein
    //         function(results, status) {
    //             //hier checken wir erstmal, ob Google überhaupt was findet. Wenn ja: Weiter. Wenn nein: Fehlermeldung!
    //             if (status===google.maps.GeocoderStatus.OK){
    //                 // wir nehmen hier immer das erste Ergebnis, das Google ausspuckt (Index [0]). Meist ist das das Beste. Dann setzen wir den HTML-Text zusammen.

    //                 var fullHTML = '<p>{city: "'+city.City+'", population: '+city.Value+', country: "'+city.Country+'", class: '+city.Class+', countrycode: "'+city.Countrycode+'", location: {lat: '+results[0].geometry.location.lat()+', lng: '+results[0].geometry.location.lng()+'}},</p>';

    //                 //Jetzt hängen wir den fullHTML-Text an ein Div in unserem HTML-Dokument an.
    //                 $("#geocode").append(fullHTML);

    //                 //Jetzt schieben wir die Ergebnisse noch in ein Array, für den Fall der Fälle und falls wir damit noch etwas vorhaben.
    //                 geolocatedCities.push(element);

    //             // Fehlermeldung, wenn Google-Status !=OK
    //             }else{
    //                 console.log("Etwas ist mächtig schief gelaufen");
    //             }
    //         })
    // }       // Ende der Geolocation-Function

// Wir rufen forEach auf unser cities-Array und geben als Callback unsere creatingGeocode-Funktion mit
function geolocate(){
    console.log("geolocate feuert");
    var j = counter;

for (var i=j; i<j+10; i++){

    console.log("for-schleife feuert");
    var origin = cities[i].City;
    var city = cities[i];
    (function(hallo){
        console.log(hallo);
    })("Test-IIFE feuert");
    (function(origincopy, citycopy){
        console.log("IIFE feuert");

            geocoder.geocode(
            {address: origincopy},          // hier kann noch Begrenzung rein
            function(results, status) {
                //hier checken wir erstmal, ob Google überhaupt was findet. Wenn ja: Weiter. Wenn nein: Fehlermeldung!
                if (status===google.maps.GeocoderStatus.OK){
                    // wir nehmen hier immer das erste Ergebnis, das Google ausspuckt (Index [0]). Meist ist das das Beste. Dann setzen wir den HTML-Text zusammen.

                    var fullHTML = '<p>{city: "'+citycopy.City+'", population: '+citycopy.Value+', country: "'+citycopy.Country+'", class: '+citycopy.Class+', countrycode: "'+citycopy.Countrycode+'", location: {lat: '+results[0].geometry.location.lat()+', lng: '+results[0].geometry.location.lng()+'}},</p>';

                    //Jetzt hängen wir den fullHTML-Text an ein Div in unserem HTML-Dokument an.
                    $("#geocode").append(fullHTML);

                    //Jetzt schieben wir die Ergebnisse noch in ein Array, für den Fall der Fälle und falls wir damit noch etwas vorhaben.


                // Fehlermeldung, wenn Google-Status !=OK
                }else{
                    console.log("Etwas ist mächtig schief gelaufen");
                    console.log(origincopy);
                }
            })



        })(origin, city);

    }       // Ende der fo-Schleife
    counter+=10;
}

function nextLoop(){
    geolocate();

}

document.getElementById("go").addEventListener("click", function(){
    console.log("button feuert");

    geolocate();
});




} // Ende der Init-Map





var citiesMin = [{city:"Istanbul",population:9897599,country:"Turkey","class":6,countrycode:"TR",location:{lat:"41.0082376",lng:"28.97835889999999"}},{city:"London (greater city)",population:8256400,country:"United Kingdom","class":6,countrycode:"UK",location:{lat:"51.504827",lng:"-0.0786263999999619"}},{city:"Paris (greater city)",population:6695233,country:"France","class":6,countrycode:"FR",location:{lat:"38.6690852",lng:"-90.23816529999999"}}];




//     var button = document.getElementById("go").addEventListener ("click", textToNumber);

//     function textToNumber(){
//         var code = document.getElementById("stringToNumber").value;
//         changedArray = [];
//         postArray = new Array(code);

//         console.log(postArray);

//     }


// console.log("vor Timeout");
// setTimeout(function(){
//     timeOut();
// }, 3000);

// console.log("nach Timeout");

// function timeOut(){
//     console.log("Das ist der Timeout");
// }