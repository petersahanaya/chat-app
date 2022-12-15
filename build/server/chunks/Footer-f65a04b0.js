import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from './index-f5798eac.js';
import { I as IconBase } from './IconBase-fb6233a8.js';

const GiPaperPlane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M480 40L32 296l112.148 37.383L448 72 209.404 355.135 320 392 480 40zM208 376l-16 96 49.932-83.863L208 376z"}"></path>`;
    }
  })}`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  let { user } = $$props;
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<section class="${"mt-8 p-3 w-max flex flex-col ml-[63vw]"}"${add_attribute(
    "style",
    result.senderName === user.username ? "margin-left : 63vw" : "margin-left : 0",
    0
  )}><nav class="${"flex relative w-full items-center "}"><div class="${"flex items-center gap-3"}"${add_attribute(
    "style",
    result.senderName !== user.username ? "flex-direction : row-reverse" : "flex-direction : row",
    0
  )}><p class="${"text-stone-100 text-[1.1rem]"}">${escape(result.senderName)}</p>
			${!(result == null ? void 0 : result.senderImg) ? `<img class="${"rounded-full"}" width="${"40"}" src="${"/profile.jpeg"}" alt="${"profile"}">` : ``}
			${(result == null ? void 0 : result.senderImg) ? `<img class="${"rounded-full"}" width="${"40"}"${add_attribute("src", result.senderImg, 0)} alt="${"profile"}">` : ``}</div></nav>
	<div class="${"rounded-lg bg-[greenyellow] text-stone-900 p-3 mt-2"}"><p class="${"text-[.9rem] text-stone-800 whitespace-wrap"}">${escape(result.senderMsg)}</p>
		<p class="${"text-stone-600 font-medium text-[.8rem] mt-2"}">${escape(result.date)}</p></div></section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleInput } = $$props;
  let { handleChange } = $$props;
  let { input } = $$props;
  let { handleSend } = $$props;
  if ($$props.handleInput === void 0 && $$bindings.handleInput && handleInput !== void 0)
    $$bindings.handleInput(handleInput);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.handleSend === void 0 && $$bindings.handleSend && handleSend !== void 0)
    $$bindings.handleSend(handleSend);
  return `<footer class="${"fixed bottom-0 right-0 shadow-md shadow-white flex justify-center gap-2 items-center w-screen bg-stone-800 py-7"}"><input class="${"w-60 outline-none rounded-full bg-stone-700 text-white placeholder:text-stone-400 p-4"}"${add_attribute("value", input, 0)} type="${"text"}" placeholder="${"e.g hi there..."}">
		<div class="${"text-stone-700 w-[50px] bg-[greenyellow] rounded-full p-3"}">${validate_component(GiPaperPlane, "GiPaperPlane").$$render($$result, {}, {}, {})}</div></footer>`;
});

export { Chat as C, Footer as F };
//# sourceMappingURL=Footer-f65a04b0.js.map
