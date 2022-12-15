const action = {
  upload: async ({ request }) => {
    console.log(request);
    const formData = await request.formData();
    console.log("formdata", formData);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  action: action
});

const index = 7;
const component = async () => (await import('./_page.svelte-6e30cca3.js')).default;
const file = '_app/immutable/components/pages/(app)/chat/settings/_page.svelte-8c9aa414.js';
const imports = ["_app/immutable/components/pages/(app)/chat/settings/_page.svelte-8c9aa414.js","_app/immutable/chunks/index-d2d958bb.js","_app/immutable/chunks/IconBase-c373613c.js","_app/immutable/chunks/index-d91ca114.js","_app/immutable/chunks/navigation-19c7bdf3.js","_app/immutable/chunks/singletons-8fb9c5f0.js","_app/immutable/chunks/index-471eefe1.js"];
const stylesheets = ["_app/immutable/assets/IconBase-d93538e2.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=7-1991b17b.js.map
