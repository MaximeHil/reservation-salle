<template>
  <div class="home">
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
import { mapState } from 'vuex'
import RoomItem from "@/components/RoomItem";

export default {
  name: 'Home',
  components: {
    RoomItem,
  },
  computed: {
    ...mapState(['rooms'])
  }
}
</script>
