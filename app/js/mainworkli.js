$(document).ready(function() {

	console.log('Файл main.js успешно загружен');

	// Хак проверка если это ie8
	if (document.all && document.querySelector && !document.addEventListener) {
    	$('[placeholder]').placeholder();
	}

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".main-nav-toggle").click(function(){
		$(this).toggleClass('active');
		$(".main-nav.header").toggleClass('active');
	});

	$(window).resize(function(event) {      
		$(".main-nav-toggle").removeClass('active');    
		$(".main-nav.header").removeClass('active');       
	});

	$(document).on("click",function (e){ 
		e.preventDefault;
		var toggle = $(".main-nav-toggle"),
			add= $(".add-project"),
			popup=$(".popup-parent"),
			add_pr=$(".add-wrap"),
			add_close=$(".close-btn"),
			close_btn=$(".close-btn"),
			btn_reset = $(".btn-reset");

		if (!toggle.is(e.target) 
			&& toggle.has(e.target).length === 0) { 
			$(".main-nav-toggle").removeClass('active'); 
			$(".main-nav.header").removeClass('active');
		 };


		 if ($('.alert-close').is(e.target)) {
		 	console.log("close");
		 	$('.alert').addClass('hidden');
		 };

		if (popup.is(e.target)  || (add_close.is(e.target) )) {
			e.preventDefault;
			$('.add-wrap')
			.animate({opacity: 0, top: '40%'}, 300, 
				function(){ 
					$(this).css('display', 'none');
					$('.popup-parent').fadeOut(400); 
					$(".wrapper").css({"overflow":"hidden","position":"relative"});
				});
			$("#add-form")[0].reset();
		};

		if (add.is(e.target) || add.has(e.target).length) {
			$('.popup-parent').fadeIn(400, 
				function(){ 
					$('.add-wrap') 
						.css('display', 'block') 
						.animate({opacity: 1, top: '50%'}, 200);
					$(".wrapper").css({"position":"fixed"});
				});     
		};	
	});	 
	// $(document).on("change",function (e){
	// 	if ($("#img-prj").is(e.target)) {
	// 		// $("#filename").val($("#img-prj").val());
	// 		// console.log($("#img-prj").val());
	// 		$("#filename").val($("#img-prj").val());
	// 		$("#filename").trigger('change');
	// 	};
	// });
	$(document).on("keyup",function (e){
		if (e.keyCode === 27) {
			$(".popup-parent").addClass('hiddden');
			$('.add-wrap')
			.animate({opacity: 0, top: '40%'}, 300, 
				function(){ 
					$(this).css('display', 'none');
					$('.popup-parent').fadeOut(400); 
					$(".wrapper").css({"overflow":"hidden","position":"relative"});
				});
			$("#add-form")[0].reset();
		};
	});
});

 $('.wrap-submit-button').find('btn-reset').on('click', function(event) {
 	event.preventDefault();
 	grecaptcha.reset();
 });


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}



ajax = function() {;
	var t ={};
	publicInterface();

	function publicInterface() {
		t = {
			send: function(url, data) {
				var apiUrl = url,
					 apiData = data.serialize();

				var options = {
					url : apiUrl,
					type : "POST",
					dataType : "json",
					data : apiData
				};
				// console.log("I am ajax");
				// console.log(data);
				// console.log("Данные в спец виде:",data.serialize());
				return $.ajax(options);
			}
		};
	}
	return t;
}	

function cb_message(result,form){
	if (result === 'ERROR') {
		$('.cb-message').text("Ошибка, сообщение не отправлено!");
	};
	$('.cb-message') 
		.css('display', 'block') 
		.animate({opacity: 1}, 500);
	setTimeout( function() { 
		$('.cb-message') 
			.animate({opacity: 0},500);
	} 
	, 1000);
	setTimeout( function() { 
		$('.cb-message') 
			.css('display', 'none');
	} 
	, 2000);
	grecaptcha.reset();

	form[0].reset();
}
function cb_add(result,form){
	console.log(result);
	if (result['mes'] === 'ERROR') {
		$(".alert-error").removeClass('hidden');
		form[0].reset();
	}
	else{
		$(form).addClass('hidden');
		form[0].reset();
		$(".alert-added-box").removeClass('hidden');
		setTimeout( function() { 
			location.href='second.php';
		} 
		, 1000);		
	}
}
function cb_aut(result,form){
	console.log(result);
	console.log("I am callback for autorizate!");
	console.log(result['mes']);
	if (result['mes']=== 'OK') {
		$(".cb-aut").text('Данные верные!');
		$(".cb-aut").show('fast');
		setTimeout( function() { 
			location.href='second.php';
		} 
		, 1000);
		
	}
	else{
		$(".cb-aut").show('fast');
		form[0].reset();
		setTimeout( function() { 
			$(".cb-aut").hide('fast');
		} 
		, 1000);
	}
}

function mymodule (){ 
	var me ={};
	var rules,
		form,
		flag,
		flfirst,
		error_mas,
		cal_bac,
		url; 
	publicInterface();

	function isHasObj (obj, where){
	  if (  where[obj] == null ) {
			return false;
	  };
	  return true;
	}

	function isEmpty( obj ) {
		for ( var prop in obj ){
			return false;
		}
		return true;
	}

	function resetform(){
		flfirst = true;
		// сбрасываем значения инпутов
		for ( var field in rules ) {  
			error_mas[field] = true;          
			 $(field).removeClass('input-error');
			 $(field).prev().addClass('hidden');                                           
		} 
	}

	function onFieldKeyup( e ){
		var fieldName = '#' + e.target.getAttribute('id');
		if (!isHasObj(fieldName, rules)) return;
		setInput(fieldName);
	}

	function setInput(fieldName){
		// console.log($(fieldName).val());
		var el_val = $(fieldName).val().trim();
		
		flag = true;
		if (rules[fieldName].required && el_val === '' || el_val.length > rules[fieldName].maxlength) {
			flag = false;
		};
		if (flag) {
			$(fieldName).removeClass('input-error');
			$(fieldName).prev().addClass('hidden');
			delete error_mas[fieldName];
		} 	else 
		{
			$(fieldName).addClass('input-error');
			$(fieldName).prev().removeClass('hidden');
			error_mas[fieldName] = true;
		}
	}

	function addFormListener(){
		form.on("submit",onSubmit);
		form.on("keyup change",onFieldKeyup);
		form.on("reset",resetform);
	}
	function onSubmit(e) {
		e.preventDefault();
		console.log("Mas error",error_mas);
		var obj;
			 u = url['url'];
		if (flfirst) {
			for (obj in error_mas) {
				setInput(obj);
			}
			flfirst = false;
		}
		if (isEmpty(error_mas)) {
			sendForm(u,form);
		}
	}

	function sendForm(url,data){
		console.log("Mas error",error_mas);
		console.log("go send");
		var defer = ajax().send(url,data);
		defer.done(function (ans) {
			cal_bac.fn(ans,form);
		});
		// Вот здесь вопрос!!!!
		defer.fail(function (){
			
		})
	}

	function publicInterface(){
		me = {
			validate : function (f, c) {              
				rules = c.rules || {},
				flfirst = true,
				error_mas = {},
				form = $(f);
				for (obj in rules){
					error_mas[obj] = true;
			 	}
			 	cal_bac = c.cal_bac || {};
			 	url = c.ajax;
				addFormListener(); 
				console.log(rules);
			}
		};
	}
	return me;
};

var form1 = new mymodule();
form1.validate($("#add-form"),{
	rules: {
		'#name-of-prj': {
			'required' : true,
			'maxlength' : 10
		},
		'#filename' : {
			'required' : true
		},
		'#url-prj' :{
			'required' : true
		},
		'#about-prj' : {
			'required' : true
		}
	},
	ajax: {
		'url' : 'add.php'
	},
	cal_bac: {
		fn : cb_add
	}
});

var form2 = new mymodule();
form2.validate($("#form-message"),{
	rules: {
		'#user-name': {
			'required' : true
		},
		'#email' : {
			'required' : true
		},
		'#message' : {
			'required' : true
		}
	},
	ajax: {
		'url' : 'message.php'
	},
	// Обязательно нужно прописать! Иначе ошибка будет как лучше???
	cal_bac: {
		fn : cb_message
	}
});

var form3 = new mymodule();

form3.validate($("#autorizate"),{
	rules: {
		'#pass': {
			'requi red' : true
		},
		'#email' : {
			'required' : true
		}
	},
	ajax: {
		'url' : 'aut.php'
	},
	cal_bac: {
		fn : cb_aut
	}
});
$(".file-upload").on('click', function(e) {
	// Загрузка файла
	$('#img-prj').fileupload({
			url: 'file_upload.php',
	        add: function (e, data) {                                         
	           		data.submit();   	
	        },
	        done: function (e, data){    

	        			var res;
	        			res = JSON.parse(data.result);      			
	        			if (res['mes'] === 'OK') {
							console.log("Файл успешно загружен!");
							$('#filename').val(res['name_img']); 
							$("#filename").trigger('change');
	        			}
	        			else
	        			{
	        				console.log("Вы ввели не изображение!!");
							$('#filename').attr("placeholder","Выберите картинку!!!");
							$("#filename").trigger('change');
	        			}                   
	                  },
	        fail: function(e, data) {
	         	console.log("Неизвестная ошибка");
	         	$(".alert-error").removeClass('hidden');
	         	$(".add-info").reset();
	        }
	 });
});
