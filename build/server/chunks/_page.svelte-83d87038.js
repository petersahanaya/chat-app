import { c as create_ssr_component, v as validate_component } from './index-f5798eac.js';
import './uneval-47ec4529.js';
import { E as Error } from './Error-296e3214.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let toggle = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    {
      if (form === null || form === void 0 ? void 0 : form.msg) {
        toggle = true;
        setTimeout(
          () => {
            toggle = false;
          },
          1500
        );
      }
    }
  }
  return `${toggle ? `${validate_component(Error, "Error").$$render($$result, { data: form == null ? void 0 : form.msg }, {}, {})}` : ``}

${$$result.head += `<!-- HEAD_svelte-rdnzta_START -->${$$result.title = `<title>Login - p3chat</title>`, ""}<meta name="${"description"}" content="${"Login and find out how to meet your friend's!"}"><!-- HEAD_svelte-rdnzta_END -->`, ""}

<main class="${"w-screen h-screen bg-stone-800 flex flex-col justify-center items-center"}"><form method="${"POST"}" action="${"?/login"}" class="${"flex flex-col justify-center items-center gap-4"}"><nav class="${"mb-[3rem] w-[17rem]"}"><h4 class="${"text-6xl text-white mb-3"}">Login</h4>
            <p class="${"text-[.8rem] text-stone-400"}">Login and interact with your friend&#39;s</p></nav>
        <section class="${"flex flex-col justify-center gap-1"}"><label class="${"text-stone-400"}" for="${"username"}">Username</label>
            <input name="${"username"}" required class="${"bg-stone-700 outline-none text-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem] placeholder:text-stone-400"}" id="${"username"}" type="${"text"}" placeholder="${"e.g sarah wong"}"></section>
        <section class="${"flex flex-col justify-center gap-1"}"><label class="${"text-stone-400"}" for="${"password"}">Password</label>
            <input required class="${"bg-stone-700 text-white outline-none rounded-md p-3 w-[17rem] placeholder:text-stone-400 placeholder:text-[.8rem]"}" name="${"password"}" type="${"password"}" placeholder="${"e.g secret"}"></section>
            <button type="${"submit"}" class="${"bg-[greenyellow] text-stone-800 p-3 w-40 rounded-lg text-[.9rem] transition-[200ms] hover:bg-[#a8c914]"}">Submit</button>

        <section class="${"mt-[1rem] flex justify-around items-center gap-3"}"><p class="${"text-[.9rem] text-stone-300"}">Not register yet?</p>
            <a class="${"text-sky-500 border-b-[1px] border-b-sky-600"}" href="${"/auth/register"}">Create an Account</a></section></form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-83d87038.js.map
