import PropTypes from 'prop-types';

/*
const getResult = () => {
    return 4 + 4;
}
*/
export const FirstApp = ({title, subTitle, name}) => {

    //console.log(props);

    return (
        <>
            {/*<h1>{getResult()}</h1>
            <code>{JSON.stringify(newMessage)}</code>*/}
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo",
    name: "Ricardo Penagos"
}