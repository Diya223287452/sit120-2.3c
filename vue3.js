const app = Vue.createApp({
  data() {
    return {
      message: "Hello, Vue 3!",
      inputValue: "",
      checkedValue: false,
      selectedValue: "",
      textAreaValue: "",
      items: [
        { id: 1, name: "object 1" },
        { id: 2, name: "object 2" },
        { id: 3, name: "object 3" },
      ],
      showComponent: false,
    };
  },
  computed: {
    // Computed property to calculate a reversed message
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    // Method to handle a button click event
    handleClick() {
      alert("Button Clicked!");
    },
    // Method to toggle the showComponent flag
    toggleComponent() {
      this.showComponent = !this.showComponent;
    },
  },
});

// Define a custom Vue 3 component
app.component("my-component", {
  props: {
    item: Object,
  },
  template: `
    <div class="component">
      <h3>{{ item.name }}</h3>
    </div>
  `,
});

// Mount the app to a DOM element
app.mount("#app");
