import { NextApiResponse } from "next";
import { type NextRequest } from "next/server";
import { getNowPlaying } from "../../lib/spotify";
import { NowPlayingSong } from "../../lib/types";

export default async function handler(
  req: NextRequest,
  res: NextApiResponse<NowPlayingSong>
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
