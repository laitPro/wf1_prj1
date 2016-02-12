$(document).ready(function() {

  console.log('Файл main.js успешно загружен');

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
        function(){ // пoсле aнимaции
          $(this).css('display', 'none');
          $('.popup-parent').fadeOut(400); 
          $("body").css({"overflow":"auto"});
        });
      
    };

    if (add.is(e.target) || add.has(e.target).length) {
      $('.popup-parent').fadeIn(400, 
        function(){ 
          $('.add-wrap') 
            .css('display', 'block') 
            .animate({opacity: 1, top: '50%'}, 200);
          $("body").css({"overflow":"hidden"});
        });   
    };
  });
});

(function() {
  var my,
    flfirst,
    forms = {};

  function addFormListener(){
     for(var form in forms) {
      // console.log(form);
        forms[form].element.on("submit",onSentform);
        // console.log(forms[form].element);
      }
     // for(var prop in forms) {
     //    // console.log(forms[prop]);
     //    forms[prop]
     //  }
    // forms[formName].element.on("submit", onSentform);
    // form.on("submit", onSentform); 
    // form.on("reset", onResetform);
    // // Устанавливаем обработчик ввода на каждый инпут
    // for ( var field in rules ) {
    //   // console.log(rules[field]);
    //   $(field).on("keyup", onFieldKeyup);
    //   // console.log(field);
    // }
    // console.log(forms);
  }
    // проверка принадлжености элемента массиву и возвращ позиции
    /*
    // use indexOf
    function include(o, a) {
      for (var i = 0; i < a.length; i++) {
          if (a[i] == o) return i;
      }
      return -1;
    }
  */

  function setInput(fieldName){
    var el_val = $(fieldName).val(),
        pos;

    flag = true;

    if (rules[fieldName].required && el_val === '' || el_val.length > rules[fieldName].maxlength) {
        flag = false;
    };


    var filed['currentFild'].errors = {
      'filedName': true,
    };

    var errors = filed['currentFild'].errors;
    erorrs['currentFild'] = true;

    if (flag) {
      $(fieldName).removeClass('input-error');
        $(fieldName).prev().addClass('hidden');

        delete errors['filedName'];
    } else {
      $(fieldName).addClass('input-error');
      $(fieldName).prev().removeClass('hidden');

      delete errors['filedName'];
    }
  }

  // function onResetform(){
  //   error_mas = [];
  //   // console.log("reset start");
  //   // console.log(error_mas);
  //   flfirst = true;
  //   // сбрасываем значения инпутов
  //   for ( var field in rules ) {  
        
  //     $(field).removeClass('input-error');
  //     $(field).prev().addClass('hidden');                                   
  //     } 
  // }

  // function onFieldKeyup(e) {
  //   var fieldName = '#' + e.target.getAttribute('id');
  //   // Нужно определить форму в которой произошло событие.
  //   var formName = this.getAttribute('data-form-name');
  //   setInput(fieldName, formName);
  // }
 
  function isEmpty(obj) {
    for(var prop in obj) {
      return false;
    }
    return true;
  }

  // function getnameform(e){
  //   return e.target.id;
  // }
  function onSubmitForm(e){
      console.log(e);
  }

  function onSentform(e){ 
    // if (flfirst) {
    //   for ( var field in rules ) {
    //     // setInput(field);
    //   }
    //   flfirst = false;
    //   console.log("sent from",forms[formName].element);
    //   return false;
    // }    
  //     if (isEmpty(errors)) {
  //       return true;
  //     }
    // Определили имя формы
    onSubmitForm(e);
    // getnameform(e);
    var who = e.target.id;

    // console.log("Этот код выполняется несколько раз");
    // console.log(forms[who]);
    return false;
  }
// function vivod(){
//   console.log(flfirst);
// }
  // example
  /*
  forms = {
    'formName': {
      element: '<jquery element>',
      rules: {

      }
    },
    'anotherFormName': {
      element: '<jquery element>',
      rules: {

      }
    }
  }
  */

  my =  {
    setForm: function(form, config) {
    
        forms[$(form).attr("id")] = {
        element : form,
        name : $(form).attr("id"),
        rules: config.rules || {},
        error_mas : {}
      };
          // if (!isEmpty(forms)) {
      //   console.log(forms);
      // };      
      addFormListener();
    }
  };

  window.validate = my;
})();



validate.setForm($("#add-form"),{
  rules: {
      '#name-of-prj': {
        'required' : true
      }
    }
});


validate.setForm($("#form-message"),{
  rules: {
      '#user-name': {
        'required' : true,
        'maxlength' :  10,
      },
      '#email' : {
        'required' : true,
      },
      '#message' : {
        'required' : true
      },
      '#capcha' : {
        'required' :true
      }
    }
});