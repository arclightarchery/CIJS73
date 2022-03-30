import "./Amount.css";

import Money from "./Money/Money.js";

export default function Amount({ money }) {
  return (
    <div className="amount">
      <Money money={money} />
    </div>
  );
}
