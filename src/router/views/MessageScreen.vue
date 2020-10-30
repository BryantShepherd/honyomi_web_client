<template>
  <v-container fluid class="d-flex pa-0">
    <v-navigation-drawer permanent class="fit-v-viewport">
      <v-list nav v-for="n in 10" :key="n">
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/27.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-title>Annie Edison</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="d-flex flex-column width-100 fit-v-viewport">
      <div
        id="conversation-app-bar"
        class="pa-5 d-flex align-center justify-space-between"
      >
        <h3>Annie Edison</h3>
        <v-btn icon>
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-btn>
      </div>
      <div id="message-list-item" class="fill-height">
        <message-item
          v-for="message in messageList"
          :key="message.id"
          :message="message"
        />
      </div>
      <message-text-box />
    </div>
  </v-container>
</template>

<script>
import MessageItem from "@/components/messageScreen/MessageItem.vue";
import MessageTextBox from "@/components/messageScreen/MessageTextBox.vue";

export default {
  data() {
    return {
      messageList: [
        {
          id: 1,
          sender: {
            id: 1,
            name: "Jeff Winger",
          },
          conversationId: 1,
          message: {
            richText: "Hello from the other side.",
            text: "Hello from the other side.",
          },
        },
        {
          id: 2,
          sender: {
            id: 1,
            name: "Jeff Winger",
          },
          conversationId: 1,
          message: {
            richText:
              "Will justice philosophy madness passion victorious justice depths aversion abstract selfish enlightenment hatred. Truth ascetic salvation value victorious merciful marvelous truth holiest value hatred derive. Holiest transvaluation derive self hope evil fearful ideal merciful. Strong ultimate disgust christianity zarathustra christian disgust inexpedient inexpedient. Overcome enlightenment sea sexuality fearful depths hope pious eternal-return salvation.",
            text:
              "Will justice philosophy madness passion victorious justice depths aversion abstract selfish enlightenment hatred. Truth ascetic salvation value victorious merciful marvelous truth holiest value hatred derive. Holiest transvaluation derive self hope evil fearful ideal merciful. Strong ultimate disgust christianity zarathustra christian disgust inexpedient inexpedient. Overcome enlightenment sea sexuality fearful depths hope pious eternal-return salvation.",
          },
        },
      ],
    };
  },
  components: { MessageItem, MessageTextBox },
};
</script>

<style scope>
div#conversation-app-bar {
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.width-100 {
  width: 100%;
}

.fit-v-viewport {
  height: calc(100vh - 140px);
  max-height: calc(100vh - 140px);
}

#message-list-item {
  overflow-y: scroll;
}
</style>
