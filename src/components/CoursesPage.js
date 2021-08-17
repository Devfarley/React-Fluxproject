import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';
import { toast } from 'react-toastify';

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

  const handleDelete = (id) => {
    if (id) {
      deleteCourse(id);
      toast.success('Course Deleted');
    }
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Courses
      </Link>
      <CourseList courses={courses} deleteCourse={handleDelete} />
    </>
  );
};

export default CoursesPage;
