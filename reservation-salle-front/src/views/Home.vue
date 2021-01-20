<template>
  <div class="home">
    <div class="input-group">
      <input type="text" v-model="nameFilter" class="form-control" aria-label="" style="margin-left: 4%; margin-right: 1%">
      <div class="input-group-append" style="margin-right: 4%">
        <button class="btn btn-secondary" @click="setRoomsFilteredByName(nameFilter)">Filter by name</button>
      </div>
      <input type="text" v-model="equipementFilter" class="form-control" aria-label="" style="margin-left: 4%; margin-right: 1%">
      <div class="input-group-append" style="margin-right: 4%">
        <button class="btn btn-secondary" @click="setRoomsFilteredByEquipement(equipementFilter)">Filter by equipment</button>
      </div>
    </div>
    <ul class="list-group">
    <RoomItem v-for="room in rooms"
    :key="room.name"
    :name="room.name"
    :description="room.description"
    :capacity="room.capacity"
    :equipements="room.equipements"/>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import RoomItem from "@/components/RoomItem";

export default {
  name: 'Home',

  data: function () {
    return {
      nameFilter: '',
      equipementFilter: '',
    }
  },
  components: {
    RoomItem,
  },
  methods: {
      ...mapActions(['setAllRooms', 'setRoomsFilteredByName', 'setRoomsFilteredByEquipement']),

  },
  computed: {
    ...mapGetters(['rooms'])
  },
  mounted() {
    this.setAllRooms();
  },
}
</script>

<style scoped>
.list-group {
  margin-top: 2%;
}

</style>
