import React from "react";
import { Tooltip, SvgIcon } from "@mui/material";

import { ReactComponent as LightIcon } from "shared/assets/images/svg/light_icon.svg";
import { ReactComponent as NightIcon } from "shared/assets/images/svg/night_icon.svg";
import { ReactComponent as LoginPersonIcon } from "shared/assets/images/svg/login_page_person_icon.svg";
import { ReactComponent as LoginLockIcon } from "shared/assets/images/svg/login_page_lock_icon.svg";
import { ReactComponent as PasswordNotViewIcon } from "shared/assets/images/svg/password_not_view_icon.svg";
import { ReactComponent as PasswordViewIcon } from "shared/assets/images/svg/password_view_icon.svg";
import { ReactComponent as UserIcon } from "shared/assets/images/svg/user_icon.svg";
import { ReactComponent as NotifyIcon } from "shared/assets/images/svg/notify_icon.svg";
import { ReactComponent as SettingsIcon } from "shared/assets/images/svg/settings_icon.svg";
import { ReactComponent as TuneIcon } from "shared/assets/images/svg/tune_icon.svg";
import { ReactComponent as ArrowIcon } from "shared/assets/images/svg/arrow_icon.svg";
import { ReactComponent as MoreIcon } from "shared/assets/images/svg/more_icon.svg";
import { ReactComponent as ViewIcon } from "shared/assets/images/svg/view_icon.svg";
import { ReactComponent as AddIcon } from "shared/assets/images/svg/add_icon.svg";
import { ReactComponent as EditIcon } from "shared/assets/images/svg/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "shared/assets/images/svg/delete_icon.svg";
import { ReactComponent as SettingsTableIcon } from "shared/assets/images/svg/settings_table_icon.svg";
import { ReactComponent as TableIcon } from "shared/assets/images/svg/table_icon.svg";
import { ReactComponent as ListIcon } from "shared/assets/images/svg/list_icon.svg";
import { ReactComponent as ExpandMoreIcon } from "shared/assets/images/svg/expand_more_icon.svg";
import { ReactComponent as ExpandLessIcon } from "shared/assets/images/svg/expand_less_icon.svg";
import { ReactComponent as FilterIcon } from "shared/assets/images/svg/filter_icon.svg";
import { ReactComponent as SearchIcon } from "shared/assets/images/svg/search_icon.svg";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ExpandMoreIconMui from "@mui/icons-material/ExpandMore";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const iconTypes = {
  light: LightIcon,
  dark: NightIcon,
  user: UserIcon,
  notify: NotifyIcon,
  settings: SettingsIcon,
  tune: TuneIcon,
  loginPerson: LoginPersonIcon,
  loginLock: LoginLockIcon,
  passwordNotView: PasswordNotViewIcon,
  passwordView: PasswordViewIcon,
  arrow: ArrowIcon,
  more: MoreIcon,
  view: ViewIcon,
  add: AddIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  settingsTable: SettingsTableIcon,
  table: TableIcon,
  list: ListIcon,
  expandMore: ExpandMoreIcon,
  expandLess: ExpandLessIcon,
  filter: FilterIcon,
  search: SearchIcon,
  export: SystemUpdateAltOutlinedIcon,
  return: KeyboardReturnIcon,
  group: FilterNoneIcon,
  report: AssessmentOutlinedIcon,
  reports: AssessmentOutlinedIcon,
  coefficient: SignalCellularAltIcon,
  download: CloudDownloadIcon,
  message: ForwardToInboxIcon,
  checkCircle: CheckCircleIcon,
  emptyCircle: PanoramaFishEyeIcon,
  users: PeopleOutlineIcon,
  toggleActive: RadioButtonCheckedIcon,
  circle: CircleIcon,
  arrowBack: ArrowBackIcon,
  vehicle: DirectionsCarIcon,
  messageTemplates: ContactMailOutlinedIcon,
  indicators: SummarizeOutlinedIcon,
  logs: EventNoteOutlinedIcon,
  personalAccounts: AccountBoxOutlinedIcon,
  vehicles: GarageOutlinedIcon,
  rating: GradeOutlinedIcon,
  catalogs: SourceOutlinedIcon,
  staff: BadgeOutlinedIcon,
  cancel: CancelIcon,
  schedule: ScheduleIcon,
  error: ErrorOutlineIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  roles: ManageAccountsOutlinedIcon,
  remove: RemoveOutlinedIcon,
  action: PendingActionsIcon,
  expandMoreMui: ExpandMoreIconMui,
  update: UpdateOutlinedIcon,
  work_place: EngineeringOutlinedIcon,
  close: CloseOutlinedIcon,
  repair: CarRepairOutlinedIcon,
  systemSettings: SettingsOutlinedIcon,
};

export const Icon = ({ name, title, ...props }) => {
  const icon = iconTypes[name];
  return (
    <Tooltip title={title}>
      <SvgIcon {...props} component={icon} inheritViewBox />
    </Tooltip>
  );
};
