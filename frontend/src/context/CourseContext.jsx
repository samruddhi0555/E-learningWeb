import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";
import server from '../config'

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [myCourse, setMyCourse] = useState([]);

  // public route – no auth needed
  async function fetchCourses() {
    try {
      const { data } = await api.get("/api/course/all");
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  // public route – no auth needed
  async function fetchCourse(id) {
    try {
      const { data } = await api.get(`/api/course/${id}`);
      setCourse(data.course);
    } catch (error) {
      console.log(error);
    }
  }

  // protected route – needs cookie
  async function fetchMyCourse() {
    try {
      const { data } = await api.get("/api/mycourse");
      setMyCourse(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourses(); 
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        fetchCourses,
        fetchCourse,
        course,
        myCourse,
        fetchMyCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);
