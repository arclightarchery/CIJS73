import "./Frame.css"

import Button from "./Button/Button.js"

export default function Frame({ clickHandler }) {
    return (
      <div className="frame">
        <Button classname="addBtn" value="ADD" />
        <Button classname="cancelBtn" value="CANCEL" onClick={clickHandler} />
      </div>
    );
}