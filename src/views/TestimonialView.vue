<template>
<section class="section pb-5 pt-5" id="testimonials">
    <div class="container">
      <!-- ***** Section Title Start ***** -->
      <div class="row">
        <div class="col-lg-12">
          <div class="center-heading">
            <!-- <h2 class="section-title">Testimonials</h2> -->
          </div>
        </div>
        <!-- <div class="offset-lg-3 col-lg-6">
          <div class="center-text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          </div>
        </div> -->
      </div>
      <!-- ***** Section Title End ***** -->

      <div class="row testimonials-wrapper">
        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://i.ibb.co/zb68H79/T02-LW4-RMXJQ-U05-UP1-S8-CD6-d563e63721ee-512.jpg" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Caela Ward</h3>
              <span>colleague</span>
              <div class="txt">
                <p>Heather Mtuedwa is not only an exceptionally hardworking individual but also possesses an incredibly compassionate heart. Her dedication to her work is truly admirable, as she consistently goes above and beyond to achieve excellence. What truly sets her apart is the genuine care and kindness she brings to every interaction.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->

        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://iili.io/JYdOCvf.jpg" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Ntando Nokilana</h3>
              <span>colleague</span>
              <div class="txt">
                <p>Heather is truly an exceptional young professional. Her remarkable work ethic consistently shines through in her projects. It is evident that she thrives under pressure, demonstrating the ability to navigate challenging situations with poise. Heather is always eager to both seek and offer assistance, creating a collaborative and supportive environment. Her presence brings a refreshing and focused vibe to the spaces she occupies.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->
        
        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://iili.io/JYJlWve.jpg" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Onika Sileku</h3>
              <span>colleague</span>
              <div class="txt">
                <p>I have continually been amazed by Heather's exceptional skills in coding, and designing, and her innate intelligence. Her dedication and talents as an aspiring developer shine through, and I am certain that she will excel in any project she takes on</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->
        
        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://iili.io/JYdNos1.jpg" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Haanim Pietersen</h3>
              <span>colleague</span>
              <div class="txt">
                <p>Heather Mtuedwa is a hardworking student that is easy to talk to and always starts and ends the day with a smile. She is the type of person you will need to uplift you when you are not feeling yourself or the day.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->
        
        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://iili.io/JYdN8ru.png" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Ammara Hoosen</h3>
              <span>colleague</span>
              <div class="txt">
                <p>Throughout my interactions with Heather, I have come to recognize her as a highly friendly and approachable individual, making her an absolute joy to be around.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->
        
        <!-- ***** Testimonials Item Start ***** -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="testimonials-item">
            <div class="user">
              <img src="https://iili.io/JY2jVfe.jpg" alt="">
            </div>
            <div class="testimonials-content">
              <h3 class="user-name">Inganathi Stemela</h3>
              <span>colleague</span>
              <div class="txt">
                <p>I have had the pleasure of knowing Heather Mtuedwa for quite some time, and I can confidently say that she is an exceptional individual. Her dedication, kindness, and positive attitude make them a joy to be around.  Heather always goes above and beyond, leaving a positive impact on everyone she encounter</p>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Testimonials Item End ***** -->
      </div>
    </div>
  </section>
  <!-- ***** Testimonials End ***** -->
</template>
<script>
export default {
    computed:{
      Testimonials(){
        return this.$store.state.testimonials
      }
    },
    mounted(){
      this.$store.dispatch('fetchTestimonials')
    }
  }

  
</script>
<style scoped >
#testimonials {
    background: #615f5f;
    min-height: 100vh;
}
.center-heading {
  text-align: center;
}

.center-heading .section-title {
  font-weight: 400;
  font-size: 28px;
  color: #3B566E;
  letter-spacing: 1.75px;
  line-height: 38px;
  margin-bottom: 20px;
}

.center-heading.colored .section-title {
  color: #ffffff;
}

.center-text {
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: #6F8BA4;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 50px;
}

.center-text.colored {
  color: #C7E5FF;
}

.center-text p {
  margin-bottom: 30px;
}
.testimonials-item {
  display: block;
  position: relative;
  margin-bottom: 30px;
}

.testimonials-item:hover .user {
  top: -20px;
}

.testimonials-item:hover .testimonials-content:before {
  opacity: 1;
}

.testimonials-item:hover .testimonials-content .user-name {
  color: #fff;
}

.testimonials-item:hover .testimonials-content .txt:before, .testimonials-item:hover .testimonials-content .txt:after {
  opacity: .1;
}

.testimonials-item:hover .testimonials-content span, .testimonials-item:hover .testimonials-content p {
  color: #d6cfcf !important;
}

.testimonials-item .user {
  width: 88px;
  height: 88px;
  position: relative;
  position: absolute;
  top: -10px;
  left: 25px;
  z-index: 3;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
}
.testimonials-item .user img{
  max-width: 100%;
}

.testimonials-item .testimonials-content {
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  position: relative;
}

.testimonials-item .testimonials-content:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(135deg, #000000 0%, #6c6363 100%);
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.testimonials-item .testimonials-content .user-name {
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: #3B566E;
  margin-top: 20px;
  padding-left: 130px;
  letter-spacing: 0.69px;
  margin-bottom: 5px;
  position: relative;
  z-index: 3;
}

.testimonials-item .testimonials-content span {
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #6F8BA4;
  letter-spacing: 0.6px;
  padding-left: 130px;
  padding-right: 25px;
  position: relative;
  z-index: 3;
}

.testimonials-item .testimonials-content .txt {
  position: relative;
  overflow: hidden;
}

.testimonials-item .testimonials-content .txt:before {
  font-family: FontAwesome;
  content: "\f10d";
  position: absolute;
  left: 25px;
  top: 25px;
  color: #3B566E;
  z-index: 1;
  font-size: 40px;
  opacity: .4;
  color: #e1ecf4;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.testimonials-item .testimonials-content .txt:after {
  font-family: FontAwesome;
  content: "\f10e";
  position: absolute;
  right: 25px;
  bottom: 15px;
  color: #3B566E;
  z-index: 1;
  font-size: 40px;
  opacity: .4;
  color: #e1ecf4;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.testimonials-item .testimonials-content .txt p {
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 25px;
  margin-top: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #6F8BA4;
  letter-spacing: 0.6px;
  line-height: 26px;
  position: relative;
  z-index: 3;
}

</style>