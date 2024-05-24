// CourseListRow.js File
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => { 
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan="2" 
              style={{ backgroundColor: '#deb5b545'}}  
              className={css(styles.firstRow, styles.header, styles.headerBorder, styles.cellSpacing)}>
                {textFirstCell}
          </th>
        ) : (
          <>
            <th style={{ backgroundColor: '#f5f5f5ab' }}
              className={css(styles.header, styles.secondRow, styles.headerBorder, styles.cellSpacing)}>
                {textFirstCell}
            </th>
            <th style={{ backgroundColor: '#f5f5f5ab' }}
            className={css(styles.header, styles.secondRow, styles.headerBorder, styles.cellSpacing)}>
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td className={css(styles.tableBorder, styles.cellSpacing)}>{textFirstCell}</td>
        <td className={css(styles.tableBorder, styles.cellSpacing)}>{textSecondCell}</td>
      </tr>
    )
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


// Aphrodite CSS Syles --------------------------

const styles = StyleSheet.create({

  table: {
    marginTop: '20px',
    marginLeft: '10px',
    width: '70%',
    marginBottom: '20px',
    borderCollapse: 'collapse',
  },
  
  header: {
    padding: '12px',
    textAlign: 'left',
  },

  headerBorder: {
    border: '2px solid black',
  },

  tableBorder: {
    border: '1px solid black',
  },

  centerText: {
    textAlign: 'center',
  },
  
  leftText: {
    textAlign: 'center',
  },
  
  firstRow: {
    ':first-child': {
      textAlign: 'center',
    },
  },

  secondRow: {
    ':nth-child(2)': {
      textAlign: 'center',
    },
  },

  cellSpacing: {
    padding: '10px',
  },
});

export default CourseListRow;