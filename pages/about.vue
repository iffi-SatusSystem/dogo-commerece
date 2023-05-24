<template >
    <div>
    <h1>This is about page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto neque rerum ad, tenetur laboriosam minus sit dolores animi dolorum repellendus ex voluptatibus doloribus similique nemo, optio obcaecati modi enim a?</p>
        <p>{{ data }}</p>
    </div>
</template>
<script setup>
const { data } = await useFetch('/api/ninja')
</script>
