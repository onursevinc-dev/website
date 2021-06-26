<template>
    <div>
        <TheHeader/>
        <nuxt/>
    </div>
</template>
<script>
    import TheHeader from "@/components/TheHeader";

    export default {
        middleware: ['session-control', 'auth'],
        components: {
            TheHeader
        }
    }
</script>
