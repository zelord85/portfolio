var modalCount = $('.modal').length;
var i = 0;

var modalData = {
	modalContent: [
		{
			img: 'images/portfolio/pingbuller-devices.png',
			title: 'FIZZYSLIM',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			list: '<li>item</li><li>item</li><li>item</li><li>item</li>',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/pingbuller-devices.jpg',
			title: 'PINGBULLER',
			list: '<li>Адаптивная вёрстка без BootStrap;</li><li>Валидная разметка по методологии BEM;</li><li>Preprocessor SCSS;</li><li>Автоматизация сборки с помощью GULP;</li><li>Images and Scripts optimization.</li>',
			description: 'Для созддания этой темы были использованы: LESS jQuery jQuery Placeholder jQuery jCarousel jQuery Tooltipster jQuery PrettyPhoto Google Fonts HTML5 CSS3 IE8 Fix Тема разработана под CMS WordPress.',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/pingbuller-devices.png',
			title: 'CADASTRE',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			list: '',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/auction-devices.png',
			title: 'BUILDHOME',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			list: '',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/auction-devices.png',
			title: 'AUCTION',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			list: '',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/pingbuller-devices.png',
			title: 'ZAZOR',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			list: '',
			github_link: '#',
			demo_link: '#',
		},
		{
			img: 'images/portfolio/pingbuller-devices.png',
			title: 'RFACTORY',
			list: '',
			description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
			github_link: '#',
			demo_link: '#',
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
	var demo = '<a href="' + modalData.modalContent[i].demo_link + '" target="blank">demo</a>';
	var repository = '<button>view code</button>';

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
		      		  filter: '.app, .card, .icon, .logo, .bootstrap'  
		      		}     
				});
			}
		};

		// Run the show!
		filterList.init();
});	