import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import Autocomplete from "@mui/joy/Autocomplete";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";

interface Route {
  title: string;
  link: string;
}
interface SearchInputProps {
  // Add any additional props you may have
}

const SearchInput: React.FC<SearchInputProps> = () => {
  const history = useNavigate();

  const Mentee: Route[] = [
    { title: "Home", link: "/mentee/home" },
    { title: "Calendar", link: "/mentee/calendar" },
    { title: "Tasks", link: "/mentee/tasks" },
    { title: "Chat", link: "/mentee/chat" },
  ];

  const Mentor: Route[] = [
    { title: "Home", link: "/mentor/home" },
    { title: "Calendar", link: "/mentor/calendar" },
    { title: "Mentees", link: "/mentor/mentees" },
    { title: "Tasks", link: "/mentor/tasks" },
    { title: "Create Task", link: "/mentor/tasks/create" },
    { title: "Create Meeting", link: "/mentor/calendar/create" },
    { title: "Report", link: "/mentor/report" },
    { title: "Chat", link: "/mentor/chat" },
  ];

  const Admin: Route[] = [
    { title: "Home", link: "/admin/home" },
    { title: "Users", link: "/admin/users" },
    { title: "Pairs", link: "/admin/pairs" },
    { title: "Report", link: "/admin/report" },
  ];

  const [routes, setRoutes] = useState<Route[]>(Mentee);

  useEffect(() => {
    // Extract the pathname from the location object
    const pathname = location.pathname;
    if (pathname.includes("/mentee/")) {
      setRoutes(Mentee);
    }
    if (pathname.includes("/mentor/")) {
      setRoutes(Mentor);
    }
    if (pathname.includes("/admin/")) {
      setRoutes(Admin);
    }
  }, [location.pathname]);
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
        sx={{ minWidth: "500px" }}
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
