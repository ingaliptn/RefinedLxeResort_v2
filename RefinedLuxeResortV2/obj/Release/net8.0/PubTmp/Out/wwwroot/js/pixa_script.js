(function($) {
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.header_section').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header_section');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.header_section .sticky-header, .header_section .mobile-sticky-header');
			if (windowpos > 500) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass('fixed-header animated slideInDown');
				scrollLink.fadeIn(300);
			} else{
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass('fixed-header animated slideInDown');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();


	// Mega Menu Offset
	function Mega_Menu(){
		if($('.mega-menu').length){
			var menu_width = $('.mega-menu').attr("data-width");
			$('.mega-menu').width(menu_width);
		}
	}
	Mega_Menu();


	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		var mobileMenuContent = $('.header_section .nav-outer .navigation_combo').html();
		var mobileHeaderContent = $('.header_section .nav-outer .outer-box').html();
		var stickyMenuContent = $('.header_section .header_wrap').html();
		$('.mobileNavCombo_header .nav-outer,.mobile-sticky-header .nav-outer').append('<div class="mobile-nav-toggler"><span class="hamburger__slice"></span><span class="hamburger__slice"></span><span class="hamburger__slice"></span></div>');
		$('.mobile-menu .nav_combo_block').append(mobileMenuContent);
		$('.mobileNavCombo_header .nav-outer').append(mobileHeaderContent);
		$('.sticky-header .header_wrap').append(stickyMenuContent);
		$('.sticky-header .navbar-collapse').addClass('show');
		$('.mobile-menu .nav_combo_block .navbar-collapse').addClass('show');
		$('.mobile-menu .close-btn, .mobile-menu-back-drop').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Submenu Dropdown Toggle
		if($('.header_section li.dropdown ul').length){
			$('.header_section .nav_multilabel li.dropdown').append('<div class="dropdown-btn"><span class="flaticon-arrow-right"></span></div>');
		}

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).parent('li').toggleClass('active');

		});

		//Megamenu Toggle
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.mega-menu').slideToggle(500);
		});


		//Dropdown toggle
		$(".navigation_combo .nav_multilabel li.dropdown").not( "li.has-mega-menu" ).on('mouseenter', function(){
		    $(this).children('ul').stop().slideDown(300);
		 });
		$(".navigation_combo .nav_multilabel li.dropdown").not( "li.has-mega-menu" ).on('mouseleave', function(){
		    $(this).children('ul').stop().slideUp(300);
		});

		//Mega Menu toggle
		$(".navigation_combo .nav_multilabel > li.has-mega-menu").on('mouseenter', function(){
		    $(this).children('.mega-menu').stop().slideDown(300);

		});
		$(".navigation_combo .nav_multilabel > li.has-mega-menu").on('mouseleave', function(){
		    $(this).children('.mega-menu').stop().slideUp(300);
		});
/*
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
*/

$('.mobile-nav-toggler').on('click', function(){
	if($('body').hasClass('mobile-menu-visible')){
		$('body').removeClass('mobile-menu-visible');
	}else{
		$('body').addClass('mobile-menu-visible');
	}
});

		//Sidebar Cart
		$('.header_section .cart-btn').on('click', function() {
			$('body').addClass('sidebar-cart-active');
		});
		
		//Menu Toggle Btn
		$('.header_section .cart-back-drop, .header_section .close-cart').on('click', function() {
			$('body').removeClass('sidebar-cart-active');
		});
		
		//Sidebar Cart
		$('.pageHeading_Block .mobileFilter_Sidebar').on('click', function() {
			$('body').addClass('sidebar-filter-active');
		});
		
		//Menu Toggle Btn
		$('.header_section .sidebar-filter .filter-back-drop, .header_section .sidebar-filter .close-filter').on('click', function() {
			$('body').removeClass('sidebar-filter-active');
		});
		
		//Sidebar Company Overview
		$('.header_section .companyInfo-btn').on('click', function() {
			$('body').addClass('sidebar-companyInfo-active');
		});
		//Menu Toggle Btn
		$('.header_section .companyInfo-back-drop, .header_section .close-companyInfo').on('click', function() {
			$('body').removeClass('sidebar-companyInfo-active');
		});
	}
	

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	//Make Content Sticky
	if ($('.sticky-sidebar').length) {
	    $('.sidebar-side').theiaStickySidebar({
	      // Settings
	      additionalMarginTop: 100
	    });
	}

    $(".portfolio-block,.portfolio-block-three, .portfolio-block-four").each(function(i, elem) {
        var url = $(this).find('img').attr("src");
        var Image_box = $(this).find('.image-box').css({
            "backgroundImage": "url(" + url + ")",
        });
    });

    //Sidebar Cart
	$('.main-header .cart-btn').on('click', function() {
		$('body').addClass('sidebar-cart-active');
	});
	
	//Sidebar Cart
	$('.pageHeading_Block .mobileFilter_Sidebar').on('click', function() {
		$('body').addClass('sidebar-filter-active');
	});
	
	//Sidebar Cart
	$('.main-header .companyInfo-btn').on('click', function() {
		$('body').addClass('sidebar-companyInfo-active');
	});



/* These help to header sticky reload */
/* ==========================================================================
   When document is Resize, do
   ========================================================================== */
   	$(window).on('resize', function() {
		Mega_Menu();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	/* ==========================================================================
   When document is loading, do
   ========================================================================== 
	
	$(window).on('load', function() {
		handlePreloader();
		defaultMasonry();
	});*/
	

})(window.jQuery);
