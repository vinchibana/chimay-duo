<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>

  </div>
</template>

<script>
import Recommend from "@/components/pages/Home/Recommend";
import ListContainer from "@/components/pages/Home/ListContainer";
import Rank from "@/components/pages/Home/Rank";
import Like from "@/components/pages/Home/Like";
import Floor from "@/components/pages/Home/Floor";
import { mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  components: {
    Recommend,
    ListContainer,
    Rank,
    Like,
    Floor,
  },
};
</script>

<style scoped></style>
