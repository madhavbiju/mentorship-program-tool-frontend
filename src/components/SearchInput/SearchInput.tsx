import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import Autocomplete from "@mui/joy/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

interface Route {
  title: string;
  link: string;
}

const routes: Route[] = [
  { title: "Home", link: "/mentor/home" },
  { title: "Calendar", link: "/mentor/calendar" },
  { title: "Mentees", link: "/mentor/mentees" },
  { title: "Tasks", link: "/mentor/tasks" },
  { title: "Create Task", link: "/mentor/tasks/create" },
  { title: "Create Meeting", link: "/mentor/calendar/create" },
  { title: "Report", link: "/mentor/report" },
];

interface SearchInputProps {
  // Add any additional props you may have
}

const SearchInput: React.FC<SearchInputProps> = () => {
  const history = useNavigate();

  const handleOptionSelect = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value) {
      const selectedRoute = routes.find((route) => route.title === value);
      if (selectedRoute) {
        history(selectedRoute.link);
      }
    }
  };

  return (
    <FormControl id="free-solo-2-demo">
      <Autocomplete
        startDecorator={<SearchRoundedIcon color="primary" />}
        placeholder="Search anything"
        type="search"
        freeSolo
        autoComplete
        autoHighlight
        options={routes.map((option) => option.title)}
        onChange={handleOptionSelect}
      />
    </FormControl>
  );
};

export default SearchInput;
