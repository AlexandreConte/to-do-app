import { IconX } from "@tabler/icons-react";

export interface CloseMenuProps {
  onClick: () => void
}

export default function CloseMenu(props: CloseMenuProps) {
  return (
    <div onClick={props.onClick}
    className="p-2 cursor-pointer w-fit mt-4"
    >
      <IconX color="white" stroke={3} />
    </div>
  )
}