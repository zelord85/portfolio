var modalCount = $('.modal').length;
var i = 0;

var modalData = {
	modalContent: [
		{
			img: 'images/portfolio/devices/fizzyslim-desktop.jpg',
			title: 'FIZZYSLIM',
			description: 'This template was made one by one to according to the designers psd template styles, positions, fonts and their rules. There are some functional elements are implemented: spoiler with a choice of the quantity of goods and an outgoing sidebar menu with the order registration. For the "cart button", use a CSS hover effects animation.',
			list: '<li>Framework: Bootstrap</li><li>CSS / Jquery animation</li><li>Pixelperfect</li>',
			github_link: 'https://github.com/zelord85/www/tree/master/FizzySlim',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/FizzySlim/index.html',
		},
		{
			img: 'images/portfolio/devices/pingbuller-desktop.jpg',
			title: 'PINGBULLER',
			list: '<li>Адаптивная вёрстка без BootStrap;</li><li>Валидная разметка по методологии BEM;</li><li>Preprocessor SCSS;</li><li>Автоматизация сборки с помощью GULP;</li><li>Images and Scripts optimization.</li>',
			description: 'Для созддания этой темы были использованы: LESS jQuery jQuery Placeholder jQuery jCarousel jQuery Tooltipster jQuery PrettyPhoto Google Fonts HTML5 CSS3 IE8 Fix Тема разработана под CMS WordPress.',
			github_link: 'https://github.com/zelord85/www/tree/master/PingBuller',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/PingBuller/index.html',
		},
		{
			img: 'images/portfolio/devices/urlaubsgluck-desktop.jpg',
			title: 'URLAUBSGLÜCK',
			list: '<li>Верстка HTML5+CSS3+jQuery</li><li>Адаптивность без использования фреймворков</li><li>Поддержка IE9+</li><li>Images and Scripts optimization.</li>',
			description: 'Адаптивная верстка макета "URLAUBSGLÜCK" в рамках экзаменационной защиты проекта на курсе GoFrontend в GoIt.',
			github_link: 'https://github.com/zelord85/www/tree/master/UrlaubsGluck',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/UrlaubsGluck/index.html',
		},
		{
			img: 'images/portfolio/devices/hakaton-desktop.jpg',
			title: 'HAKATON',
			description: '',
			list: '',
			github_link: 'https://github.com/zelord85/www/tree/master/Hakaton',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/Hakaton/index.html',
		},
		{
			img: 'images/portfolio/devices/auction-desktop.jpg',
			title: 'AUCTION',
			description: '',
			list: '',
			github_link: 'https://github.com/zelord85/www/tree/master/Auction',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/Auction/index.html',
		},
		{
			img: 'images/portfolio/devices/zazor-desktop.jpg',
			title: 'ZAZOR',
			description: 'задание Сверстать макет Zazor: Верстка должна быть с пиксельной точностью Для разметки нужно использовать новые семантичные теги: header, footer, aside, nav, section, main, figure, figcaption Так же не забывайте о новых атрибутах форм, в хедере нужно применить placeholder="" Для создания всяческих теней, скругленных уголков и градиентов используем CSS3 Три формы после баннера можно не верстать, это будет бонусным заданием, для тех кто хочет помучиться. Не обязательно, но рекомендовано к выполнению',
			list: '',
			github_link: 'https://github.com/zelord85/www/tree/master/Zazor',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/Zazor/index.html',
		},
		{
			img: 'images/portfolio/devices/buildhome-desktop.jpg',
			title: 'BUILDHOME',
			description: 'Сверстать макет используя CSS Препроцессор, использовать одну из современных методологий организации CSS-кода. Так же прикрутить слайдер с помощью jQuery. Выполнить Кроссбраузерную и пиксельную точность.',
			list: '<li>Верстка HTML5+CSS3+jQuery</li><li>SCSS, BEM</li><li>SCSS, BEM</li>',
			github_link: 'https://github.com/zelord85/www/tree/master/BuildHome',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/BuildHome/index.html',
		},
		{
			img: 'images/portfolio/devices/rfactory-desktop.jpg',
			title: 'RFACTORY',
			list: '',
			description: '',
			github_link: 'https://github.com/zelord85/www/tree/master/rFactory',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/rFactory/index.html',
		},
		{
			img: 'images/portfolio/devices/cadastre-desktop.jpg',
			title: 'CADASTRE',
			description: ' ',
			list: '',
			github_link: 'https://github.com/zelord85/www/tree/master/Cadastre',
			demo_link: 'https://htmlpreview.github.io/?https://github.com/zelord85/www/blob/master/Cadastre/index.html',
		},
	],
};



$('.modal').click(function(){
    $('body').css('overflow', 'hidden');
	var i = $(this).attr('data-obg')-1;

	var img = '<img src="' + modalData.modalContent[i].img + '" alt="" >';
	var title =  '<h2>' + modalData.modalContent[i].title + '</h2>';
	var content = '<p>' + modalData.modalContent[i].description + '</p>';
	var list = '<ul>' + modalData.modalContent[i].list + '</ul>'
	var demo = '<a href="' + modalData.modalContent[i].demo_link + '" target="_blank" class="btn-demo">demo</a>';
	var repository = '<a href="' + modalData.modalContent[i].github_link + '" target="_blank" class="btn-veiwcode">view code</a>';

	$('.portfolio').after('<div id="modal" class="modal-background"><div class="modal-body">' + img + title + content + list + repository + demo +'</div></div>');



$('#modal').click(function(){
        $(this).remove().animate(2000);
        $('body').css('overflow', 'auto');
    });

// $('#modal').click(function(){
//         $(this).slideUp("normal").promise().done(function() {
//     $(this).remove();
// });


// });

});



// Filter init

$(function () {

		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
	  				selectors: {
	    			  target: '.grid',
	    			  filter: '.filter'	
		    		},
		    		  load: {
		      		  filter: '.design, .casual, .bootstrap'  
		      		}     
				});
			}
		};

		// Run the show!
		filterList.init();
});	