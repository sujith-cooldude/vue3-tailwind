<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ current_month_name }}</h2>
      <h2 class="font-bold">{{ current_year }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 rounded border" @click="prev">Prev</button>
      <button class="px-2 rounded border" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_date: new Date().getUTCDate(),
      current_month: new Date().getMonth(),
      current_year: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.current_year, this.current_month + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.current_year, this.current_month, 1).getDay();
    },
    next() {
      if (this.current_month === 11) {
        this.current_month = 0;
        this.current_year++;
      } else {
        this.current_month++;
      }
    },
    prev() {
      if (this.current_month === 0) {
        this.current_month = 11;
        this.current_year--;
      } else {
        this.current_month--;
      }
    },
    currentDateClass(num){
      const calendarFullDate = new Date(
        this.current_year,
        this.current_month,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate ? 'text-yellow-600' : '';
    }
  },
  computed: {
    current_month_name() {
      return new Date(this.current_year, this.current_month).toLocaleString(
        "Default",
        {
          month: "long",
        }
      );
    },
  },
};
</script>

<style>
</style>