// search.js
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { SearchNormal1, Calendar } from "iconsax-react";
import Popover from "@mui/material/Popover";
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays, isBefore, isAfter, getQuarter } from "date-fns";
import * as locales from "react-date-range/dist/locale";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBox({ onSearch }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchText, setSearchText] = React.useState("");
    const [state, setState] = React.useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: "selection",
      },
    ]);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleSearch = () => {
      onSearch(searchText);
      handleClose();
    };
  
    const handleCancelSelection = () => {
        // 선택 취소 버튼 클릭 시 state를 초기 값으로 설정
        setState([
          {
            startDate: null,
            endDate: null,
            key: "selection",
          },
        ]);
      };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
    return (
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 450,
          borderRadius: "33px",
          marginLeft: "170px",
        }}
      >
        <Button
          size="small"
          endIcon={<Calendar size="24" color="#4470E1" />}
          onClick={handleClick}
        >
          <div
            style={{
              color: "black",
              fontSize: 13 + "px",
              marginRight: 5 + "px",
              marginLeft: 20 + "px",
            }}
          >
             대여기간: {state[0].startDate ? state[0].startDate.toLocaleDateString() : ''} -{' '}
  {state[0].endDate ? state[0].endDate.toLocaleDateString() : ''}
          </div>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <DateRange
            style={{ width: "400px" }}
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            locale={locales["ko"]}
            ranges={state}
          />
          <Button onClick={handleCancelSelection}><CloseIcon
                   /> </Button>
        </Popover>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: 13 + "px" }}
          placeholder="물품을 검색해보세요."
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#4470E1" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchNormal1 />
        </IconButton>
      </Paper>
    );
  }