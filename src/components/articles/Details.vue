<template>
  <v-container>
    <v-row>
      <v-col xs="12" class="d-flex justify-center flex-wrap">
        <div v-if="article">
          <ArticleToolbar
            v-on:readFullNews="redirect"
            v-on:changeTitle="updateTitle"
            :title="article.title"
            :createdOn="formattedDateTime(article.publishedAt)"
            :author="author(article.author, article.source.name)"
          />
          <h3 class=".text-h3 text--secondary mb-3">{{article.description}}</h3>
          <v-img
            :src="article.urlToImage"
            :alt="article.description"
            aspect-ratio="2"
          />
          <p class=".body-1 text--primary mt-10">{{article.content | sanitize}}</p>
          <div v-if="showModal">
            <EditModal
              :title="article.title"
              :showModal="showModal"
              v-on:closeModal="closeModal"
              v-on:updateTitleFromModal="updateTitleAndCloseModal"
            />
          </div>
        </div>
        <div class="d-flex wrap" v-else>
          <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

import ArticleToolbar from './ArticleToolbar.vue';
import EditModal from '../ui/EditModal.vue';

export default {
  name: 'Details',
  components: {
    ArticleToolbar,
    EditModal,
  },

  data() {
    return {
      showModal: false,
    };
  },

  filters: {
    sanitize(text) {
      if (text) {
        return text.replace('\r', '').replace('\n', '. ');
      }
      return 'Please check the original source by clicking above for more details.';
    },
  },

  methods: {
    ...mapActions({
      updateCurrentPage: 'updateCurrentPage',
      updateTitleLocally: 'updateTitle',
    }),

    redirect() {
      window.open(this.article.url);
    },

    updateTitle() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    updateTitleAndCloseModal(value) {
      const slug = this.article?.slug;
      const data = {
        value,
        slug,
      };
      this.updateTitleLocally({ ...data });
      this.showModal = false;
    },

    formattedDateTime(value) {
      return moment(value).format('MMM DD, YYYY, HH:MM A');
    },

    author(author, source) {
      return author || source || 'unknown';
    },
  },

  computed: {
    ...mapGetters({
      article: 'currentArticle',
    }),
  },

  mounted() {
    const { name = '' } = this.$route.params;
    this.updateCurrentPage(name);
  },
};
</script>

<style lang="scss" scoped>
.articleToolBar {
  display: flex;
  flex-direction: column;

  .infoWrapper {
    display: flex;
    justify-content: space-between;

    .buttonWrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      button {
        color: #d21975;
        padding: 2px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
      }
    }

    .redirectButton {
      border-bottom: 2px solid #75d219;
      margin: 5px 8px;
    }

    .editTitleButton {
      border: 2px solid #008CBA;

      @media screen {
        margin-right: 8px;
      }
    }

  }
}

.image {
  max-height: 40vh;
}

.btn-toolbar {
  border: 1px solid red;
}
</style>
