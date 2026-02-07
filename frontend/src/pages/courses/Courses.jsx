import React from 'react';
import './courses.css';
import { CourseData } from '../../context/CourseContext';
import CourseCard from '../../components/courseCard/CourseCard';

const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <div className="no-courses">
            <p>No courses available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;