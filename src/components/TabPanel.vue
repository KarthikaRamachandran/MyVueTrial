<script>
import PaySlip from "../components/PaySlip.vue";
export default {
    props:['tabs','content','activePanel'],
    components: {
        PaySlip
    }
}
</script>
<template>
  <div class="tabpanel">
    <ul class="tabs">
        <template v-for="tab in tabs">
            <li v-bind:class="tab.active ?'tab active':'tab'" @click="$emit('tabclick', tab.name)" >
                <a><span class="tabpanel__text">{{tab.name}} ({{tab.rowCount}})</span></a>
            </li>
        </template>
    </ul>
    <div class="tabcontent">
        <PaySlip :details=content></PaySlip>
    </div>
  </div>
</template>
<style scoped>
.tabpanel {
    min-width: 0;
    width: 100%;
    max-width: none;
    min-height: 0;
    height: auto;
    max-height: none;
    border: 1px solid #e6e6e6;
    border-radius: 3px 3px 3px 3px;
    display: inline-flex;
    flex-flow: column;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    box-shadow: 0 0 0 0 transparent;
}
.tabpanel * {
    outline: none;
}
.tabs {
    margin: 0;
    padding: 0;
    border: solid #e6e6e6;
    border-width: 0px 0px 1px 0px;
    position: relative;
    font-size: 0px;
    box-sizing: border-box;
    white-space: nowrap;
    display: flex;
    flex-flow: row;
    flex-shrink: 0;
    background: #001738 0% 0% no-repeat padding-box;
}
.tab {
    margin: 0px 0px 0px 0px;
    padding: 10px 20px 10px 20px;
    border: 1px solid transparent;
    border-radius: 0px 0px 0px 0px;
    background: transparent;
    font-size: 13px;
    color: #111;
    list-style: none;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
.tab:hover:not(.active) .tabpanel__text{
    color: #FF5F1F;
}
.tab:active .tabpanel__text{
    color: #111;
}
.tab a {
    text-decoration: none;
    color: inherit;
    position: relative;
    display: inline-flex;
    flex-flow: row;
    z-index: 3;
}
.tabpanel__text {
    color: white;
    line-height: 1.3;
}
.tabcontent{
    border: solid transparent;
    border-width: 0px 0px 0px 0px;
    font-size: 13px;
    color: #111;
    background: #fff;
    box-sizing: border-box;
    flex-grow: 1;
    overflow: auto;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
}
.tab.active {
    background: #FF5F1F;
    border: 1px solid #e6e6e6;
    cursor: default;
}
</style>