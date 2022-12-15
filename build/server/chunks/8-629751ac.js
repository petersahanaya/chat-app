import { i as invalid, r as redirect } from './index2-299b9b54.js';
import { U as User } from './index4-c83e510e.js';
import { A as ACCESS_TOKEN, R as REFRESH_TOKEN } from './private-f66ec900.js';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import 'sequelize';

const actions = {
  login: async ({ request, cookies }) => {
    const formData = Object.fromEntries(await request.formData());
    const { username, password } = formData;
    if (!(username && password))
      return invalid(401, { msg: "Username & Password are Required..." });
    const find = await User.findOne({ where: { username } });
    if (!find)
      return invalid(401, { msg: "Cannot found this user.." });
    const match = await bcrypt.compare(password, find.password);
    if (!match)
      return invalid(400, { msg: "incorrect password.." });
    const accessToken = JWT.sign({ username, id: find.userId, email: find.email, image: find.image }, ACCESS_TOKEN, { expiresIn: "15m" });
    const refreshToken = JWT.sign({ username, id: find.userId, email: find.email, image: find.image }, REFRESH_TOKEN, { expiresIn: "30d" });
    cookies.set("token", accessToken, { path: "/", httpOnly: true, expires: new Date(Date.now() + 1e3 * 60 * 15) });
    cookies.set("refreshToken", refreshToken, { path: "/", httpOnly: true, expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30) });
    await User.update(find, { where: { token: refreshToken } });
    throw redirect(307, "/chat");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
const component = async () => (await import('./_page.svelte-83d87038.js')).default;
const file = '_app/immutable/components/pages/(auth)/auth/login/_page.svelte-57151be0.js';
const imports = ["_app/immutable/components/pages/(auth)/auth/login/_page.svelte-57151be0.js","_app/immutable/chunks/index-d2d958bb.js","_app/immutable/chunks/Error-3a595a7d.js","_app/immutable/chunks/parse-c28c2630.js","_app/immutable/chunks/singletons-8fb9c5f0.js","_app/immutable/chunks/index-471eefe1.js","_app/immutable/chunks/navigation-19c7bdf3.js","_app/immutable/chunks/index-d91ca114.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=8-629751ac.js.map
