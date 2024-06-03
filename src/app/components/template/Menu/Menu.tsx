import { IconMenu2 } from "@tabler/icons-react";

export interface MenuProps {
  onClick: () => void
}

export default function Menu(props: MenuProps) {
  return (
    <div className="
        mt-8 w-fit p-2 cursor-pointer
      "
      onClick={props.onClick}>
      <IconMenu2 className="text-white" stroke={3} />
    </div>
  )
}