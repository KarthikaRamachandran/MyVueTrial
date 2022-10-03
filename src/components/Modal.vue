<script>
export default{
   methods:{
    closeModal: function(){
        document.getElementsByClassName("modal-wrapper")[0].style.display = "none";
        this.$emit("modalclosed");
    }
   },
   mounted(){
        document.body.appendChild(this.$refs.myModal);
   }
}
</script>
<template>
<div ref="myModal" class="modal-wrapper">
    <div class="modal">
        <div class="modal__header">
            <span class="modal__heading">Gross/Net Salary Evolution</span>
            <i class="modal__close" @click="closeModal" >X</i>
        </div>
        <div class="modal__content">

        </div>
        <div class="modal__footer"></div>
    </div>
</div>
</template>
<style scoped>
.modal {
    top: 10%;
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 16px #0000001A;
    border-radius: 12px 12px 0px 0px;
    opacity: 1;
    width: 90%;
    height: 100%;
    margin: 0px auto;
}
.modal-wrapper{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #97A0ACCC 0% 0% no-repeat padding-box;
    opacity: 1;
    z-index: 999;
}
.modal__heading{
    text-align: left;
    font: normal normal bold 24px/35px Source Sans Pro;
    letter-spacing: 0px;
    color: #001738;
    opacity: 1;
    display: inline-block;
    opacity: 1;
}
.modal__header{
    border-bottom: 1px solid #97A0AC;
    padding: 15px;
    background: white;
}
.modal__close{
    background: #001738 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    width: 32px;
    height: 32px;
    position: relative;
    float: right;
    text-align: center;
    color: white;
    border-radius: 300px;
    line-height: 1.5;
    cursor: pointer;
}
</style>