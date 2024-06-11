<script>
import Component from '../components/ComponentRepeat.vue';
export default{
        name:'Home',
        props:{
            store:Object
        },
        components:{
            Component,
        },
    };
</script>

<template>
    <div id="first-section-Home" class="py-5">
        <div class="container py-5">
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
                    <button type="button" class="btn btn-lg py-2 text-white w-100 my-2">Get A Callback</button>
                    <small class="my-3">By submitting my data I agree to be contacted</small>
                </div>
            </div>
        </div>
    </div>
    </div>

    <Component v-for="section in store.componentRepeatHome" :section="section"/>
</template>

<style scoped lang="scss">

</style>
