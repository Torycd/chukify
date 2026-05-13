import { Navigate } from "react-router-dom";

function CodeSection() {
  return (
    <div>
      {[].map((id) => (
        <ClipSection id={id} key={id} />
      ))}
    </div>
  );
}

export default CodeSection;

export function ClipSection({ id }) {
  return <div onClick={() => Navigate(`/${id}`)}>ClipSection</div>;
}
