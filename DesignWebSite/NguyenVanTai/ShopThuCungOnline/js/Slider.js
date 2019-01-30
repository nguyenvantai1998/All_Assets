/******************************Silder IMG************************************/
window.onload = function()
	{
		setTimeout("switch_Image()", 3000);
	}
		var current = 1;
		var num_image = 10;
	function switch_Image(){
		current++;
			document.images['image'].src ='hinhAnh/Slider-IMG/Png-' + current + '.png'; /*Đường dẫn tới tập tín*/
		if(current < num_image)
			{
				setTimeout("switch_Image()", 3000);
			}
		else if(current == num_image)
			{
				current = 0;
				setTimeout("switch_Image()", 3000);
			}
	}
/******************************End************************************/		  
