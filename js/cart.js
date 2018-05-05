$(function() {
	$("#quantity-input").val("1");
	$(".btn-add-note").click(function(){
		if($(".cart-note textarea").css("display")=="none"){
			$(".cart-note textarea").css("display","block");
		}
		else{
			$(".cart-note textarea").css("display","none");
		}
	});
	var distpickerModal = artModal({ //构建artModal实例
        element: document.getElementById('distpicker'),
        open: function() {},
        close: function() {}
    });
	var btnShippingDist = $("#shipping-dist");
	var btnUpdate = $("#btn-update");
	btnShippingDist.click(function(){
		
        distpickerModal.open();
	});
	btnUpdate.click(function(){
		var ret = "";
		var province = $("#select-province").val();
		var city = $("#select-city").val();
		var area = $("#select-area").val();
		if(province=="");
		else if(city=="");
		else if(area=="");
		else {
			$("#shipping-dist").text(province+", "+city+", "+area);
			distpickerModal.close();
		}
	});
});