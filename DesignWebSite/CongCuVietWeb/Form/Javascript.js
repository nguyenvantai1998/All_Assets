
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
	
// Kiểm tra rỗng
    if(value == ''){
     span.innerHTML ='Nhập theo yêu cầu!';
    }
	else{
	// Kiểm tra các trường hợp khác
		if(id == 'email'){
		if(reg_mail.test(value) == false)
			{ span.innerHTML ='Email không hợp lệ (ví dụ: abc@gmail.com)';}
				var email =value;
			}
		if(id == 'confirm_email' && value != email)
			{span.innerHTML ='Email nhập lại chưa đúng';}
		
	// Kiểm tra password
		if(id == 'password'){
		if(value.length <8)
			{span.innerHTML ='Password phải từ 8 ký tự';}
				var pass =value;
			}
	// Kiểm tra password nhập lại
		if(id == 'confirm_pass' && value != pass)
			{span.innerHTML ='Password nhập lại chưa đúng';}
		
	//Kiểm tra tên đăng nhập
		if(id=='username'){
			if(value.length<6)
				{span.innerHTML = 'Tên đăng nhập không ngắn hơn 6 ký tự'}
		}
		
	//Kiểm tra nhập họ
		if(id=='lastname'){
			if(value.length <2)
			{span.innerHTML ='Họ ít nhất 2 ký tự';}
			}
		if(id=='lastname'){
			if(isNaN(value)==false)
				{span.innerHTML='Họ không được nhập số'}
			}
		
	//kiểm tra tên
		if(id=='firstname'){
			if(value.length <2)
			{span.innerHTML ='Tên ít nhất 2 ký tự';}
		}
		if(id=='firstname'){
			if(isNaN(value)==false)
				{span.innerHTML='Họ không được nhập số'}
		}
		
	//Kiểm tra CMND nhập vo phải 9 hoặc 12 số hay không
		if(id=='CMND'){
			if(value.length!=9 && value.length!=12)
				{span.innerHTML='CMND phải 9 hoặc 12 số'}
			}
	//Kiểm tra người dùng nhập CMND không phải là số
		if(id=='CMND'){
			if(isNaN(value)==true)
				{span.innerHTML='CMND là số vd:0123456789'}
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

	//Kiểm tra ngày
		if(id=='nhapngay'){
			if(value.length<1)
				{span.innerHTML = 'Nhập Ngày Không Qúa 3 Số'}
		else if(value.length>2)
				{span.innerHTML = 'Nhập Ngày Không Qúa 3 Số'}
		}
		if(id=='nhapngay'){
			if(isNaN(value)==true)
				{span.innerHTML = 'Nhập Ngày Là Kiểu Số'}
			}
		
	//Kiểm tra tháng
		if(id=='nhapthang'){
			if(value.length<1)
				{span.innerHTML = 'Nhập Tháng Không Qúa 3 Số'}
		else if(value.length>2)
				{span.innerHTML = 'Nhập Tháng Không Qúa 3 Số'}
			}
		if(id=='nhapthang'){
			if(isNaN(value)==true)
				{span.innerHTML = 'Nhập Tháng Là Kiểu Số '}
			}
		
	//Kiểm tra năm
		if(id=='nhapnam'){
			if(value.length!=4)
				{span.innerHTML='Năm sinh đúng 4 số vd:2017'}
			}
		if(id=='nhapnam'){
			if(isNaN(value)==true)
				{span.innerHTML='Năm sinh là kiểu số'}
			}
			
}
	// Nếu có lỗi thì chèn span vào hồ sơ, chạy onchange, submit return false, highlight border
    if(span.innerHTML != ''){
		inputs[i].parentNode.appendChild(span);
			errors = true;
			run_onchange = true;
		inputs[i].style.border = '3px solid red';
		inputs[i].style.background = '#fffcf9';
    }
   }//The end Vòng lặp for
   
   if(errors == false)
		{alert('CHÚC MỪNG BẠN ĐÃ ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG');}
			return !errors;
	}//The end function valid()
   
// Chạy hàm kiểm tra valid()
	var register = document.getElementById('submit');
		register.onclick = function(){
			return valid();
			}
  
// Kiểm tra lỗi với sự kiện onchange -> gọi lại hàm valid()
	for(var i=0; i<inputs.length; i++){
		var id = inputs[i].getAttribute('id');
			inputs[i].onchange = function(){
    if(run_onchange == true){
		this.style.border = '1px solid #999';
		this.style.background = '#fff';
			valid();
     } 
    }
   }//The end Kiểm tra lỗi với sự kiện onchange -> gọi lại hàm valid()