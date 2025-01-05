import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./pages/student/home";
import NotFoundPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/instructor" element={<InstructorDashboardpage />} />
      <Route path="/instructor/create-new-course" element={<AddNewCoursePage />} />
      <Route path="/instructor/edit-course/:courseId" element={<AddNewCoursePage />} />
      <Route path="/" element={<StudentViewCommonLayout />}>
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;