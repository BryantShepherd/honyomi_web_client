<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px" :retain-focus="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon color="blue lighten-1">mdi-information</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary" style="height: 80px">
          <v-toolbar-title style="margin-left: 230px; margin-top: 18px; font-size: 25px">File details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false" style="margin-top: 18px">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col lg="10">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ fileObj.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col lg="2">
              <v-btn color="blue lighten-1" style="color: white; margin-top: 12px" :href="fileObj.url" target="_blank">
                View
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-list two-line style="font-size: larger">
            <v-list-item v-for="item in items" :key="item.title">
              <v-row>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
                    <span v-text="item.value"></span>
                  </v-list-item-content>
                </v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    value: Boolean,
    fileObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          title: "MESSAGE",
          value: this.fileObj.message,
        },
        {
          title: "SHARED ON",
          value: this.fileObj.created_at,
        },
        // {
        //   title: "SHARED BY",
        //   value: "Pham Thi Dan",
        // },
      ],
      dialog: false,
    };
  },
  mounted() {
    console.log(this.fileObj);
  },
};
</script>
<style scoped></style>
