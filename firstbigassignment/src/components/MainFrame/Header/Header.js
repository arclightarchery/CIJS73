import "./Header.css";

import Button from "./Frame/Button/Button.js"
import InputContainer from "./InputContainer/InputContainer.js"
import Frame from "./Frame/Frame.js"

export default function Header({ style, clickHandler, currentState }) {
    return (
      <div className="header" style={ currentState == true ? { flexDirection: "column", alignItems: "flex-end" } : null}>
        {currentState == false ? (
          <Button
            classname="addNewExpanse"
            value="ADD NEW EXPANSE"
            onClick={clickHandler}
          />
        ) : (
          <>
            <InputContainer />
            <Frame clickHandler={clickHandler} />
          </>
        )}
      </div>
    );
}