import PropTypes from 'prop-types';
export const FirstApp = ({title, subTitle}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    title: 'No Hay titulo',
    subTitle: 'No hay subtitulo'
}