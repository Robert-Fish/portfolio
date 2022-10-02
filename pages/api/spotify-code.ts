export default async function handler(req, res) {
  res.redirect(
    "307",
    "https://accounts.spotify.com/authorize?response_type=code&client_id=d187aaadaebc4dde952928ab0383436d&scope=user-read-private%20user-read-email%20&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&state=my-random-state"
  );
}
