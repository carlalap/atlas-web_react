import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


// Aphrodite CSS Syles -------------------------

const styles = StyleSheet.create({
  bodySectionMargin: {
    marginBottom: '20px',
  },
});

/* End Section Aphrodite CSS Syles*/

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionMargin)}>
      <BodySection {...props} />
    </div>
  );
}

// Reuse the propTypes from BodySection for consistency
BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes
};

export default BodySectionWithMarginBottom;