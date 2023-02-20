import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

export default function ComponentsOverrides(theme) {
  return Object.assign(Input(theme), Checkbox(theme), Radio(theme));
}
