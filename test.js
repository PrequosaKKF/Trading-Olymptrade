//preparation
//defining Id for ease of calling
document.getElementsByClassName('sum header-row__balance-sum')[0].id = 'haha';
document.getElementsByClassName('deal-buttons__button deal-buttons__button_up')[0].id = 'up';
document.getElementsByClassName('deal-buttons__button deal-buttons__button_down')[0].id = 'down';

//defining in-out functions

//this will get string of numbers and return numbers in float
function AdvancedparseFloat(str) {
    n = str.length-1;
    j = 1;
    while (j <= n) {
        if (str[j] == ' ') {
            str1 = str.slice(0,j);
            str2 = str.slice(j+1,n+1);
            str = str1 + str2;
        }
        j += 1;
    }
    return parseFloat(str);
}

//declaration of elements 
set = new Array(); //set of trading options = 'up' and 'down'
set[0] = 'up';
set[1] = 'down';
var index = 1; //initial trading option
var budget = AdvancedparseFloat(document.getElementById('haha').innerHTML); //initial budget
var oldbudget; //save of budget before trading
var currenttime; //getting time
var datatime;
var readabletime;
var val;
var asset;
var i = 0; // i = index for list_item, 0 for first in currency and 35 for first in cryptoasset
var clickamn = 0;
var tim = 60;

//defining main-action function
function initiate() {
    if (document.getElementsByClassName('count-down_text')[0].innerHTML == "00:00") {
        doitagain();
        return;
    }
    else {
        setTimeout(function(){ initiate() }, 250);
        return;
    }
}
function doitagain() {
    //proper payout return rate(PRR) is at least 70%
    //checks it before making an option
    //gets current PRR from number above the options(up and down) and compares with 70
    /*if it's less than 70, it'll check the first element of cryptoasset inside all asset-list 
    (it needs a click to show up) if it's proper(70% up and enabled) or not and will then click it if proper*/
    //otherwise, it will wait for 5 minutes through another round
    if (AdvancedparseFloat(document.getElementsByClassName('pair-tab pair-tab_selected')[0].firstChild.children[1].innerHTML) < 70) {
        if (document.getElementsByClassName("percent -high -max")[0] == undefined) {
            document.getElementById('pair-managing-add-btn').firstChild.click();
            setTimeout(function(){ doitagain() }, 1);
            return;
        }
        if (AdvancedparseFloat(document.getElementsByClassName('list__item').item(i).firstChild.children.item(2).children.item(1).innerHTML) < 70.0) {
            setTimeout(function(){ doitagain() }, 300000);
            return;
        }
        document.getElementsByClassName('list__item').item(i).firstChild.children.item(2).children.item(0).firstChild.click();
        document.getElementsByClassName('deal-buttons__button deal-buttons__button_up')[0].firstChild.id = 'up';
        document.getElementsByClassName('deal-buttons__button deal-buttons__button_down')[0].firstChild.id = 'down';
    }
    if (document.getElementsByClassName('user-deals-table__body')[1] == undefined) {
        if (document.getElementsByClassName('user-deals-table__body')[0].firstChild == null) {
        }
        else if (document.getElementsByClassName('user-deals-table__body')[0].firstChild.lastChild.firstChild.firstChild.firstChild.innerHTML == "Your forecast was incorrect") {
            if (index == 0) {
                index = 1;  
            }
            else {
                index = 0;
            }
        }
        if (tim >= 30) {
            document.getElementById(set[index]).click();
            tim = 0;
        }
        else {
            tim += 1;
            setTimeout(function(){ doitagain() }, 500);
            return;
        }
        //collecting data
        //datatime
        budget = AdvancedparseFloat(document.getElementById('haha').innerHTML);
        currenttime= new Date();
        datatime = parseFloat(currenttime.getHours())*60.0 + parseFloat(currenttime.getMinutes()) + parseFloat(currenttime.getSeconds())/60.0 ;
        datatime = datatime.toString();
        setTimeout(function(){ collect_log_data() }, 5000);
    }
    tim += 1;
    setTimeout(function(){ doitagain() }, 500);
    return;
}

function collect_log_data() {
    //readabletime
    readabletime = currenttime.getHours() + ':' + currenttime.getMinutes() + ':' + currenttime.getSeconds();
    //value
    val = document.getElementsByClassName('pin_text')[0].innerHTML;
    //asset
    asset = document.getElementsByClassName('pair-tab pair-tab_selected')[0].firstChild.firstChild.innerHTML;
    //collecting all
    tuple = "(" + datatime + "," + readabletime + "," + val + "," + asset + "," + budget.toString() + ")," ;
    console.log(tuple);
}

initiate();
