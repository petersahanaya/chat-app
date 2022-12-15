import { U as User } from './index4-c83e510e.js';
import JWT from 'jsonwebtoken';
import { A as ACCESS_TOKEN, R as REFRESH_TOKEN } from './private-f66ec900.js';
import 'sequelize';

const POST = async ({ request, cookies }) => {
  const body = await request.json();
  console.log(body);
  if (body) {
    await User.update({ image: body.url }, { where: { username: body.username } });
    const user = await User.findOne({ where: { username: body.username } });
    const accessToken = JWT.sign({ username: user.username, id: user.id, email: user.email, image: user.image, userId: user.userId }, ACCESS_TOKEN, { expiresIn: "15m" });
    const refreshToken = JWT.sign({ username: user.username, id: user.id, email: user.email, image: user.image, userId: user.userId }, REFRESH_TOKEN, { expiresIn: "15m" });
    cookies.set("token", accessToken, { path: "/", httpOnly: true, expires: new Date(Date.now() + 1e3 * 60 * 15) });
    cookies.set("refreshToken", refreshToken, { path: "/", httpOnly: true, expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30) });
    return new Response(JSON.stringify("You profile is updated.."), { status: 200 });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-96d2ebcf.js.map
