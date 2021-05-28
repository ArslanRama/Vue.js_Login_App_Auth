<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Check out our upcoming events
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
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
            'https://placedog.net/500/500'
          ],
          location: 'Dog Alle Lindenau',
          date: '22-06-2021',
          time: '12:00'
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>