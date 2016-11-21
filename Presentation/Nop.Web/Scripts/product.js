


var savingArray = false;

function updateall(num) {
    num = 0;
    var totalprice = 0;
    calcq(num);
    qvSaving = 0;

    ((eval("optionvalue" + num).length > 0) ? (totalprice = eval("qtyvalue" + num) * (eval("ipr" + num) + calcoptions(num))) : (totalprice = eval("qtyvalue" + num) * eval("ipr" + num)));


    //totalprice

    totalprice = Math.round(totalprice * 1000) / 1000;

    if (savingArray) {
        if (eval("qtyvalue" + num) < savingArray.length) {
            qvSaving = savingArray[eval("qtyvalue" + num)] * eval("qtyvalue" + num)
        }
        else {
            qvSaving = savingArray[(savingArray.length - 1)] * eval("qtyvalue" + num)
        }
        totalprice = totalprice - qvSaving;

    }

    if (totalprice > 0) {

    }
    else {
        totalprice = 0;
    }

    chprice(totalprice, 0);
}


function calcq(num) {
    obj = eval("ranges" + num);
    for (var i in obj) {
        q = eval("qtyvalue" + num);
        ((obj[i]['q'] <= q) ? (eval("ipr" + num + "=obj[i]['pr']")) : (''))
    }
}

function calcoptions(num) {
    var optval = 0;
    len = eval("optionvalue" + num + ".length");
    for (j = 1; j < len; j++) {
        optcheck = eval("optionvalue" + num + "[" + j + "]");
        optval = (optcheck) ? optcheck : optval;
        //if (optcheck.indexOf('+$') != -1) {
        //    optval = optval + eval(optcheck.split('(+$')[1].split(')')[0]);
        //}
        //else {
        //    if (optcheck.indexOf('-$') != -1) {
        //        optval = optval + eval('-' + optcheck.split('(-$')[1].split(')')[0]);
        //    }
        //    else {
        //        optval = optval + 0;
        //    }
        //}
    }
    return eval(optval);
}


function chprice(pr, num) {
    obj = eval("document.forms.multiorder.pricetxt");


    if (pr.toString().indexOf('.') != -1) {
        pr = pr.toString().substring(0, pr.toString().indexOf('.') + 3);
        if (pr.toString().split('.')[1].length == 1) pr = pr + '0';
    } else {
        pr = pr + '.00';
    }
    if (document.forms['multiorder'].pricetxt) {
        obj.value = '$' + pr;
    }
    if (document.forms['email-send']) { document.forms['email-send'].elements['totalPrice'].value = '$' + pr; }
}