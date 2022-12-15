import { c as create_ssr_component, b as subscribe, d as add_attribute, f as each, v as validate_component } from './index-f5798eac.js';
import { s as sockets, r as room } from './chat-19239bef.js';
import { C as Chat, F as Footer } from './Footer-f65a04b0.js';
import './index3-2123adbf.js';
import './IconBase-fb6233a8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sockets, $$unsubscribe_sockets;
  let $room, $$unsubscribe_room;
  $$unsubscribe_sockets = subscribe(sockets, (value) => $sockets = value);
  $$unsubscribe_room = subscribe(room, (value) => $room = value);
  let { data } = $$props;
  let input = "";
  let results = [];
  let article;
  const { user } = data;
  $sockets.on("send-room", (data2) => {
    console.log(data2);
    results = [...results, data2];
  });
  $sockets.on("on-room", (data2) => {
  });
  const handleSend = () => {
    if (input) {
      const messages = {
        senderName: user.username,
        senderImg: user.image,
        senderMsg: input,
        roomId: $room,
        date: `${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`
      };
      $sockets.emit("room-msg", messages);
      results = [...results, messages];
      input = "";
    }
  };
  const handleChange = (e) => {
    input = e.target.value;
    console.log(e.target.value);
  };
  const handleInput = (e) => {
    if (input) {
      if (e.key === "Enter") {
        const messages = {
          senderName: user.username,
          senderImg: user.image,
          senderMsg: input,
          roomId: $room,
          date: `${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`
        };
        console.log("Sended..");
        $sockets.emit("room-msg", messages);
        results = [...results, messages];
        input = "";
      }
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_sockets();
  $$unsubscribe_room();
  return `${$$result.head += `<!-- HEAD_svelte-4r789v_START -->${$$result.title = `<title>Chat&#39;s</title>`, ""}<meta name="${"description"}" content="${"you can chat with you'r friend anywhere"}"><!-- HEAD_svelte-4r789v_END -->`, ""}

<main class="${"w-screem screen bg-stone-800"}"><header class="${"flex justify-around items-center p-2 w-screen h-[10vh] bg-stone-800 shadow-md shadow-white"}"><h3 class="${"text-[3rem] text-zinc-200"}">Chat&#39;s room</h3></header>
	<article class="${"bg-stone-800 w-screen h-screen overflow-y-scroll overflow-x-hidden pb-32"}"${add_attribute("this", article, 0)}>${results.length ? `${each(results, (result, i) => {
    return `${validate_component(Chat, "Chat").$$render($$result, { result, user }, {}, {})}`;
  })}` : ``}</article>
${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      handleSend,
      handleChange,
      input,
      handleInput
    },
    {},
    {}
  )}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f9249f59.js.map
