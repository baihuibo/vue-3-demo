<template>
    <div>
        <layout class="layout"/>
        <assess class="assess"/>
    </div>
</template>

<script setup>
import layout from './layout.vue';
import {defineAsyncComponent} from 'vue'

export default {
    components: {
        layout,
        assess: defineAsyncComponent(() => import('./assess.vue')),
    }
}
</script>
