alert("Welcome");
var iphoneOrder = prompt("iPhone 12 Pro Max or iPhone 12 Pro");
while(iphoneOrder != "iPhone 12 Pro Max" && iphoneOrder !="iPhone 12 Pro")
{
    iphoneOrder= prompt("iPhone 12 Pro Max or iPhone 12 Pro");

}

var typeOfOrder= "";
if ( iphoneOrder == "iPhone 12 Pro Max"){
    typeOfOrder ='<img src="images.jpg">';
}
else {
    typeOfOrder ='<img src="images (1).jpg">';
}
var numOfPhones = prompt("How many iPhones you want?");
var order ="";
for(i=0; i<numOfPhones ; i++){
order = order+typeOfOrder ;
}
document.write(order);