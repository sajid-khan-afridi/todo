import AddNew from "./addnew";
import List from "./todo-list";

export default function Page() {
  return (
    <div style={{ margin: "0 auto" }}>
      <AddNew />
      <List />
    </div>
  );
}
