window.onload = function(){
	var oBtn = document.getElementById('btn');
	oBtn.onclick = function(){
		data(function(s){
            show(s);
        })
	}
}