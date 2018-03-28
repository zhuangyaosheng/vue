<template>
  <div id="">

    <header>
      <a class="back">
        <img src="../assets/back.png">
      </a>
      <h5>{{ title }}</h5>
    </header>

  </div>
</template>

<script>
export default {
  name: "",
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../style/sass.scss";
</style>


