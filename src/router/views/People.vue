<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="members"
        :search="search"
        item-key="id"
        show-select
        calculate-widths
        @click:row="showPersonDetail()"
        class="row-pointer"
      >
      </v-data-table>
    </v-card>
    <person-detail v-model="personDetail"></person-detail>
  </v-container>
</template>

<script>
import PersonDetail from "@/components/peopleScreen/PersonDetail";
import { mapState } from "vuex";
export default {
  components: { PersonDetail },
  data() {
    return {
      personDetail: false,
      expand: false,
      search: "",
      selected: [],
      headers: [
        { text: "Name", value: "name" },
        { text: "Date joined", value: "joined_date" },
        { text: "Role", value: "type" },
      ],
      members: [],
    };
  },
  methods: {
    showPersonDetail() {
      this.personDetail = true;
    },
  },
  async mounted() {
    this.members = await this.$store.dispatch("FETCH_CLASS_MEMBERS", this.currentClassroom.id);
  },
  computed: {
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
    }),
  },
};
</script>

<style scoped>
.tab-people-everyone {
  margin-left: 1%;
}

.row-pointer:hover {
  cursor: pointer;
}
</style>
