import { c as create_ssr_component, e as escape } from './index-f5798eac.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"bg-red-600 w-[20rem] m-auto absolute top-[10%] right-[50%] translate-x-[50%] rounded-lg p-3 shadow-lg"}"><div class="${"flex justify-around items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"stroke-current flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
      <span class="${"text-[.8rem]"}">${escape(data)}</span></div></div>`;
});

export { Error as E };
//# sourceMappingURL=Error-296e3214.js.map
