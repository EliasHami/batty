import { Add, ContentCopy, VerticalAlignBottom, VerticalAlignTop } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import DeleteLine from './DeleteLine';

const ITEM_HEIGHT = 60;

type Props = {
  onDelete: () => void;
  onDuplicate: () => void;
};

export default function LineMenu({ onDelete, onDuplicate }: Props): React.ReactElement<Props> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Add fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add a discount</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <VerticalAlignTop fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add a line above</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <VerticalAlignBottom fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add a line below</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconButton onClick={onDuplicate}>
                <ContentCopy fontSize="small" />
              </IconButton>
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <DeleteLine onDelete={onDelete} />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
