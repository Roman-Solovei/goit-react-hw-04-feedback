import PropTypes from "prop-types";
// import s from "./notification.module.css";

export default function Notification({ message }) {
    return <span>
        { message }
    </span>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}