<template>
  <div class="user">
    <h1>The Prime Minister of Japan</h1>
    <table v-if="users" class="user-table">
      <tr>
        <th>名前</th>
        <th>写真</th>
      </tr>
      <tr v-for="(user, i) in users.users" :key="i">
        <td class="user-name">{{ user.name }}</td>
        <td><img class="user-image" :src="user.icon_url"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('user/getUsers')
  },
  computed: {
    ...mapState('user', ['users'])
  }
}
</script>

<style lang="css" scoped>
.user-table {
  width: 100%;
}
.user-name {
  width: 30%;
}
.user-image {
  width: 30%;
}
</style>
