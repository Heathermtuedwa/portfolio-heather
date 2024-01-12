<template >
    <footer>
        <p>&copy; {{ currentYear }} Heather Mtuedwa</p>
    </footer>
</template>

  <script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};

</script>
<style scoped>
   
footer {
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: fit-content;
}


</style>
