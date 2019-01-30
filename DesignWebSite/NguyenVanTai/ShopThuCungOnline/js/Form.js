var inputs = document.forms['register'].getElementsByTagName('input');
var run_onchange = false;

	function valid(){ 
		var errors = false;
		var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
							
			for(var i=0; i<inputs.length; i++){
				var value = inputs[i].value;
				var id = inputs[i].getAttribute('id');
							
					// Tạo phần tử span lưu thông tin lỗi
						var span = document.createElement('span');
							
					// Nếu span đã tồn tại thì remove
						var p = inputs[i].parentNode;
							if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}
						
					// Kiểm khách hàng đã điền thông tin hay chưa
						if(value == ''){
						 span.innerHTML ='Vui lòng điền thông tin của của quý khách...';
						}
						else{
							
						//Kiểm tra họ tên khách hàng
							if(id=='firstname'){
								if(value.length <5)
								{span.innerHTML ='Vui lòng nhập đầy đủ họ tên và không ít hơn 5 ký tự';}
							}
							if(id=='firstname'){
								if(isNaN(value)==false)
									{span.innerHTML='Họ tên quý khách không được nhập số'}
							}	
							
						// Kiểm tra email
							if(id == 'email'){
							if(reg_mail.test(value) == false)
								{ span.innerHTML ='Email chưa hợp lệ (ví dụ: abc@gmail.com)';}
									var email =value;
								}
							
						//Kiểm tra CMND nhập vo phải 9 hoặc 12 số hay không
							if(id=='CMND'){
								if(value.length!=9 && value.length!=12)
									{span.innerHTML='CMND phải 9 hoặc 12 số'}
								}
						
						//Kiểm tra CMND khách hàng không phải là số
							if(id=='CMND'){
								if(isNaN(value)==true)
									{span.innerHTML='CMND phải là số vd:0123456789'}
								}

						//Kiểm tra sđt nhập không bé hơn 10 và lớn hơn 12 số và phải là kiểu số
							if(id=='phone'){
								if(value.length<10)
									{span.innerHTML = 'SĐT Từ 10-->12 Số'}
							else if(value.length>12)
									{span.innerHTML = 'SĐT Từ 10-->12 Số'}
								}
							if(id=='phone'){
								if(isNaN(value)==true)
								{span.innerHTML = 'Phải Là Kiểu Số VD:0123456789'}
								}
								
						}
						
						// Nếu có lỗi thì chèn span vào hồ sơ, chạy onchange, submit return false, highlight border
						if(span.innerHTML != ''){
							inputs[i].parentNode.appendChild(span);
								errors = true;
								run_onchange = true;
							inputs[i].style.border = '2px solid white';
							inputs[i].style.background = '#BFFF00';
							inputs[i].style.color = 'red';
						}
			}//The end Vòng lặp for
					   
					   if(errors == false)
							{alert('ĐƠN HÀNG ĐƯỢC ĐẶT THÀNH CÔNG');}
								return !errors;
	}//The end function valid()
					   
	// Chạy hàm kiểm tra valid()
		var register = document.getElementById('submit');
			register.onclick = function(){
				return valid();
			}