<template>
    <a href="#" @click.prevent="action">{{ label }}</a>
</template>

<script>

export default {
    name: 'SplitDropDownButtonListOption',

    props: {
        label: String,
        action: Function,
    },
}
</script>

<style lang="scss" scoped>
a {
    display: block;
    text-decoration: none;
    border-radius: 4px;
    padding: 5px 8px;
    margin: 5px 0;
    color: #333333;
    font-size: 14px;

    &:hover {
        background: #F1F4F9;
    }
}
</style>
