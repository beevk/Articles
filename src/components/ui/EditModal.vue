<template>
  <div>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      max-width="600px"
      min-width="300px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Update Headline Title</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col v-if="errorMessage" class="danger">
                <v-alert
                  class="my-0"
                  color="red lighten-2"
                  dark
                >
                  {{errorMessage}}
                </v-alert>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  label="New title:*"
                  v-model="inputData"
                  required
                ></v-text-field>
              </v-col>
              <v-col v-if="titleLength">{{titleLength}}</v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModalDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateTitle"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <h3>SHOWING MODAL</h3>
  </div>
</template>

<script>
export default {
  name: 'EditModal',

  props: {
    title: String,
    showModal: Boolean,
  },

  data() {
    return {
      inputData: this.title,
      showModalDialog: this.showModal,
    };
  },

  computed: {
    errorMessage() {
      if (this.inputData.length > 100 || this.inputData.length < 2) {
        return 'New title can not be of more than 100 or less than 2 characters. Please fix the error before submitting.';
      }
      return '';
    },

    titleLength() {
      return this.inputData.length;
    },
  },

  methods: {
    closeModalDialog() {
      this.showModalDialog = false;
      this.$emit('closeModal');
    },

    updateTitle() {
      const value = this.inputData;
      if (value.length < 3 || value.length > 100) {
        return;
      }
      this.$emit('updateTitleFromModal', value);
    },
  },
};
</script>
