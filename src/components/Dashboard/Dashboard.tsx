import { Tag } from "../../types/Tag";
import SingleTag from "../SingleTag/SingleTag";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { tagSelector } from "../../redux/tagSlice";
import { addTag } from "../../redux/tagSlice";
import "./dashboard.css";

const Dashboard = () => {
  const [input, setInput] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<boolean>(false);
  const tags = useAppSelector(tagSelector);
  const dispatch = useAppDispatch();

  const handleSubmitTag = () => {
    if (tags.length <= 5) {
      dispatch(addTag(input));
      setInput("");
    } else {
      setWarningMessage(true);
      handleWarning();
    }
  };

  const handleWarning = () => {
    setTimeout(() => {
      setWarningMessage(false);
    }, 4000);
  };

  return (
    <>
      <div className="container">
        <div className="add-tag">
          <input
            className="input-field"
            placeholder="enter tag here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-button" onClick={() => handleSubmitTag()}>
            Add Tag
          </button>
        </div>
        <div className="tag-container">
          {tags.map((tag: Tag) => (
            <SingleTag tag={tag} />
          ))}
        </div>
        {warningMessage && (
          <div className="warning">maximum tags reached (5)</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
