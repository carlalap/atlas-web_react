import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'

function CourseList() {
    return (
        <div>
            <div class="table">
                <table id="CourseList">
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
                    </thead>
                    <tbody>
                    <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60"/>
                    <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20"/>
                    <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40"/>
                    </tbody>
                </table>
            </div>
            <div className="linea"></div>
        </div>
    );
}

export default CourseList;