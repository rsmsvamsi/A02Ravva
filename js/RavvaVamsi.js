
function priceCal() {
	var products = $("[name='check']");
	var ttlPrice = 0;
	for( var i=0; i<products.length;i++){
		if(products[i].checked){
				if(i==0)
					ttlPrice = sum(ttlPrice, multiply(parseInt($("[name='hostingType']:checked").val()), parseInt($("#qty-"+(i+1)).val())));
					// ttlPrice += parseInt($("[name='hostingType']:checked").val())* parseInt($("#qty-"+(i+1)).val());
				else if(i<4)	
					ttlPrice = sum(ttlPrice, multiply(parseInt(products[i].value), parseInt($("#qty-"+(i+1)).val())));
			}
	}
	var ttP = document.getElementsByClassName("ttlAmnt");
	for(var j=0;j<ttP.length;j++)
		ttP[j].innerHTML = ttlPrice+"$";
}
	
function sum(a,b){
	if(!isNaN(a) && !isNaN(b))
		return a+b;
	else
		throw Error("only numbers are allowed");
}
function multiply(a,b){
	if(!isNaN(a) && !isNaN(b))
		return a*b;
	else
		throw Error("only numbers are allowed");
}