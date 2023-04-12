<template>
	<header class="header">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-2 float-left">
						<div class="logo">
							<a href="index.html"><img alt="Logo" src="~/assets/img/logo.png" width="56" height="50"></a>
						</div>
					</div>
					<div class="col-md-10">
						<nav class="navbar navbar-expand-md p-0">
							<div class="navbar-collapse collapse" id="navbar">
								<ul class="nav navbar-nav main-nav float-right ml-auto">
									<li class="active nav-item">
										<NuxtLink to="/" class="nav-link">{{$t('main_page.home')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink to="/about-us" class="nav-link">{{$t('main_page.about')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink to="/products" class="nav-link">{{$t('main_page.products')}}</NuxtLink>
									</li>
									<li class="nav-item">
										<NuxtLink to="/contact" class="nav-link">{{$t('main_page.contact')}}</NuxtLink>
									</li>

									<li class="dropdown nav-item">
										
										 <a class="nav-link"  @click="changeLanguage">{{currentLang}} <b
												class="caret"></b></a>
										 

										<!-- <a class="dropdown-toggle nav-link" data-toggle="dropdown">AR <b
												class="caret"></b></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="blog.html"></a>
											<a class="dropdown-item" href="blog-left-sidebar.html">EN</a>
										</div> -->

									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
	name: "Header",
	
	computed: {
		currentLang() {
		return this.$i18n.locale == 'ar' ? 'EN' : 'AR'
		},
   },
	methods: {
		 changeLanguage() {
           // handleLangaugeChange(this, this.$i18n.locale === 'ar' ? 'en' : 'ar', true)
        },
	}
	};
</script>
