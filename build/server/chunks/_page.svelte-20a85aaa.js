import { c as create_ssr_component, v as validate_component } from './index-f5798eac.js';
import { I as IconBase } from './IconBase-fb6233a8.js';
import { E as Error } from './Error-296e3214.js';
import './uneval-47ec4529.js';

const FaGoogle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 488 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}"></path>`;
    }
  })}`;
});
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
  return `${toggle ? `${validate_component(Error, "Error").$$render($$result, { data: form.msg }, {}, {})}` : ``}


${$$result.head += `<!-- HEAD_svelte-1rfi47o_START -->${$$result.title = `<title>Register - p3chat</title>`, ""}<meta name="${"description"}" content="${"Register and find out how to meet your friend's!"}"><!-- HEAD_svelte-1rfi47o_END -->`, ""}

<main class="${"w-screen h-screen bg-stone-800 flex flex-col justify-center items-center"}"><form method="${"POST"}" action="${"?/register"}" class="${"flex flex-col justify-center items-center gap-4"}"><nav class="${"mb-[3rem] w-[17rem]"}"><h4 class="${"text-6xl text-white mb-3"}">Register</h4>
            <p class="${"text-[.8rem] text-stone-300"}">Create and account and interact with your friend&#39;s</p></nav>
        <section class="${"flex justify-around items-center gap-1 bg-white transition-[200ms] border-[.4px] border-stone-600 rounded-lg w-[17rem] hover:bg-stone-200 p-3 "}"><p class="${"text-stone-700"}">Login with</p>
            <button class="${"w-5 h-5 text-stone-700"}">${validate_component(FaGoogle, "FaGoogle").$$render($$result, {}, {}, {})}</button></section>
        <section class="${"flex flex-col justify-center gap-1"}"><label class="${"text-stone-400"}" for="${"username"}">Username</label>
            <input minlength="${"4"}" required name="${"username"}" class="${"bg-stone-700 outline-none text-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem] placeholder:text-stone-400"}" id="${"username"}" type="${"text"}" placeholder="${"e.g sarah wong"}"></section>
        <section class="${"flex flex-col justify-center gap-1"}"><label class="${"text-stone-400"}" for="${"username"}">Email</label>
            <input minlength="${"8"}" required name="${"email"}" type="${"email"}" class="${"bg-stone-700 outline-none text-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem] placeholder:text-stone-400 "}" id="${"username"}" placeholder="${"e.g sarah@example.com"}"></section>
        <section class="${"flex flex-col justify-center gap-1"}"><label class="${"text-stone-400"}" for="${"password"}">Password</label>
            <input minlength="${"4"}" required name="${"password"}" type="${"password"}" class="${"bg-stone-700 outline-none text-white rounded-md p-3 w-[17rem] placeholder:text-[.8rem] placeholder:text-stone-400"}" placeholder="${"e.g secret"}"></section>
            <button type="${"submit"}" class="${"bg-[greenyellow] text-stone-800 p-3 w-[12rem] rounded-lg text-[.9rem] transition-[200ms] hover:bg-[#a8c914]"}">Submit</button>

        <section class="${"mt-[1rem] flex justify-around items-center gap-3"}"><p class="${"text-[.9rem] text-stone-300"}">Already have an account?</p>
            <a class="${"text-sky-500 border-b-[1px] border-b-sky-600"}" href="${"/auth/login"}">Sign-in</a></section></form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-20a85aaa.js.map
