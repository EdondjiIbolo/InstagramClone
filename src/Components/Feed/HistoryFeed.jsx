import { History } from "./History";
import "./historyfeed.css";
export function HistoryFeed() {
  return (
    <div className="history__feed">
      <div className="history__slider">
        <History />
        <History />
        <History />
        <History />
        <History />
      </div>
    </div>
  );
}
