


var savingArray = false;

function updateall() {
    var num = 0;
    var totalprice = 0;
    //calcq(num); for ranges
    qvSaving = 0;

    //    (optionvalue0.length > 0) ? (totalprice = $(".qtyline .qty-input").val() * ($(".product-price .price-value").attr("content") + calcoptions())) : (totalprice = eval("qtyvalue" + num) * eval("ipr" + num));
    var productPrice = $(".pr2.price-value").attr("content");
    totalprice = $(".qtyline .qty-input").val() * (productPrice * 1 + calcoptions());

    //totalprice = Math.round(totalprice * 1000) / 1000;

    //if (savingArray) {
    //    if (eval("qtyvalue" + num) < savingArray.length) {
    //        qvSaving = savingArray[eval("qtyvalue" + num)] * eval("qtyvalue" + num)
    //    }
    //    else {
    //        qvSaving = savingArray[(savingArray.length - 1)] * eval("qtyvalue" + num)
    //    }
    //    totalprice = totalprice - qvSaving;

    //}

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

function calcoptions() {
    var optval = 0;
    len = eval("optionvalue0" + ".length");
    for (j = 1; j < len; j++) {
        optcheck = eval("optionvalue0" + "[" + j + "]");
        optval = (optcheck) ? optcheck : optval;
    }
    return eval(optval);
}


function chprice(pr, num) {
    obj = $(".pricetxt");


    //if (pr.toString().indexOf('.') != -1) {
    //    pr = pr.toString().substring(0, pr.toString().indexOf('.') + 3);
    //    if (pr.toString().split('.')[1].length == 1) pr = pr + '0';
    //} else {
    //    pr = pr + '.00';
    //}
    if (obj.length > 0) {
        obj.html('$' + pr.toFixed(2));
    }
    //if (document.forms['email-send']) { document.forms['email-send'].elements['totalPrice'].value = '$' + pr; }
}


$(document).ready(function () {
    var retailPrice = $(".pr1.old-product-price").attr("content").substring(1) * 1;
    var productPrice = $(".pr2.price-value").attr("content") * 1;
    var savings = (100 * (retailPrice - productPrice) / retailPrice).toFixed(0);
    $(".pr2.saving").html("-" + savings + "%");
});