let points = 0;
function button (){
points++;
document.getElementById("button").innerHTML = points;
if (points == 42){
    document.getElementById("trophy").innerHTML ="WOW!!";
}
else{
    if (points == 100){
        document.getElementById("trophy").innerHTML ="ALO ENGİN!! HA... BU SAYFAYI KOMPLO AL! HAV HAV HAV HAV!! ";
    }
    else{
        if (points ==1000){
            document.getElementById("trophy").innerHTML= "LELEYLELEYKİNG365!!!!!!";
        }
        else{
            if (points ==10000){
                document.getElementById("trophy").innerHTML= "BİTCOİN ADRESİM: 1CmviLvqWvL3aempA32JrAgpZdw6v41R15";
            }
            else{
                document.getElementById("trophy").innerHTML= " ";
            }
        }
    }
}

}