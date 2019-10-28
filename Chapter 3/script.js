 /********** DIFFERENT WAYS OF CREATING AN OBJECT **********/
 /********** 1. Creating an object using the object literal  **********/
 //   var hotel1 = {
 //       name: 'Park',
 //       rooms: 120,
 //       booked: 77,
 //       checkAvailability: function() {
 //           return this.rooms - this.booked;
 //       }
 //   }

 /********** 2.Creating an object using the constructor syntax  **********/
 // var hotel2 = new Object();
 // hotel.name = 'Nelrose';
 // hotel.rooms = 200;
 // hotel.booked = 100;
 // hotel.pool = true;
 // hotel.bar = true;
 // hotel.lounge = false;
 // hotel.checkAvailability = function() {
 //         return this.rooms - this.booked;
 //     }
 /**********Creating prototypes **********/
 function Hotel(name, rooms, booked) {
     this.name = name;
     this.rooms = rooms;
     this.booked = booked;
     this.checkAvailability = function() {
         return this.rooms - this.booked;
     }
 }


 var orchidHotel = new Hotel('Orchid', 150, 100);
 var rodinaHotel = new Hotel('Rodina', 100, 100);

 var details1 = orchidHotel.name + ' rooms : ';
 console.log(details1);

 details1 += orchidHotel.checkAvailability();
 console.log(details1);

 var elHotell = document.getElementById('hotel1');
 elHotell.textContent = details1;
 var details2 = rodinaHotel.name + ' rooms: ';
 details2 += rodinaHotel.checkAvailability();
 var elHotel2 = document.getElementById('hotel2');
 elHotel2.textContent = details2;

 var msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + ' </p>';
 msg += '<p>height: ' + window.innerHeight + '</p>';
 msg += ' <h2>history</h2><p>items : ' + window.history.length + '</p>';
 msg += ' <h2>screen</h2><p>width : ' + window.screen.width + '</p>';
 msg += ' <p>height : ' + window.screen.height + '</p>';
 var el = document.getElementById('info');
 el.innerHTML = msg;
 alert('Current page : ' + window.location);

 var output = '<p><b>page title: </b>' + document.title + '<br /> ';
 output += '<b>page address: </b>' + document.URL + '<br />';
 output += '<b>last modified : </b> ' + document.lastModified + '</p>';
 var tag = document.getElementById('footer');
 tag.innerHTML = output;

 var saying = 'Home sweet home'
 var para1 = saying.charAt(5).toUpperCase();
 var par1 = document.getElementById('p1');
 par1.innerHTML = para1;

 var para2 = saying.substring(4, 10).toUpperCase();
 var par2 = document.getElementById('p2');
 par2.innerHTML = para2;

 var para3 = saying.replace('Home', 'oh');
 var par3 = document.getElementById('p3');
 par3.innerHTML = para3;

 var para4 = saying.split(' ');
 var par4 = document.getElementById('p4');
 par4.innerHTML = para4;

 var randomNum = Math.round((Math.random() * 10) + 1);
 var p = document.getElementById('p');
 p.textContent = randomNum;
 /***Remember to solve the google docs question on date using the date object in the book on pg. 147****/