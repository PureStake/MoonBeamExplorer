import * as React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItemSecondaryAction,
  Input,
  ListItemIcon,
  Tooltip,
} from "@material-ui/core"; //tslint:disable-line
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";
import Divider from "@material-ui/core/Divider";
interface IConfigurationMenuProps {
  onChange: (type: string, url: string) => any;
}

interface IPagedMenuProps {
  onChange: (type: string, url: string) => any;
}

const PagedMenu: React.FC<IPagedMenuProps> = (props) => {
  const [selected, setSelected] = React.useState<
    "service-runner" | "ethereum-rpc" | null
  >(null);
  const { t } = useTranslation();
  const nameMap = {
    "service-runner": t("Service Runner RPC Url"),
    "ethereum-rpc": " RPC Url (http://...)",
  };

  if (selected) {
    return (
      <>
        <MenuItem onClick={() => setSelected(null)}>
          <ListItemIcon>
            <NavigateBefore />
          </ListItemIcon>
          <ListItemText>{t("Back")}</ListItemText>
        </MenuItem>
        <Input
          onChange={(e) => props.onChange(selected, e.currentTarget.value)}
          placeholder={nameMap[selected]}
          fullWidth={true}
        />
      </>
    );
  }

  return (
    <>
      <MenuItem
        onClick={(e) => props.onChange("ethereum-rpc", "http://localhost:9933")}
      >
        <ListItemText>{t("Development Node")}</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={(e) =>
          props.onChange("ethereum-rpc", "https://rpc.testnet.moonbeam.network")
        }
      >
        <ListItemText>{t("Moonbase Alpha")}</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={(e) =>
          props.onChange(
            "ethereum-rpc",
            "https://rpc.moonriver.moonbeam.network"
          )
        }
      >
        <ListItemText>{t("Moonriver")}</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => setSelected("ethereum-rpc")}>
        <ListItemText>{t("Custom RPC")}</ListItemText>
        <ListItemSecondaryAction>
          <NavigateNext />
        </ListItemSecondaryAction>
      </MenuItem>
    </>
  );
};

const ConfigurationMenu: React.FC<IConfigurationMenuProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const { t } = useTranslation();
  const open = !!anchorEl;

  function handleMenu(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Tooltip title={t("Configuration") as string}>
        <IconButton
          aria-label="Configuration"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <SettingsIcon color="action" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        PaperProps={{
          style: {
            width: "250px",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClose}
      >
        <PagedMenu onChange={props.onChange}></PagedMenu>
      </Menu>
    </>
  );
};

export default ConfigurationMenu;
