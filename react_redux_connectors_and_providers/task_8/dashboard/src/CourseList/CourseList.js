// CourseList.js File
import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelectors';

// Aphrodite CSS Styles --------------------------
const styles = StyleSheet.create({
  table: {
    marginTop: '20px',
    width: '80%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    border: '1px solid rgb(10, 10, 10)',
  },
});

const CourseList = ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
              isChecked={course.isSelected}
              onChangeRow={onChangeRow}
              id={course.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
