<script>
export default{
        name:'Footer',
        props:{
            col:Object,
            brand:Array
        },
        data(){
            return{

            }
        },
        methods:{

        },
    };
</script>

<template>
    <div class="col-4">
        <div class="position-relative mb-3">
            <img :src="col.img" alt="leader" class="rounded-3">
            <div class="position-absolute bg-white rounded ">
                <img :src="brand[4]" alt="" v-show="col.id==1" class="w-100 p-1">
                <img :src="brand[3]" alt="" v-show="col.id==2" class="w-100 p-1">
                <img :src="brand[5]" alt="" v-show="col.id==3" class="w-100 p-1">
            </div>
        </div>
        <p class="fs-2 fw-semibold text-start">{{ col.p }}</p>
        <hr style="border-style:dashed">
        <span class="d-block fs-1 fw-semibold text-start">{{ col.span }}</span>
        <p class="text-start">{{ col.span2 }}</p>
    </div>
</template>

<style scoped lang="scss">
img{
    width: 400px;
}
.position-absolute{
    width: 170px;
    right: 20px;
    bottom: 10px;
}
.position-relative{
    div{
        display: none;
    }
    &:hover div{
        display: block;
    }
}
</style>
