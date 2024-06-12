<script>
export default{
        name:'Footer',
        props:{
            section:Object
        },
        methods:{
            getimage(img){
            return new URL(img,import.meta.url).href
            },
        }
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-7" v-show="section.id!==1" :class="{position3section:section.id==2}">
                    <img v-for="(image,index) in section.images" class="position-absolute" :src="getimage(image)">
            </div>
            <div class="col-5 p-5">
                <div id="aaa" class="rounded-circle text-white fs-5 text-center " 
                    :class="{'bg-primary':section.logoText.id==0, 'bg-warning':section.logoText.id==1, green:section.logoText.id==2}">
                     <font-awesome-icon icon="fa-brands fa-squarespace" style="margin-top: 5px;"/> 
                </div>
                <span class="fw-semibold fs-4 ms-3">{{ section.logoText.text }}</span>
                <h2 class="display-4 fw-semibold mt-3">{{ section.title }}</h2>
                <p class="fs-4">{{ section.text }}</p>
                <button type="button" class="btn btn-lg text-white px-5 py-3 mt-3">{{section.button}}</button>
            </div>
            <div class="col-7" v-show="section.id===1">
                <img v-for="(image,index) in section.images" class="position-absolute" :src="getimage(image)" :class="{position5:index==1,position6:index==2,position7:index==3}">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss' as *;
.green{
    background-color: rgb(35, 212, 44);
}
.container{
    margin-top:15rem;
    .position3section{
            img{
                &:first-child{
                    left: 140px;
                }
                &:nth-child(2){
                    top: 120px;
                    left: 250px;
                }
                &:nth-child(3){
                    top: 330px;
                    left: 330px;
                }
                &:nth-child(4){
                    top: 100px;
                    left: 220px;
                }
                &:nth-child(6){
                    top: 40px;
                }
            }
        }
    .col-7{
        position: relative;
        .position5{
            top: 80px;
            left: 150px;
        }
        .position6{
            top: 40%;
            left: 40%;
        }
        .position7{
            top: 30%;
            left: 70%;
        }
    }
    button{
        background-color: $mainColor !important;
    }
    div .rounded-circle{
        width: 40px;
        height: 40px;
        display: inline-block;
    }
}

</style>
