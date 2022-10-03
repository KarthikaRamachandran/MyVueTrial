<script>
import Modal from "../components/Modal.vue";
export default{
    components: {
        Modal
    },
    props:{
        details: {
            type: Object
        },
        activePanel:{
            type: String
        }
    },
    data(){
        return {
            months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            prevPDF: null,
            showMenu: false,
            showModalDlg: false
        }
    },
    watch: {
        details: function () {
            // hide all pdf during tab change.
            let elements = document.getElementsByClassName("pdffiles"),
                length = elements.length, ele;
            for(let i = 0; i < length; i++){
                ele = elements[i];
                ele.style.display = "none";
            }
            this.prevPDF = undefined;
        }
    },
    methods: {
        getMonth(date) {
          return this.months[new Date(date).getMonth()];
        },
        getYear(date){
            return new Date(date).getFullYear();
        },
        getCTC(detail, isGrossPay){
            let str;
            detail.filter((paydetails)=>{
                if(paydetails.key == (isGrossPay ? "GROSS" : "NET PAY")){
                    str = paydetails.amount + ' ' + paydetails.currency;
                }
            });
            return str;
        },
        getFileName(accessToken){
            return "/src/assets/payslipsFiles/"+accessToken+".pdf";
        },
        togglePDFView(ev){
            if(this.prevPDF){
                this.prevPDF.style.display = "none";
            }
            let par = ev.target;
            if(par.nodeName == "svg"){
                par = par.parentElement;
            }
            if(par.nodeName == "SPAN"){
                par = par.parentElement;
            }
            let mainPar = par;
            par = par.parentElement.nextElementSibling;
            if(this.prevPDF !== par){
                par.style.display = "block";
                this.prevPDF = par;
                document.querySelector(".chevron_icon",mainPar).setAttribute("vuetitle","Close");
            }else{
                document.querySelector(".chevron_icon",mainPar).setAttribute("vuetitle","Expand");
                this.prevPDF = undefined;
            }
        },
        showTooltip(ev, position){
            ev.stopImmediatePropagation();
            ev.preventDefault();
            let target = ev.target,
                title = target.getAttribute("vuetitle"),
                element = document.createElement("div");
            element.classList.add("tooltip");
            element.textContent = title;
            document.body.appendChild(element);
            element.style.top = (ev.clientY - (position ? (element.offsetHeight/2) : 0))+"px";
            element.style.left = (ev.clientX - (position ? (element.offsetWidth+10) : 0))+"px";
            return false;
        },
        removeTooltip(){
            let tooltipEle = document.getElementsByClassName("tooltip"),
                length = tooltipEle.length, ele;
            for(let i = 0; i < length; i++){
                ele = tooltipEle[i];
                document.body.removeChild(ele);
            }
        },
        toggleFilterMenu(ev){
            this.showMenu = !this.showMenu;
            let filterMenu = document.getElementById("filterMenu"),
                target = ev.target;
            if(target.nodeName == "svg"){
                target = target.parentElement;
            }
            filterMenu.style.top = (ev.clientY + (target.offsetHeight/2))+"px";
            filterMenu.style.left = target.offsetLeft+"px";
            filterMenu.style.display = this.showMenu ? "block": "none";
        },
        showModal(ev){
            this.showModalDlg = !this.showModalDlg;
        },
        modalHide(ev){
            this.showModalDlg = false;
        }
    }
}
</script>

<template>
<svg style="display:none">
    <symbol id="chevron_down" width="5" height="8" viewBox="0 0 5 8">
      <path d="M4,0,8,3.852,6.809,5,4,2.3,1.191,5,0,3.852Z" transform="translate(0 8) rotate(-90)"/>
    </symbol>
     <symbol id="chevron_up" width="5" height="8" viewBox="0 0 5 8">
      <path d="M4,0,8,3.852,6.809,5,4,2.3,1.191,5,0,3.852Z" transform="translate(0 8) rotate(-90)" />
    </symbol>
    <symbol id="filtericon" width="16" height="16" viewBox="0 0 16 16">
    <g id="Group_10117" data-name="Group 10117" transform="translate(-1724 -530)">
        <path id="Path_5016" data-name="Path 5016" d="M3.5,16a.5.5,0,0,1-.5-.5V.5a.5.5,0,0,1,1,0v15a.5.5,0,0,1-.5.5" transform="translate(1724 530)" fill="#001738"/>
        <path id="Path_5017" data-name="Path 5017" d="M12.5,16a.5.5,0,0,1-.5-.5V.5a.5.5,0,0,1,1,0v15a.5.5,0,0,1-.5.5" transform="translate(1724 530)" fill="#001738"/>
        <path id="Path_5018" data-name="Path 5018" d="M6.5,12.5H.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1" transform="translate(1724 530)" fill="#001738"/>
        <path id="Path_5019" data-name="Path 5019" d="M15.5,4.5h-6a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1" transform="translate(1724 530)" fill="#001738"/>
    </g>
    </symbol>
    <symbol id="gross__evolution__icon" width="24" height="24" viewBox="0 0 24 24">
    <defs>
        <clipPath id="clip-path">
        <rect id="Rectangle_8305" data-name="Rectangle 8305" width="24" height="24" fill="none"/>
        </clipPath>
    </defs>
    <g id="Group_10127" data-name="Group 10127" clip-path="url(#clip-path)">
        <path id="Path_5020" data-name="Path 5020" d="M23.5,23H21V7.972A.973.973,0,0,0,20.029,7H17.972A.973.973,0,0,0,17,7.972V23H14V16a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v7H7V13.957A.958.958,0,0,0,6.043,13H3.957A.958.958,0,0,0,3,13.957V23H1V.5a.5.5,0,0,0-1,0V24H23.5a.5.5,0,0,0,0-1M4,23l-.041-9H6v9Zm7-7h2v7H11Zm7,7L17.972,8H20V23Z" fill="#001738"/>
        <path id="Path_5021" data-name="Path 5021" d="M5,11.125a.5.5,0,0,0,.4-.193L8.572,6.846l3.469,2.973,7.327-7.981a.5.5,0,0,0-.737-.676L11.958,8.431,8.427,5.4,4.605,10.318A.5.5,0,0,0,5,11.125" fill="#001738"/>
    </g>
    </symbol>

</svg>
<table class="paysliptable" cellpadding="15" >
    <thead>
        <td class="serialno">#</td>
        <td class="dateinfo">Month</td>
        <td class="payslipfiles">Payslips</td>
        <td class="grosspay">Gross salary</td>
        <td class="netpay">Net pay</td>
        <td @click="toggleFilterMenu" >
            <svg class="filtericon">
                <use xlink:href="#filtericon"></use>
            </svg>
        </td>
        <i vuetitle="View salary evolution" @mouseenter="showTooltip($event,'left')" @mouseleave="removeTooltip" @click="showModal" >
            <svg class="gross__evolution">
                <use xlink:href="#gross__evolution__icon"></use>
            </svg>
        </i>
    </thead>
    <tbody>
    <template v-for="detail,key in details">
        <tr>
            <td class="serialno">{{key+1}}</td>
            <td class="dateinfo" @click="togglePDFView($event)" >
                <span class="chevron_icon" vuetitle="Expand" @mouseenter="showTooltip($event)" @mouseleave="removeTooltip">
                    <svg class="chevronicons upicon">
                        <use xlink:href="#chevron_up"></use>
                    </svg>
                    <svg class="chevronicons downicon">
                        <use xlink:href="#chevron_down"></use>
                    </svg>
                </span>
                <span>
                {{getMonth(detail.payrollDate)}} {{getYear(detail.payrollDate)}}
                </span>
            </td>
            <td class="payslipfiles">{{detail.fileAttachment.file.label}}</td>
            <td class="grosspay">{{getCTC(detail.payslipEntries, true)}}</td>
            <td class="netpay" colspan=2 >{{getCTC(detail.payslipEntries)}}</td>
        </tr>
        <tr class="pdffiles" >
            <embed v-bind:src=getFileName(detail.fileAttachment.accessToken) width="1200" height="500" />
        </tr>
    </template>
    </tbody>
</table>
<Modal v-if="showModalDlg" @modalclosed="modalHide"></Modal>
<ul class="filtermenu" id="filterMenu" >
    <li class="filtermenu__item">Gross & Net</li>
    <li class="filtermenu__item">Gross only</li>
    <li class="filtermenu__item">Net only</li>
</ul>
</template>
<style scoped>
.paysliptable {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}
.paysliptable thead td{
    color: #657387;
}
.paysliptable th,
.paysliptable td {
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    width: 20%;
    text-align: left;
    vertical-align: middle;
    word-wrap: break-word;
    white-space: nowrap;
}

.paysliptable th {
    font-weight: bold;
}
.paysliptable .serialno{
    width: 2%;
}
.paysliptable .dateinfo:not(thead .dateinfo){
    color: #FF5F1F;
    cursor: pointer;
    width: 5%;
}
.paysliptable .dateinfo{
    width: 10%;
}
.paysliptable .payslipfiles{
    width: 60%;
}
.paysliptable .grosspay{
    width: 10%;
}
.paysliptable .netpay{
    width: 10%;
}
.pdffiles{
    width: 100%;
    height: 100%;
    display: none;
}
.chevronicons{
    width: 8px;
    height: 8px;
    display: none;
}
.chevronicons.upicon{
    transform: rotate(90deg);
}
.chevronicons.downicon{
    transform: rotate(-90deg);
}
tr:hover .chevronicons{
    display: block;
}
tr:hover td{
    background: #f9b599;
}
.chevron_icon{
    display:inline-block;
    margin-right:12px;
    width: 16px;
    align-items: center;
}
.chevron_icon:hover{
    border: 1px solid black;
    border-radius: 100px;
    background-color: black;
}
.chevron_icon:hover .chevronicons{
    fill: #FF5F1F;
    padding-left: 4px;
    padding-right: 4px;
}
.filtericon{
    width: 18px;
    height: 18px;
    border: 1px solid #FFF;
    cursor: pointer;
}
.filtericon:hover{
    border: 1px solid #eaeaea;
    border-radius: 200px;
    background-color: #FFF5F0;
}
.filtermenu{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 6px 16px #00000029;
    border-radius: 8px 8px 0px 8px;
    width: 100px;
    margin: 0 auto;
    padding: 0px;
    position: absolute;
    display: none;
}
.filtermenu .filtermenu__item{
    list-style: none;
    padding: 12px;
}
.filtermenu__item:first-child{
    color: #FF5F1F;
}
.gross__evolution{
    width: 24px;
    height: 24px;
    opacity: 1;
    display: block;
    cursor: pointer;
}
.gross__evolution:hover{
    border: 1px solid #ffffff;
    border-radius: 200px;
    background-color: #FFF5F0;
}
</style>