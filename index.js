function totalProduction(){
    var shedA = document.getElementById('shedA') .value;
    var shedB= document.getElementById('shedB') .value;
    var shedC = document.getElementById('shedC').value;
    var shedD = document.getElementById('shedD').value;
    var totalLeters =(parseInt(shedA) + parseInt(shedB) + parseInt(shedC)+parseInt(shedD));
    var totalWeek =(parseInt(totalLeters)*45*7)
    var totalJan=(parseInt(totalLeters)*45*31)
    var totalFeb=(parseInt(totalLeters)*45*29)
    var totalMarch=(parseInt(totalLeters)*45*31)
    var totalApril=(parseInt(totalLeters)*45*30)
    var totalMay=(parseInt(totalLeters)*45*31)
    var totalJune=(parseInt(totalLeters)*45*30)
    var totalJuly=(parseInt(totalLeters)*45*31)
    var totalAug=(parseInt(totalLeters)*45*31)
    var totalSeb=(parseInt(totalLeters)*45*30)
    var totalOct=(parseInt(totalLeters)*45*31)
    var totalNov=(parseInt(totalLeters)*45*30)
    var totalDec=(parseInt(totalLeters)*45*31)
    var totalYearly=(parseInt(totalLeters)*45*366)
    

    document.getElementById('totalshedA').innerHTML ="Your production in shedA  is" + "  " + shedA + "liters per day";
    document.getElementById('totalshedB').innerHTML ="Your production in shedB  is"+ "  " + shedB + "liters per day";
    document.getElementById('totalshedC').innerHTML ="Your production in shedC  is"+ "  " + shedC + "liters per day";
    document.getElementById('totalshedD').innerHTML ="Your production in shedD  is"+ "  " + shedD + "liters per day";
    
    
    document.getElementById('totalliters').innerHTML ="Your total liters produced by all sheds in a day is" + "  "+ totalLeters;
    document.getElementById('jan').innerHTML ="Your total income in january is" + "  "+ totalJan;
    document.getElementById('feb').innerHTML ="Your total income in february is" + "  "+ totalFeb;
    document.getElementById('march').innerHTML ="Your total income in march is" + "  "+ totalMarch;
    document.getElementById('april').innerHTML ="Your total income in April is" + "  "+ totalApril;
    document.getElementById('may').innerHTML ="Your total income in may is" + "  "+ totalMay;
    document.getElementById('june').innerHTML ="Your total income in june is" + "  "+ totalJune;
    document.getElementById('july').innerHTML ="Your total income in july is" + "  "+ totalJuly;
    document.getElementById('aug').innerHTML ="Your total income in August is" + "  "+ totalAug;
    document.getElementById('seb').innerHTML ="Your total income in sebtember is" + "  "+ totalSeb;
    document.getElementById('oct').innerHTML ="Your total income in octobar is" + "  "+ totalOct;
    document.getElementById('nov').innerHTML ="Your total income in november is" + "  "+ totalNov;
    document.getElementById('dec').innerHTML ="Your total income in december is" + "  "+ totalDec;
    document.getElementById('perweek').innerHTML ="Your weekly income is"+ totalWeek;
    document.getElementById('yearly').innerHTML ="Your yearly total income is" + "  "+ totalYearly;
    
}
