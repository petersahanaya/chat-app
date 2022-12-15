import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './index-f5798eac.js';
import { I as IconBase } from './IconBase-fb6233a8.js';

const FaAngleLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 256 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}"></path>`;
    }
  })}`;
});
const FaUserEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 640 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"}"></path>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { user } = data;
  let file;
  let username = user === null || user === void 0 ? void 0 : user.username;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<form method="${"post"}" class="${"bg-stone-800 w-screen h-screen"}"><header class="${"flex justify-around bg-stone-800 items-center h-[12vh] w-screen"}"><div class="${"w-[15px] text-white"}"><a href="${"/chat"}">${validate_component(FaAngleLeft, "FaAngleLeft").$$render($$result, {}, {}, {})}</a></div>
		<p class="${"text-white"}">Setting&#39;s</p></header>

	<section class="${"flex justify-around bg-stone-800 items-center w-screen"}">${!user.image && !file ? `<nav class="${"relative"}"><img class="${"rounded-full shadow-sm"}" width="${"150"}" src="${"/profile.jpeg"}" alt="${"profile"}">
				<label class="${"absolute bottom-0 right-0 w-[35px] h-[35px] flex justify-center items-center text-stone-600 bg-[greenyellow] rounded-full"}" for="${"file"}">${validate_component(FaUserEdit, "FaUserEdit").$$render($$result, {}, {}, {})}</label>
				<input class="${"hidden"}" id="${"file"}" type="${"file"}" accept="${"image/*"}"></nav>` : ``}

		${(user == null ? void 0 : user.image) ? `<nav class="${"relative"}"><img class="${"rounded-full shadow-sm"}" width="${"150"}"${add_attribute("src", user == null ? void 0 : user.image, 0)} alt="${"profile"}">
				<label class="${"absolute bottom-0 right-0 w-[40px] h-[40px] flex justify-center items-center text-white bg-sky-600 rounded-full"}" for="${"file"}">${validate_component(FaUserEdit, "FaUserEdit").$$render($$result, {}, {}, {})}</label>
				<input class="${"hidden"}" id="${"file"}" type="${"file"}" accept="${"image/*"}"></nav>` : ``}

		${``}
		<div class="${"flex flex-col justify-center items-center gap-2"}"><h4 class="${"text-2xl text-white font-medium"}">${escape(user == null ? void 0 : user.username)}</h4>
			<p class="${"text-stone-300 text-[.8rem]"}">${escape(user == null ? void 0 : user.email)}</p></div></section>

	<article class="${"flex flex-col w-screen px-2 justify-center items-center gap-2 bg-stone-800 mt-12"}"><section class="${"flex flex-col justify-center w-[80vw]"}"><p class="${"text-stone-300 text-[.8rem]"}">Email Address</p>
			<h4 class="${"p-2 text-white font-medium border-b-[1px] border-stone-300"}">${escape(user == null ? void 0 : user.email)}</h4></section>
		<section class="${"flex flex-col justify-center w-[80vw]"}"><p class="${"text-stone-300 text-[.8rem]"}">Username</p>
			<input class="${"p-2 font-medium border-b-[1px] border-stone-500 bg-stone-700 text-stone-300 outline-none"}" type="${"text"}"${add_attribute("value", username, 0)}></section>
		<section>${``}

            ${`<button type="${"submit"}" class="${"mt-7 bg-[greenyellow] w-[12rem] text-stone-700 shadow-md transition-[200ms] rounded-md p-3 cursor-pointer hover:bg-[#99d959]"}">Save Change&#39;s</button>`}</section></article></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6e30cca3.js.map
