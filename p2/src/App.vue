<template>
  <div>
    <img id="logo" alt="logo" src="@/assets/images/logo.png" />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: ["home", "project", "research"],
      paths: {
        home: "/",
        project: "/project",
        research: "/research",
      },
    };
  },
};
</script>

<style src='@/assets/css/style.css'></style>