const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD2CL_XovDlN8uNVge4hS_abOCINVxMXO0",
    authDomain: "propnex-investment-suite.firebaseapp.com",
    projectId: "propnex-investment-suite",

});
  
var db = firebase.firestore();

var menu =[  
    {
        "0": {
          "email": "jolene@test.com",
          "favourites": [
            {
              "name": "THE SAIL @ MARINA BAY",
              "postal": "018985"
            },
            {
              "name": "716 YISHUN STREET 71",
              "postal": "760716"
            },
            {
              "name": "677C YISHUN RING ROAD",
              "postal": "760450"
            },
            {
              "imageUrl": "assets/placeholders/botany.png",
              "name": "11 Dairy Farm Walk",
              "postal": "679629",
              "units": [
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7sp.png",
                  "size": "121",
                  "unitNumber": "01-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2p.png",
                  "size": "101",
                  "unitNumber": "01-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1p.png",
                  "size": "143",
                  "unitNumber": "01-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "02-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "02-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "02-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "03-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "03-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "03-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "04-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "04-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "04-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "04-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "05-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "05-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "05-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "05-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "06-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "06-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "06-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "06-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "07-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "07-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "07-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "07-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "08-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "08-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "08-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "08-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "09-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "09-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "09-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "09-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "10-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "10-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "10-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "10-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "11-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "11-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "11-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "11-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "12-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "12-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "12-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "12-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7s.png",
                  "size": "121",
                  "unitNumber": "13-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2.png",
                  "size": "101",
                  "unitNumber": "13-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1.png",
                  "size": "143",
                  "unitNumber": "13-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5p.png",
                  "size": "96",
                  "unitNumber": "13-32"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c7sl.png",
                  "size": "121",
                  "unitNumber": "14-29"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/d2l.png",
                  "size": "101",
                  "unitNumber": "14-30"
                },
                {
                  "bedrooms": "5",
                  "floorplan": "assets/placeholders/e1l.png",
                  "size": "164",
                  "unitNumber": "14-31"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/c5pl.png",
                  "size": "115",
                  "unitNumber": "14-32"
                },
                {
                  "bedrooms": "4",
                  "floorplan": "assets/placeholders/floorplan.png",
                  "size": "141",
                  "unitNumber": "15-01"
                },
                {
                  "bedrooms": "2",
                  "floorplan": "assets/placeholders/floorplan.png",
                  "size": "123",
                  "unitNumber": "15-02"
                },
                {
                  "bedrooms": "3",
                  "floorplan": "assets/placeholders/floorplan.png",
                  "size": "133",
                  "unitNumber": "15-03"
                }
              ]
            }
          ],
          "generalRec": [
            {
              "name": "505B YISHUN STREET 51",
              "postal": "762505"
            },
            {
              "name": "MARINA ONE RESIDENCES",
              "postal": "018978"
            }
          ],
          "name": "Jolene Tan",
          "password": "jolenepass",
          "personalRec": [
            {
              "name": "677C YISHUN RING ROAD",
              "postal": "760450"
            },
            {
              "name": "EMERALD GARDEN",
              "postal": "069415"
            },
            {
              "name": "CONCOURSE SKYLINE",
              "postal": "199554"
            }
          ],
          "userType": "user"
        },
        "1": {
          "email": "jaclyn@test.com",
          "favourites": [
            {
              "name": "513B YISHUN STREET 51",
              "postal": "760513"
            }
          ],
          "generalRec": [
            {
              "name": "THE SAIL @ MARINA BAY",
              "postal": "018986"
            },
            {
              "name": "MARINA ONE RESIDENCES",
              "postal": "018978"
            }
          ],
          "name": "Jaclyn Woon",
          "password": "jaclypass",
          "personalRec": [
            {
              "name": "THE PLAZA",
              "postal": "199590"
            }
          ],
          "userType": "user"
        },
        "2": {
          "email": "jonathan@test.com",
          "generalRec": [
            {
              "name": "THE SAIL @ MARINA BAY",
              "postal": "018986"
            },
            {
              "name": "MARINA ONE RESIDENCES",
              "postal": "018978"
            }
          ],
          "name": "Jonathan Jiang",
          "password": "jonathanpass",
          "userType": "user"
        }
    }
 ]

menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});