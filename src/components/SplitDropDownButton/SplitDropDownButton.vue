<template>
    <div class="content" :class="theme" :disabled="disabled">
        <button class="main" @click.prevent="mainAction" :disabled="disabled">{{ mainLabel }}</button>
        <button class="options" @click="toggleOptions" :disabled="disabled">
            <img src=""/>
        </button>
        <SplitDropDownButtonList :options="options" v-if="showOptions"/>
    </div>
</template>

<script>

import SplitDropDownButtonList from "./SplitDropDownButtonList";

export default {
    name: 'SplitDropDownButton',

    props: {
        mainLabel: String,
        mainAction: Function,
        options: Array,
        theme: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    components: {
        SplitDropDownButtonList
    },

    data() {
        return {
            showOptions: false
        };
    },

    methods: {
        toggleOptions() {
            this.showOptions = !this.showOptions;
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;

    button {
        border: none;
        padding: 12px;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;

        &.main {
            border-radius: 5px 0 0 5px;
        }

        &.options {
            border-radius: 0 5px 5px 0;

            img {
                content: url("../../assets/arrow-down-white.svg");
            }
        }
    }

    &.default {
        button.main {
            background: #1B9B45;

            &:hover:enabled {
                background: #26B547;
            }
        }

        button.options {
            background: #138242;
        }
    }

    &.primary {
        button.main {
            background: #2687E9;

            &:hover:enabled {
                background: #5AADF1;
            }
        }

        button.options {
            background: #1B69C8;
        }
    }

    &.secondary {
        button {
            color: #1B69C8;
        }

        button.main {
            background: #F1F4F9;
            border: 1px solid #C9D3DD;
            padding: 11px;

            &:hover:enabled {
                background: #E5E5E5;
            }
        }

        button.options {
            background: #C9D3DD;

            img {
                content: url("../../assets/arrow-down-blue.svg");
            }
        }
    }

    &.danger {
        button.main {
            background: #DB242A;

            &:hover:enabled {
                background: #FF3D32;
            }
        }

        button.options {
            background: #B7192B;
        }
    }

    &[disabled] {
        opacity: 0.6;

        button {
            cursor: not-allowed;
        }
    }
}
</style>
