<template>
  <section >
    <div class="pt-5 pb-5 mt-5 container">
      <div class="row">
        <div class="cl-md-12">
          <h3 style="color: #012cda">{{$t("blogs.title")}}</h3>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-3" style="height: 310px">
            <div class="row g-0" style="height: 100%">
              <div class="col-md-4">
                <img
                  src="~/assets/img/18.png"
                  class="img-fluid rounded-start"
                  alt="..."
                  style="height: 100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title pt-3 pb-3">
                   {{$t("blogs.first_title")}}
                  </h5>
				  	<p class="mb-3"><span>{{$t("blogs.publish")}}</span><span> {{$t("blogs.first_post_date")}}</span> </p>
                  <p class="card-text pb-4">
                      {{$t("blogs.first_post_details")}}
                  </p>
                  <a href="#" class="card-text"
                    ><span class="text-muted">{{$t("blogs.read_more")}} </span>
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style="height: 310px">
            <div class="row g-0" style="height: 100%">
              <div class="col-md-4">
                <img
                  src="~/assets/img/11.png"
                  class="img-fluid rounded-start"
                  alt="..."
                  style="height: 100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title pt-3 pb-3">
                       {{$t("blogs.first_title")}}
                  </h5>
				  	<p class="mb-3"><span>{{$t("blogs.publish")}}</span><span> {{$t("blogs.first_post_date")}}</span> </p>
                  <p class="card-text pb-4">
                      {{$t("blogs.second_post_details")}}
                  </p>
                  <a href="#" class="card-text"
                    ><span class="text-muted">{{$t("blogs.read_more")}} </span>
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <ul class="nav nav-tabs nav-tabs-top">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#top-tab1"
                        data-toggle="tab"
                        >{{$t("blogs.popular")}}</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#top-tab2" data-toggle="tab"
                        > {{$t("blogs.trending")}}</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane show active" id="top-tab1">
                      <div class="card card-buttom mb-3" style="border: none">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="~/assets/img/3.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h6 class="card-title">
                                {{$t("blogs.first_title")}}
                              </h6>
                              <p class="mb-3">{{$t("blogs.first_post_date")}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane show active">
                      <div class="card card-buttom mb-3" style="border: none">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="~/assets/img/7.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h6 class="card-title">
                                {{$t("blogs.first_title")}}
                              </h6>
                              <p class="mb-3">{{$t("blogs.first_post_date")}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane show active">
                      <div class="card card-buttom mb-3" style="border: none">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="~/assets/img/14.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h6 class="card-title">
                                 {{$t("blogs.first_title")}}
                              </h6>
                              <p class="mb-3">{{$t("blogs.first_post_date")}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane show active">
                      <div class="card card-buttom mb-3" style="border: none">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="~/assets/img/19.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h6 class="card-title">
                                {{$t("blogs.first_title")}}
                              </h6>
                              <p class="mb-3">{{$t("blogs.first_post_date")}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="top-tab2">
                      <div class="tab-pane show active">
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="~/assets/img/3.png"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h6 class="card-title">
                                  How To make Super Website Design
                                </h6>
                                <p class="mb-3">Posted on 02 July, 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane show active">
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="~/assets/img/7.png"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h6 class="card-title">
                                  How To make Super Website Design
                                </h6>
                                <p class="mb-3">Posted on 02 July, 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane show active">
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="~/assets/img/14.png"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h6 class="card-title">
                                  How To make Super Website Design
                                </h6>
                                <p class="mb-3">Posted on 02 July, 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane show active">
                        <div class="card card-buttom mb-3" style="border: none">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="~/assets/img/19.png"
                                class="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h6 class="card-title">
                                  How To make Super Website Design
                                </h6>
                                <p class="mb-3">Posted on 02 July, 2019</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

