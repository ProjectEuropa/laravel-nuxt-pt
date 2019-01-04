<template>
    <h1>Hello {{ name }}!</h1>
</template>

<script>
import axios from 'axios';
export default {
    data: () => {
        return { name: 'world' };
    },
};
</script>