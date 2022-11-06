import Vue from "vue";
const rule = [];
function handleHTMLObject(htmlObject, rootThis) {
  htmlObject.setAttribute("id", `id-${rootThis.$route.name}-${Math.random()}`);
  if (htmlObject.children) {
    Array.from(htmlObject.children).forEach((htmlChild) => {
      handleHTMLObject(htmlChild, rootThis);
    });
  }
}
function checkingChange(htmlObject, curHtml) {
  return (
    Array.from(htmlObject).flat(Infinity).length !==
    Array.from(curHtml).flat(Infinity).length
  );
}
let HTMLObjec = {};
let prePage = "";
const render = Vue.prototype._render;
Vue.prototype._render = function () {
  this.$nextTick(() => {
    if (!this.$route.name) return;
    console.log(this.$el)
    // if (prePage !== this.$route.name) {
    prePage = this.$route.name;
    HTMLObjec[this.$route.name] = this.$el;
    handleHTMLObject(this.$el, this);
    // }
  });
  return render.call(this);
};
