<?php 
	session_start();
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class=" ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class=" ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class=" ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="ru"> <!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>Wf1</title>
	<meta name="description" content="">

	<!-- Fonts Loader from _fonts.css (HTML5 LocalStorage) -->
<script>!function(){function e(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function t(e){return window.localStorage&&localStorage.font_css_cache&&localStorage.font_css_cache_file===e}function n(){if(window.localStorage&&window.XMLHttpRequest)if(t(o))a(localStorage.font_css_cache);else{var n=new XMLHttpRequest;n.open("GET",o,!0),e(n,"load",function(){4===n.readyState&&(a(n.responseText),localStorage.font_css_cache=n.responseText,localStorage.font_css_cache_file=o)}),n.send()}else{var c=document.createElement("link");c.href=o,c.rel="stylesheet",c.type="text/css",document.getElementsByTagName("head")[0].appendChild(c),document.cookie="font_css_cache"}}function a(e){var t=document.createElement("style");t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)}var o="css/font.css";window.localStorage&&localStorage.font_css_cache||document.cookie.indexOf("font_css_cache")>-1?n():e(window,"load",n)}();</script>
	<!--[if lt IE 9]>
	<script src="js/html5shiv.min.js"></script>
	<![endif]-->
	<!-- Load CSS Compilled without JS -->
		<noscript>
			<link rel="stylesheet" href="css/_fonts.css">
		</noscript>
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/third.css">
		<link rel="stylesheet" href="css/five.css">
		<link rel="stylesheet" href="css/_media.css">
		<!-- Нужно все скомпилировать что выше и закинуть в этот файл -->
		<!-- <link rel="stylesheet" href="compiled.min.css"> -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="apple-touch-icon" sizes="57x57" href="img/fav/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="img/fav/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/fav/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="img/fav/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/fav/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="img/fav/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="img/fav/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="img/fav/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="img/fav/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="img/fav/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="img/fav/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="img/fav/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/fav/favicon-16x16.png">
	<link rel="manifest" href="img/fav/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="img/fav/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<script src="js/modernizr.js"></script> 
	<script src='https://www.google.com/recaptcha/api.js'></script>

	
</head>
<body>
	<div class="wrapper">
		<header class="main-header">
			<div class="container-big clearfix">
				<a href="index.html" class="logo">
					<img src="img/logo.png" height="71" width="95" alt="Logo" class="logo-img ">
					<h1 class="logo-text">
						LoftSchool...
					</h1>
				</a>
				<a class="main-nav-toggle" href="#"><span></span></a>
				<ul class="icons">
					<li class="icons-item">
						<a href="#" class="icon icon-fb">facebook</a>				
					</li>
					<li class="icons-item">
						<a href="http://vk.com/laitinen_nikita" class="icon icon-vk">vkontakte</a>
					</li>
					<li class="icons-item">
						<a href="#" class="icon icon-tw">twitter</a>					
					</li>
					<li class="icons-item">
						<a href="https://github.com/nikitalait" class="icon icon-gt">githab</a>
					</li>
				</ul>
				<ul class="main-nav header">	
						<li class="mn-link-item ">
							<a href="index.php" class="link">Обо мне</a>
						</li>
						<li class="mn-link-item">
							<a href="second.php" class="link">Мои работы</a>
						</li>
						<li class="mn-link-item active">
							<a href="third.php" class="link">Обратная связь</a>
						</li>        				
				</ul>
			</div>
		</header>
		<div class="main-content">
			<div class="container clearfix">
				<main class="main-content-wrapper">
						<section class="content-section">
								<h2 class="content-section-title">У вас интересный проект? Напишите мне</h2>
								<div class="wrap-info third clearfix">
									<form action="/" class="user-form-message" id="form-message" method="POST">
									      <div class="wrap-user-info">
									        <label for="user-name">Имя</label>
									        <div class="tooltip-wrap">
									        	<span class="tooltip-l hidden">введите имя</span>
									        	<input type="text" id="user-name" name="user-name"
									        placeholder="Как к Вам обращаться" class="form-input" />
									        </div>									        
									      </div>
										    <div class="wrap-user-info email">
										    	 <label for="email">Email</label>
										    	<div class="tooltip-wrap">
										    		<span class="tooltip-r hidden">введите email</span>
										    	 	<input type="text" id="email" name="email" class="form-input"
										        		placeholder="Куда мне писать" value="" />
												</div>
										    </div> 
									      	<div class="wrap-message">
										      <label for="message">Сообщение</label>
										      <div class="tooltip-wrap">
										      		<span class="tooltip-l hidden">ваш вопрос</span>
										      		<textarea id="message" name="message" class="form-input " placeholder="Кратко в чем суть"></textarea>
										      </div>										      
									    	</div>
									    	<div class="wrap-capcha">
									    		<!-- <label for="capcha">Введите код, указанный на картинке</label>
									    		<div class="wrap-capcha-img">
									    			<img src="img/capcha.png" height="66" width="173" alt="" class="capcha-img">	
									    		</div>
									    		<div class="tooltip-wrap capcha">
									    			<span class="tooltip-r hidden">код капчи</span>
									    			<input type="text" id="capcha" name="capcha" class="form-input"
										        	placeholder="Введите код" value="" />
									    		</div> -->
									    		<div class="tooltip-wrap capcha">
									    			<div class="g-recaptcha" id="capcha" data-sitekey="6LewzBgTAAAAAPpc7mjcAKatvenqMKEtdxnLrhIj"></div>
									    			
									    		</div>	
									    	</div>
									    	<!-- <div class="g-recaptcha" placeholder="wgwg" data-sitekey="6LfOrRgTAAAAAGzkTv1Rj8gO91HaGJYuqitAbrJD"></div> -->
										

										    <div class="wrap-submit-button">
										      <button type="submit" name="submit-form-sent" class="btn btn-sent" id="sent">Отправить</button>
										      <button type="reset"  name="submit-form-reset" class="btn btn-reset">Очистить</button>
										    </div>
  									</form>
								</div>
						</section>		
				</main>
				<aside class="sidebar">	
					<ul class="main-nav">	
						<li class="mn-link-item">
							<a href="index.php" class="link">Обо мне</a>
						</li>
						<li class="mn-link-item">
							<a href="second.php" class="link">Мои работы</a>
						</li>
						<li class="mn-link-item active">
							<a href="third.php" class="link">Обратная связь</a>
						</li>        				
					</ul>
					<div class="contacts">	
						<div class="contacts-title-wrap">
							<div class="contacts-title">
								<span class="contacts-title-text">Контакты</span>
							</div>
						</div>
						<ul class="contacts-list">
							<li class="contact">
								<a href="mailto:nikitalaitinen@ya.ru" class="contact-text contact-text-email" title="pochta@mail.ru">
									nikitalaitinen@ya.ru
								</a>
							</li>
							<li class="contact">
								<a href="tel:+7914097648" class="contact-text contact-text-phone" title="+79114097648">
									+79114097648
								</a>								
							</li>
							<li class="contact">
								<a href="skype:nikitalait?call" class="contact-text contact-text-skype" title="nikitalait">
									nikitalait
								</a>								
							</li>
						</ul>
					</div>
				</aside>
			</div>
			<div class="container">
				<ul class="social-icons">
					<li class="social-icon-item">
						<a href="#" class="social-icon fb">
							fb
						</a>				
					</li>
					<li class="social-icon-item">
						<a href="http://vk.com/laitinen_nikita" class="social-icon vk">
							vk
						</a>				
					</li>
					<li class="social-icon-item">
						<a href="#" class="social-icon tw">
							tw
						</a>				
					</li>
					<li class="social-icon-item">
						<a href="https://github.com/nikitalait" class="social-icon gt">
							gt
						</a>				
					</li>
					
				</ul>
			</div>
		</div>
		<footer class="main-footer">
			<div class="container">
				<?php
				if ($_SESSION['aut'] == 'true') {
				?>	
					<a href="logout.php" class="log-in">
					выход
					</a>
				<?php
				}
				else {					
				?>					
					<a href="fourth.php" class="log-in">
						вход
					</a>
				<?php 
				}
				 ?>
				<div class="copyright">
					 &copy; 2016. Это мой сайт, пожалуйста, не копируйте и не воруйте его
				</div>  
	      	</div>
		</footer>
	</div>

	<div class="cb-message">
		Сообщение отправлено!
	</div>
	




<div class="hidden"></div>

	


<script src="js/jquery.min.js"></script>
<script src="js/jquery.placeholder.min.js"></script>
<script src="js/mainworkli.js"></script>

	
</body>
</html>