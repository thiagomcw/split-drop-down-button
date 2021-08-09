<template>
    <div class="list-options">
        <SplitDropDownListOption v-for="option in options" v-bind:key="option.label" :label="option.label"
                                 :action="option.action"/>
    </div>
</template>

<script>

import SplitDropDownListOption from "./SplitDropDownButtonListOption";

export default {
    name: 'SplitDropDownButtonList',

    props: {
        options: Array,
    },

    components: {
        SplitDropDownListOption
    }
}
</script>

<style lang="scss" scoped>
.list-options {
    right: 0;
    z-index: 1;
    min-width: 180px;
    padding: 8px 16px;
    position: absolute;
    background: #ffffff;
    border: 1px solid #C9D3DD;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(202, 211, 221, 0.2);
    border-radius: 4px;
}
</style>
