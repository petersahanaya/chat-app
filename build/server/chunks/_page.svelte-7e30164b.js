import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, f as each, e as escape } from './index-f5798eac.js';
import { I as IconBase } from './IconBase-fb6233a8.js';
import io from 'socket.io-client';
import { s as sockets, c as clients } from './chat-19239bef.js';
import './index3-2123adbf.js';

const IoIosFlash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="${"M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"}"></path>`;
    }
  })}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { client } = $$props;
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `<a${add_attribute("href", `/chat/${client.id}`, 0)}><section class="${"flex mt-3 p-3 justify-around items-center w-screen rounded-full cursor-pointer bg-stone-900 transition-[200ms] hover:bg-stone-900/60"}"><div class="${"relative"}">${!client.image ? `<img class="${"rounded-full"}" width="${"70"}" src="${"/profile.jpeg"}" alt="${"profile"}">` : ``}
            ${client.image ? `<img class="${"rounded-full"}" width="${"70"}"${add_attribute("src", client.image, 0)} alt="${"profile"}">` : ``}
            <div class="${"absolute bottom-0 right-0 w-[8px] h-[8px] bg-[greenyellow] rounded-full"}"></div></div>
        <article class="${"flex justify-between items-center gap-3"}"><h4 class="${"text-[1.3] text-[greenyellow] font-medium"}">${escape(client.username)}</h4>
            <p class="${"text-[.9rem] text-stone-300"}">${escape(`${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`)}</p></article></section></a>`;
});
const MdModeEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({ viewBox: "0 0 24 24" }, $$props), {}, {
    default: () => {
      return `<path d="${"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}"></path>`;
    }
  })}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<header class="${"flex justify-around items-center p-2 w-screen bg-stone-800"}"><section>${!(user == null ? void 0 : user.image) ? `<img class="${"rounded-full"}" width="${"100"}" src="${"/profile.jpeg"}" alt="${"profile"}">` : ``}
        ${(user == null ? void 0 : user.image) ? `<img class="${"rounded-full"}" width="${"100"}"${add_attribute("src", user.image, 0)} alt="${"profile"}">` : ``}</section>
    <div class="${"flex flex-col justify-center "}"><h4 class="${"text-[greenyellow] text-[1.3rem] font-medium"}">${escape(user == null ? void 0 : user.username)}</h4>
        <p class="${"text-stone-400 text-[.8rem]"}">Front End Developer</p></div>
    <a${add_attribute("href", "/chat/settings", 0)} class="${"text-stone-300 w-[20px]"}">${validate_component(MdModeEdit, "MdModeEdit").$$render($$result, {}, {}, {})}</a></header>`;
});
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $clients, $$unsubscribe_clients;
  $$unsubscribe_clients = subscribe(clients, (value) => $clients = value);
  let { data } = $$props;
  const { user } = data;
  const client = {
    senderName: user.username,
    senderImg: user.image,
    senderId: user.id
  };
  let input = "";
  const socket = io("http://localhost:3000");
  sockets.set(socket);
  socket.on("on-room", (data2) => {
    if (data2) {
      goto("/chat/room");
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    socket.emit("on-join", client);
  }
  {
    socket.on("clients", (data2) => {
      let filtered = data2.filter((s) => s.id !== user.id);
      clients.set(filtered);
    });
  }
  $$unsubscribe_clients();
  return `${$$result.head += `<!-- HEAD_svelte-178il7c_START -->${$$result.title = `<title>p3chat&#39;S</title>`, ""}<meta name="${"description"}" content="${"Chat with your friend or random people in p3chat's"}"><!-- HEAD_svelte-178il7c_END -->`, ""}
${validate_component(Header, "Header").$$render($$result, { user }, {}, {})}
<main class="${"w-screen h-screen bg-stone-800 flex flex-col items-center"}"><section class="${"mt-10 relative"}"><input maxlength="${"6"}" class="${"p-3 w-[80vw] rounded-full outline-none bg-stone-700 text-white placeholder:text-stone-400"}" type="${"text"}" placeholder="${"room id"}"${add_attribute("value", input, 0)}>
		<div class="${"absolute top-[10px] right-[10px] w-[30px] text-stone-200"}">${validate_component(IoIosFlash, "IoIosFlash").$$render($$result, {}, {}, {})}</div></section>
	<div class="${"flex mt-4 flex-col justify-center items-center w-screen"}">${!$clients.length ? `<p class="${"mt-8 text-stone-200 text-[.9rem]"}">There&#39;s no online user&#39;s yet</p>` : ``}
		${each($clients, (client2) => {
    return `${validate_component(Card, "Card").$$render($$result, { client: client2 }, {}, {})}`;
  })}</div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7e30164b.js.map
