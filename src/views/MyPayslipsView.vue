<script>
import TabPanel from "../components/TabPanel.vue";
import PaySlipData from "../assets/payslips.json";

const payslipInfo = {
    USD: PaySlipData.filter((temp)=>{
        if(temp.payslipEntries[0].currency == "USD"){
            return temp;
        }
    }),
    EUR: PaySlipData.filter((temp)=>{
        if(temp.payslipEntries[0].currency == "EUR"){
            return temp;
        }
    })
}
export default {
  components: {
    TabPanel
  },
  data() {
    return {
        tabs:[{
            name: "EUR",
            rowCount: 12,
            active: true
        },{
            name: "USD",
            rowCount: 2,
            active: false
        }],
        payslipInfo: payslipInfo,
        content: payslipInfo.EUR,
        activePanel: "EUR"
    }
  },
  methods: {
    tabClicked: function(name){
        let tabs = this.tabs;
        tabs[0].active = !tabs[0].active;
        tabs[1].active = !tabs[1].active;
        this.content = this.payslipInfo[name];
        this.activePanel = name;
    }
  }
}
</script>

<template>
    <h3 style="font-size:24px;">My Payslips</h3>
    <TabPanel :tabs=tabs @tabclick="tabClicked" :content=content :activePanel=activePanel ></TabPanel>
</template>