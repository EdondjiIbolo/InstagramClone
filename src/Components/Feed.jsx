import { MediaPlayer } from "./Feed/FeedMedia";
import { HistoryFeed } from "./Feed/HistoryFeed";

export function Feed() {
  return (
    <>
      <main className="main-container">
        <HistoryFeed />
        <MediaPlayer />
        <MediaPlayer />
        <MediaPlayer />
      </main>
    </>
  );
}
