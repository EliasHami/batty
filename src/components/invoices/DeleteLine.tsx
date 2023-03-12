import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

type Props = {
  onDelete: () => void;
};

export default function DeleteLine({ onDelete }: Props) {

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}