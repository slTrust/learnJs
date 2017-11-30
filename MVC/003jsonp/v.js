function show(container,arr){
    container.innerHTML = '';
    for(var i=0;i<arr.length;i++){
        var oLi = document.createElement('li');
        oLi.textContent = arr[i];
        container.appendChild(oLi);
    }
}