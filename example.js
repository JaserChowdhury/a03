function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine = ""; 
    //Create each line on the Rhombus
    for (i = 0; i < pHeight; i++){
        rLine += "<p>";
        for(j = 0; j < pHeight - (i+1); j++){
            rLine +="<span style='color: white;'>" + pSymbol +"</span>"; //Insert white space with white symbols
        }
        //Create each symbol for the line
        for(j = 0; j <= i; j++){
            if (j%2) //even, add a symbol with the even color
            rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else //odd, add a symbol with the odd color 
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine = "";
    for (i = 0; i < pHeight; i++){
        rLine +="<p>";
        for(j = 0; j <= i; j++){
            if (j%2)
            rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        rLine +="</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i = pHeight; i > 0; i--){
        rLine +="<p>";
        for(j = 0; j < pHeight - i; j++){
            rLine +="<span style='color: white;'>" + pSymbol +"</span>";
        }
        for(j = 0; j < i; j++){
            if (j%2)
            rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        rLine +="</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i = pHeight; i > 0; i--){
        rLine +="<p>";
        for(j = 0; j < i; j++){
            if (j%2)
            rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
        rLine +="</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}


     