window.vuecore.components.set("samplebutton", {
  methods: {
    handleClick() {
      this.$emit('clickedButton');
    },
  },
  template: "#samplebutton"
});