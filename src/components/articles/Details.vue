<template>
  <div class="details">
    <div v-if="article">
      <ArticleToolbar v-on:readFullNews="redirect" v-on:changeTitle="updateTitle" />
      <img :src="article.urlToImage" :alt="article.description" class='image'>
      <h1>{{article.title}}</h1>
      <div v-if="showModal">
        <EditModal
         :title="article.title"
         :showModal="showModal"
         v-on:closeModal="closeModal"
         v-on:updateTitleFromModal="updateTitleAndCloseModal"
        />
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
      console.log('about to call action - updateTitle', data);
      this.updateTitleLocally({ ...data });
      this.showModal = false;
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

<style scoped>
.image {
  max-height: 40vh;
}

.btn-toolbar {
  border: 1px solid red;
}
</style>
