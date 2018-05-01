$(function(){
	// magicZoom
    $("#zoom-img").magicZoom();
    var currentSelectedImg = $(".guide-img")[0];
    $(".guide-img").click(function(){
    	// console.log(n);
        var oldPath = this.src, newPath = "";
        var oldPaths = oldPath.split(".");
        for (var i = 0; i < oldPaths.length - 1; i++) { newPath += oldPaths[i]; newPath+="." }
        newPath += '-L.'; newPath += oldPaths[oldPaths.length-1];
        $("#zoom-img").attr('src',newPath);
        $("#magiczoom-zoom").css('background-image','url('+newPath+')');
        $(currentSelectedImg).removeClass("selected");
        $(this).addClass("selected");
        currentSelectedImg = this;
    });

    var currentSelectedColor = null
    $(".color-label").click(function(){
    	if(currentSelectedColor){
    		$(currentSelectedColor).removeClass("selected");
    	}
    	$(this).addClass("selected");
    	currentSelectedColor = this;
    });

    document.getElementById("quantity-input").addEventListener("keypress",function(event){
        if(event.keyCode == 45){
            event.preventDefault();
        }
    });
});