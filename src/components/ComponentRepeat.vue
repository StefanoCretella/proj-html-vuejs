<script>
export default{
        name:'Footer',
        props:{
            section:Object
        },
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-7" v-show="section.id!==1">
                
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
