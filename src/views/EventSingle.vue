<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
 export default {
  name: 'EventSingle',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'Cat Party',
          category: 'Fundraising',
          description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescued cats.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: 'Cat Alle Plagwitz',
          date: '16-06-2021',
          time: '11:30'
        },
        {
          id: 2,
          name: 'Dog Party',
          category: 'Adoptions',
          description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
          featuredImage: 'https://placedog.net/500/500',
          images: [
            'https://placedog.net/500/500',
            'https://placedog.net/500/500',
            'https://placedog.net/500/500'
          ],
          location: 'Dog Alle Lindenau',
          date: '22-06-2021',
          time: '12:00'
        }
      ],
      event: {}
    }    
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>
