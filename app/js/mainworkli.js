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

		var toggle = $(".main-nav-toggle"),
			add= $(".add-project"),
			popup=$(".popup-parent"),
			add_pr=$(".add-wrap"),
			add_close=$(".form-close"),
			close_btn=$(".close-btn");

		if (!toggle.is(e.target) 
			&& toggle.has(e.target).length === 0) { 
			$(".main-nav-toggle").removeClass('active'); 
			$(".main-nav.header").removeClass('active');
		 };

		if (popup.is(e.target) && (popup.has(e.target).length <2 ) || (add_close.is(e.target) )) {
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
	$(document).on("change",function (e){
		if ($("#img-prj").is(e.target)) {
			// $("#filename").val($("#img-prj").val());
			// console.log($("#img-prj").val());
			$("#filename").val($("#img-prj").val());
			$("#filename").trigger('change');
		};
	});
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


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


// console.log($("#add-form").serialize());
// console.log($("#form-message").serialize());
// console.log($("#test").serialize());

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
				console.log("I am ajax");
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

	form[0].reset();
}
function cb_add(){
	console.log("I am call back function from add form");
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
		// console.log("Массив ошибок при ресете",error_mas);
	}

	function onFieldKeyup( e ){
		var fieldName = '#' + e.target.getAttribute('id');
		if (!isHasObj(fieldName, rules)) return;
		setInput(fieldName);
	}

	function setInput(fieldName){
		var el_val = $(fieldName).val().trim();
		console.log("fieldName",el_val);
		flag = true;
		// console.log(el_val);
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
		console.log("Массив ошибок в процессе валидации:",error_mas);
	}

	function addFormListener(){
		form.on("submit",onSubmit);
		form.on("keyup change",onFieldKeyup);
		form.on("reset",resetform);
	}
	function onSubmit(e) {
		e.preventDefault();
		var obj;
			 u = url['url'];
		if (flfirst) {
			for (obj in error_mas) {
				setInput(obj);
			}
			flfirst = false;
		}
		if (isEmpty(error_mas)) {
			// console.log("Перед отправкой",form);
			sendForm(u,form);
		}
	}

	function sendForm(url,data){
		var defer = ajax().send(url,data);
		// console.log(defer);
		defer.done(function (ans) {
			console.log("No problema-send");
			cal_bac.fn("SUCCESS",form);
		});
		defer.fail(function (){
			console.log("error");
			cal_bac.fn("ERROR",form);
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
				console.log("Массив ошибок в самом начале:",error_mas);
				addFormListener(); 
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
		},
		'#capcha' : {
			'required' : true
		}
	},
	ajax: {
		'url' : 'message.php'
	},
	cal_bac: {
		fn : cb_message
	}
});





