import { i as invalid, r as redirect } from './index2-299b9b54.js';
import { U as User } from './index4-c83e510e.js';
import bcrypt from 'bcrypt';
import 'sequelize';
import './private-f66ec900.js';

const actions = {
  register: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { username, password, email } = formData;
    if (!(username && password && email))
      return invalid(401, { msg: "Username, Password & Email are Required..." });
    const duplicate = await User.findOne({ where: { username } });
    console.log(duplicate);
    if (duplicate)
      return invalid(400, { username, msg: "Another user already user this username.." });
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashPassword, email, userId: crypto.randomUUID() });
    throw redirect(307, "/auth/login");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 9;
const component = async () => (await import('./_page.svelte-20a85aaa.js')).default;
const file = '_app/immutable/components/pages/(auth)/auth/register/_page.svelte-3bbbad91.js';
const imports = ["_app/immutable/components/pages/(auth)/auth/register/_page.svelte-3bbbad91.js","_app/immutable/chunks/index-d2d958bb.js","_app/immutable/chunks/IconBase-c373613c.js","_app/immutable/chunks/Error-3a595a7d.js","_app/immutable/chunks/parse-c28c2630.js","_app/immutable/chunks/singletons-8fb9c5f0.js","_app/immutable/chunks/index-471eefe1.js","_app/immutable/chunks/navigation-19c7bdf3.js","_app/immutable/chunks/index-d91ca114.js"];
const stylesheets = ["_app/immutable/assets/IconBase-d93538e2.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=9-496d22bb.js.map
