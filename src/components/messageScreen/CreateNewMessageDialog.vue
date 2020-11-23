<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" depressed color="blue" dark>
        <v-icon left>mdi-pencil</v-icon>
        New Message
      </v-btn>
    </template>
    <v-card>
      <v-autocomplete
        v-model="selectedMembers"
        :items="members"
        solo
        chips
        label="Select"
        item-text="name"
        item-value="id"
        multiple
        deletable-chips
        class="px-2 pt-1"
      >
      </v-autocomplete>
      <v-textarea
        class="px-2"
        v-model="newMessage"
        solo
        flat
        name="message-text-box"
        placeholder="Send a message..."
        id="message-text-box-input"
        rows="4"
        no-resize
        :background-color="isDark ? undefined : '#f5f5f5'"
      ></v-textarea>

      <v-card-actions>
        <v-btn text @click="onCancel">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onAccept">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      newMessage: "",
      members: [],
      selectedMembers: [],
    };
  },
  methods: {
    onAccept() {
      // submit message
      this.$emit("submit", this.newMessage, this.selectedMembers);
      this.dialog = false;
    },
    onCancel() {
      this.dialog = false;
      this.newMessage = "";
      this.selectedMembers = [];
    },
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
      currentUser: state => state.Auth.user,
    }),
  },
  async mounted() {
    let currentClassMembers = await this.$store.dispatch("FETCH_CLASS_MEMBERS", this.currentClassroom.id);
    this.members = currentClassMembers.filter(m => m.id != this.currentUser.id);
  },
};
</script>
