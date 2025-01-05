import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex flex-wrap items-center justify-between p-4 border-b bg-white">
      {/* Left Section: Brand and Navigation */}
      <div className="flex items-center space-x-4">
        <Link
          to="/home"
          className="flex items-center hover:text-black text-sm md:text-base"
        >
          <GraduationCap className="h-6 w-6 md:h-8 md:w-8 mr-2" />
          <span className="font-extrabold md:text-xl text-base">E-LEARN</span>
        </Link>
        <div className="hidden md:flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-sm md:text-base font-medium"
          >
            Explore Courses
          </Button>
        </div>
      </div>

      {/* Right Section: User Actions */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <div
          onClick={() => navigate("/student-courses")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="font-bold text-sm md:text-base">My Courses</span>
          <TvMinimalPlay className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <Button
          onClick={handleLogout}
          className="text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
        >
          Sign Out
        </Button>
      </div>

      {/* Mobile Navigation: Explore Courses */}
      <div className="flex md:hidden w-full mt-2">
        <Button
          variant="ghost"
          onClick={() => {
            location.pathname.includes("/courses")
              ? null
              : navigate("/courses");
          }}
          className="text-sm font-medium w-full"
        >
          Explore Courses
        </Button>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;