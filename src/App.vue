<template>
    <div id="app">
        <div class="row" v-for="button in buttons" v-bind:key="button.theme">
            <SplitDropDownButton :theme="button.theme" :main-label="button.mainLabel" :main-action="button.mainAction"
                                 :options="button.options" class="button"/>
            <SplitDropDownButton :theme="button.theme" :main-label="button.mainLabel" :disabled="true" class="button"/>
        </div>
    </div>
</template>

<script>
import SplitDropDownButton from "./components/SplitDropDownButton/SplitDropDownButton";

export default {
    name: 'App',

    components: {
        SplitDropDownButton
    },

    data() {
        return {
            buttons: [
                {
                    theme: 'default',
                    mainLabel: 'Default',
                    mainAction: () => console.log('Default action'),
                    options: [
                        {
                            label: 'Default option 1',
                            action: () => console.log('Default option 1'),
                        },
                        {
                            label: 'Default option 2',
                            action: () => console.log('Default option 2'),
                        },
                        {
                            label: 'Default option 3',
                            action: () => console.log('Default option 3'),
                        },
                        {
                            label: 'Default option 4',
                            action: () => console.log('Default option 4'),
                        }
                    ]
                },
                {
                    theme: 'primary',
                    mainLabel: 'Primary',
                    mainAction: () => console.log('Primary action'),
                    options: [
                        {
                            label: 'Primary option 1',
                            action: () => console.log('Primary option 1'),
                        },
                        {
                            label: 'Primary option 2',
                            action: () => console.log('Primary option 2'),
                        },
                        {
                            label: 'Primary option 3',
                            action: () => console.log('Primary option 3'),
                        },
                        {
                            label: 'Primary option 4',
                            action: () => console.log('Primary option 4'),
                        }
                    ]
                },
                {
                    theme: 'secondary',
                    mainLabel: 'Secondary',
                    mainAction: () => console.log('Secondary action'),
                    options: [
                        {
                            label: 'Secondary option 1',
                            action: () => console.log('Secondary option 1'),
                        },
                        {
                            label: 'Secondary option 2',
                            action: () => console.log('Secondary option 2'),
                        },
                        {
                            label: 'Secondary option 3',
                            action: () => console.log('Secondary option 3'),
                        },
                        {
                            label: 'Secondary option 4',
                            action: () => console.log('Secondary option 4'),
                        }
                    ]
                },
                {
                    theme: 'danger',
                    mainLabel: 'Danger',
                    mainAction: () => console.log('Danger action'),
                    options: [
                        {
                            label: 'Danger option 1',
                            action: () => console.log('Danger option 1'),
                        },
                        {
                            label: 'Danger option 2',
                            action: () => console.log('Danger option 2'),
                        },
                        {
                            label: 'Danger option 3',
                            action: () => console.log('Danger option 3'),
                        },
                        {
                            label: 'Danger option 4',
                            action: () => console.log('Danger option 4'),
                        }
                    ]
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Ping Pong', sans-serif;
    max-width: 1200px;
    margin: 0 auto;

    .row {
        display: block;
        text-align: center;
        padding: 20px 0;

        .button {
            display: inline-block;
            margin: 10px;
        }
    }
}
</style>
