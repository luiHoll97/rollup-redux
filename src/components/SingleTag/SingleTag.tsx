import { Tag } from "../../types/Tag";
import { removeTag } from "../../redux/tagSlice";
import { useAppDispatch } from "../../redux/hooks";
import "./singleTag.css";

interface Props {
  tag: Tag;
}
const SingleTag = ({ tag }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="tag"
      key={tag.id}
      onClick={() => dispatch(removeTag(tag.id))}
    >
      {tag.text}
    </button>
  );
};

export default SingleTag;
