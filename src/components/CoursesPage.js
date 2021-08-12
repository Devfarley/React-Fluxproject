import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses } from '../actions/courseActions';

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // clean up on unmount
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Coures
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
