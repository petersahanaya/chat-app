import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from './index-f5798eac.js';
import { p as page } from './stores-ed097570.js';
import { s as sockets, c as clients } from './chat-19239bef.js';
import { C as Chat, F as Footer } from './Footer-f65a04b0.js';
import './index3-2123adbf.js';
import './IconBase-fb6233a8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let client;
  let $sockets, $$unsubscribe_sockets;
  let $page, $$unsubscribe_page;
  let $clients, $$unsubscribe_clients;
  $$unsubscribe_sockets = subscribe(sockets, (value) => $sockets = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_clients = subscribe(clients, (value) => $clients = value);
  let { data } = $$props;
  let input = "";
  let results = [];
  let article;
  const { user } = data;
  $sockets.on("send-msg", (data2) => {
    results = [...results, data2];
  });
  const handleSend = () => {
    if (input) {
      const messages = {
        senderName: user.username,
        senderImg: user.image,
        senderMsg: input,
        receiverId: client.id,
        date: `${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`
      };
      $sockets.emit("on-msg", messages);
      results = [...results, messages];
      input = "";
    }
  };
  const handleChange = (e) => {
    input = e.target.value;
  };
  const handleInput = (e) => {
    if (input) {
      if (e.key === "Enter") {
        const messages = {
          senderName: user.username,
          senderImg: user.image,
          senderMsg: input,
          receiverId: client.id,
          date: `${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`
        };
        $sockets.emit("on-msg", messages);
        results = [...results, messages];
        input = "";
      }
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  client = $clients.find((s) => {
    var _a;
    return s.id === ((_a = $page.params) === null || _a === void 0 ? void 0 : _a.id);
  });
  $$unsubscribe_sockets();
  $$unsubscribe_page();
  $$unsubscribe_clients();
  return `${$$result.head += `<!-- HEAD_svelte-4r789v_START -->${$$result.title = `<title>Chat&#39;s</title>`, ""}<meta name="${"description"}" content="${"you can chat with you'r friend anywhere"}"><!-- HEAD_svelte-4r789v_END -->`, ""}

<main class="${"w-screem screen bg-stone-800"}"><header class="${"flex justify-around items-center p-2 w-screen h-[10vh] bg-stone-800 shadow-md shadow-white"}"><section>${!(client == null ? void 0 : client.image) ? `<img class="${"rounded-full"}" width="${"60"}" src="${"/profile.jpeg"}" alt="${"profile"}">` : ``}
			${(client == null ? void 0 : client.image) ? `<img class="${"rounded-full"}" width="${"60"}"${add_attribute("src", client.image, 0)} alt="${"profile"}">` : ``}</section>
		<div class="${"flex flex-col justify-center "}"><h4 class="${"text-[greenyellow] text-[1.3rem] font-medium"}">${escape(client == null ? void 0 : client.username)}</h4></div></header>
	<article class="${"bg-stone-800 w-screen h-screen overflow-y-scroll overflow-x-hidden pb-32"}"${add_attribute("this", article, 0)}>${results.length ? `${each(results, (result, i) => {
    return `${validate_component(Chat, "Chat").$$render($$result, { result, user }, {}, {})}`;
  })}` : ``}</article>
	${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      handleSend,
      handleChange,
      handleInput,
      input
    },
    {},
    {}
  )}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5b80743a.js.map
