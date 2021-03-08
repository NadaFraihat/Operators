
function userOrder (){
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


}
userOrder();
function paying(){
    var Paying = prompt("What do you want, Cash or Paypal? ");
    while(Paying != "Cash" && Paying !="Paypal")
    {
        Paying= prompt("Cash or Paypal?");
    }
    var typeOfPaying= "";
    if (Paying == "Cash"){
        alert("Please visit our shop!");
    }
    else {
        typeOfPaying = "<a href=https://www.paypal.com/jo/home>Click here please</a>";

    }
    document.write(typeOfPaying);
}
paying();

