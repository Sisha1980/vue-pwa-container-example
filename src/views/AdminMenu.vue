<template>
  <v-container 
    fluid
    pa-0
    ma-0
    background-color="#F4F5F8"
  >
      <v-tabs
        v-model="activeTab"
        background-color="#F4F5F8"
        centered
        light
        icons-and-text
      >
        <v-tabs-slider>
        </v-tabs-slider>

        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
          {{ tab.name }}
          <v-icon> {{ tab.icon }} </v-icon>
        </v-tab>

      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
          <router-view></router-view>
        </v-tab-item>
      </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  name: 'AdminMenu',
  props: ["id"],
  data() {
    return {
      activeTab: `/rooms`,
      tabs: [
        { id: 1, name: "Rooms", route: `/rooms`, icon: `mdi-home-outline`},
        { id: 2, name: "Tenants", route: `/tenants`, icon: `mdi-account-group-outline` },
        { id: 3, name: "Discounts", route: `/discounts`, icon: `mdi-sale` },
        { id: 4, name: "Reports", route: `/reports`, icon: `mdi-file-chart` },
        { id: 5, name: "Settings", route: `/settings`, icon: `mdi-cog-outline` }
      ]
    };
  }
};
</script>
