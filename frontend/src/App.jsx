import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Common Components */
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

/* Pages */
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lectures/Lecture";
import Dashboard from "./pages/dashboard/Dashboard";
import Account from "./pages/account/Account";

/* Auth Pages */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";

/* Payment */
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";

/* Admin Pages */
import AdminDashboard from "./admin/dashboard/AdminDasboard";
import AdminCourses from "./admin/courses/AdminCourses";
import AdminUsers from "./admin/users/AdminUsers";

/* Context */
import { UserData } from "./context/UserContext";

const App = () => {
  const { isAuth, user, loading } = UserData();

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Header isAuth={isAuth} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />

        {/* Auth Routes */}
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />

        {/* User Routes */}
        <Route
          path="/account"
          element={isAuth ? <Account user={user} /> : <Login />}
        />

        <Route
          path="/course/:id"
          element={isAuth ? <CourseDescription user={user} /> : <Login />}
        />

        <Route
          path="/course/study/:id"
          element={isAuth ? <CourseStudy user={user} /> : <Login />}
        />

        <Route
          path="/lectures/:id"
          element={isAuth ? <Lecture user={user} /> : <Login />}
        />

        <Route
          path="/payment-success/:id"
          element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
        />

        <Route
          path="/:id/dashboard"
          element={isAuth ? <Dashboard user={user} /> : <Login />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={isAuth ? <AdminDashboard user={user} /> : <Login />}
        />

        <Route
          path="/admin/course"
          element={isAuth ? <AdminCourses user={user} /> : <Login />}
        />

        <Route
          path="/admin/users"
          element={isAuth ? <AdminUsers user={user} /> : <Login />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
