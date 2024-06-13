<script>
import Component from '../components/Homepage/ComponentRepeat.vue';
import Leading from '../components/Homepage/LeadingOrganisations.vue';
export default{
        name:'Home',
        props:{
            store:Object
        },
        components:{
            Component,
            Leading,
        },
    };
</script>

<template>
     <!--Head section-->
    <div id="first-section-Home" class="py-5">
        <div class="container py-5 mb-4">
        <div class="row">
            <div class="col-6 left text-white">
                <h1 class="display-2 fw-semibold mt-5">Unlock Your Online Growth Potential</h1>
                <h3 class="fw-normal mt-5">Online marketing to secure customer retention, leads, and sales. We focus on the bigget picture</h3>
                <button type="button" class="btn btn-lg px-5 py-2 my-5 fw-semibold">Our Services <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
            </div>
            <div class="col-6 right px-5">
                <div class="text-center bg-white px-4 py-4 rounded-4 shadow-lg" id="a">
                    <figure class="mx-auto"><img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/marketing-consultant-expert.jpg"></figure>
                    <span class="d-block fs-5 fw-semibold fs-3">Richard Madsen</span>
                    <span class="d-block fs-5 text-secondary mt-3">Marketing Consultant Expert</span>
                    <span class="d-block number fs-5 fw-semibold mb-4 mt-3"><font-awesome-icon icon="fa-solid fa-phone" /> (555)802-1234</span>
                    <input type="text" class="form-control fs-5 py-3 my-3" placeholder="Your Name*" aria-label="Username" aria-describedby="addon-wrapping">
                    <input type="text" class="form-control fs-5 py-3 my-3" placeholder="Your Email*" aria-label="Username" aria-describedby="addon-wrapping">
                    <input type="text" class="form-control fs-5 py-3 my-3" placeholder="Your Phone Number*" aria-label="Username" aria-describedby="addon-wrapping">
                    <button type="button" class="btn btn-lg Mainbutton w-100 my-1">Get A Callback</button>
                    <small class="my-3">By submitting my data I agree to be contacted</small>
                </div>
            </div>
        </div>
    </div>
    </div>
     <!--3 section about -->
    <Component v-for="section in store.componentRepeatHome" :section="section"/>
     <!--Brand work with section-->
    <div class="container" id="brand-Work-With-Home">
        <div class="row">
            <div class="col12 text-center">
                   <h2 class="display-4 fw-semibold mt-5">Some Brands We Work With</h2>
                   <span class="fs-4">Lorem ipsum Tempora praesentium ducimus dolore.</span>
            </div>
            <div class="col-2 my-5" v-for="image in store.brandsWorkWith">
                <img :src="image" alt="brand">
            </div>
            <div class="col-12 d-flex border-top-0 shadow-b my-5" >
                <div class="col-1 p-0"><figure class="ms-auto"><img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/marketing-expert-cta.png"></figure></div>
            <div class="col-2 ps-2 pt-2">
                <span class="d-block fs-4 fw-semibold">Sandy Reiff</span><small>Marketing Consultant Expert</small>
            </div>
            <div class="col-6 pt-3"><span class="fs-3 fw-semibold">Drive Leads and Sales with Avada</span></div>
            <div class="col-3"><button type="button" class="btn btn-lg px-5 mt-3"><font-awesome-icon icon="fa-solid fa-phone" /> (555) 802-1234</button></div>
            </div>
        </div>
    </div>
    <!--Leading section-->
    <div class="container my-5" id="leading">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="display-4 fw-semibold">Trusted by Leading Organisations</h2>
            </div>
            <Leading v-for="col in store.leading" :col="col" :brand="store.brandsWorkWith"/>
            <div class="col-12 text-center my-5"><button type="button" class="btn btn-lg Mainbutton mt-3">Read More Case Studies</button></div>
        </div>
    </div>
    <!--Relationship section-->
    <div style="background-color: #F6F6F7;" class="py-5">
        <div class="container py-5">
        <div class="row py-5">
            <div class="col-6 pe-5 pt-5 mb-5">
                <h2 class="display-4 fw-semibold pe-3">We Boost Our <br>Client's Bottom Line by Optimizing Their Growth Potential.</h2>
                <p class="fs-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minus voluptas omnis debitis repudiandae qui fuga?</p>
                <button type="button" class="btn btn-lg Mainbutton mt-4">Why Work With Us</button>
            </div>
            <div class="col-6 mb-5">
                <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/we-boost-our-clients-1200x1098.jpg" alt="" width="100%" class="rounded-3">
            </div>
            <div class="col-6 pe-5 mt-5">
                <h3 class="fs-2">We build Relationships</h3>
                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. ab nobis odit vitae perspiciatis recusandae Ut!</p>
                <h3 class="mt-5 fs-2">Proprietary Processes</h3>
                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. ab nobis odit vitae perspiciatis recusandae qui</p>
            </div>
            <div class="col-6 ps-5">
                <div class="d-flex my-5">
                    <font-awesome-icon icon="fa-solid fa-signal" class="fs-4 p-4 rounded-4 signal" />
                    <div class="ms-4">
                        <h3 class="texthover">Accountability</h3>
                        <span>Lorem ipsum dolor sit amet adipisicing elit</span>
                    </div>
                </div>
                <div class="d-flex my-5">
                    <font-awesome-icon icon="fa-solid fa-signal" class="fs-4 p-4 rounded-4 signal" />
                    <div class="ms-4">
                        <h3 class="texthover">Transparency</h3>
                        <span>Lorem ipsum dolor sit amet adipisicing elit</span>
                    </div>
                </div>
                <div class="d-flex my-5">
                    <font-awesome-icon icon="fa-solid fa-signal" class="fs-4 p-4 rounded-4 signal" />
                    <div class="ms-4">
                        <h3 class="texthover">Investment</h3>
                        <span>Lorem ipsum dolor sit amet adipisicing elit</span>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center mt-5">
                <h2>Awards</h2>
            </div>
            <div class="col-3 text-center fs-5">
                <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-a.png" alt="" width="50%" style="filter: invert(90%) contrast(200%) opacity(0.7);">
                <span class="d-block">Winner Seo Master MAGT</span>
                <span>Smart Start Award 2017</span>
            </div>
            <div class="col-3 text-center fs-5">
                <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-b.png" alt="" width="50%" style="filter: saturate(5);">
                <span class="d-block">Top Social Media Agencies</span>
                <span>Next Partner 2018</span>
            </div>
            <div class="col-3 text-center fs-5">
                <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-c.png" alt="" width="50%">
                <span class="d-block">10 Fastest Growing Abstract</span>
                <span>Solution Providers 2019</span>
            </div>
            <div class="col-3 text-center fs-5">
                <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-d.png" alt="" width="50%" style="filter: invert(90%) saturate(5);">
                <span class="d-block">Nationl Excellence Agencie</span>
                <span>Award Winner 2020</span>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped lang="scss">
</style>
