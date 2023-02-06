import PropTypes from 'prop-types';

export default function App({ title, subTitle }) {
  return (
    <h3>
      { `Hi ${title}
         ${subTitle} ` }
    </h3>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

App.defaultProps = {
  subTitle: 'World',
};
