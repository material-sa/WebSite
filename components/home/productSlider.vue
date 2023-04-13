<template>
  <section class="section meet-doctors bg-white">
    <div class="text-1 mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex justify-content-between px-4">
            <h2 class="text1" style="align-items: center">{{ title }}</h2>
            <a href="#" class="mt-1 task1">{{$t("main_page.more")}}</a>
          </div>
        </div>
      </div>
    </div>
	<div id="our_doctor" class="owl-carousel text-center">
<client-only>
   <carousel v-bind="options">		
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit card-a">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit" data-toggle="modal" data-target="#delete">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
      <div class="shadow item1" data-toggle="modal" data-target="#Buy">
        <div class="doctor text-center">
          <a href="#" class="a-edit">
            <img
              src="~/assets/img/water.png"
              alt="Dr. Albert Sandoval"
              class=""
              width="150"
              height="150"
            />
            <hr />
            <div class="doctors-name">Arwa Water 330mlx 40</div>
            <div class="doctors-position1">price</div>
            <div class="size">
              13.00 SAR <span class="text-danger">10.00.SAR [10% off]</span>
            </div>
          </a>
        </div>
      </div>
	  </carousel>
        </client-only>
    </div>
  </section>
</template>


<script>
export default {
  props: { title: String },
};
</script>