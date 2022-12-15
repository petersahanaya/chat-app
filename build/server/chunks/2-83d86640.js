import { r as redirect } from './index2-299b9b54.js';
import { R as REFRESH_TOKEN, A as ACCESS_TOKEN } from './private-f66ec900.js';
import JWT from 'jsonwebtoken';

const load = async ({ cookies }) => {
  const token = cookies.get("token") || "";
  const refreshToken = cookies.get("refreshToken") || "";
  let user;
  if (!token && refreshToken) {
    JWT.verify(refreshToken, REFRESH_TOKEN, (err, decoded) => {
      console.log(decoded);
      if (err)
        throw redirect(307, "/auth/register");
      const accessToken = JWT.sign(
        {
          username: decoded.username,
          id: decoded.id,
          email: decoded.email,
          image: decoded.image,
          userId: decoded.userId
        },
        ACCESS_TOKEN,
        { expiresIn: "15m" }
      );
      cookies.set("token", accessToken, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1e3 * 60 * 15)
      });
      user = decoded;
    });
    return {
      user
    };
  }
  if (!token && !refreshToken)
    throw redirect(307, "/auth/register");
  if (token && refreshToken) {
    JWT.verify(token, ACCESS_TOKEN, (err, decoded) => {
      console.log(err == null ? void 0 : err.message);
      if (err)
        return console.log("Error access Token redirected..");
      user = decoded;
    });
  }
  return {
    user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./layout.svelte-1d4f9fed.js')).default;
const file = '_app/immutable/components/layout.svelte-dd63eb73.js';
const imports = ["_app/immutable/components/layout.svelte-dd63eb73.js","_app/immutable/chunks/index-d2d958bb.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=2-83d86640.js.map
