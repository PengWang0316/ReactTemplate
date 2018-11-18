export const JWT_MESSAGE = 'ReactTemplate_JWT';

// export const BASE_URL = 'https://orders-taker.glitch.me'; // Development server
// export const BASE_URL = 'https://orderstaker.kevin-project.com:8081'; // Development server on the AWS
export const BASE_URL = 'http://localhost:8081'; // Production server
// export const SOCKETIO_URL = 'https://orderstaker.kevin-project.com:3001';
export const SOCKETIO_URL = 'https://orderstaker.kevin-project.com:3000'; // Production server

export const CLOUDINARY_UPLOAD_PRESET = 'OrdersTakerWebApp'; // The preset of Cloudinary.
export const LOGIN_CALLBACK_URL = 'Tmobile_loginCallbackUrl';

export const MAX_ORDER_AMOUNT = 6; // How many orders will show in the one page

/* Lazy image loading */
export const LAZY_IMAGE_CLASS = 'lazyImage';
export const IMAGE_PLACEHOLDER_URL = 'https://res.cloudinary.com/orderstaker/image/upload/v1536616770/others/PlaceHolder.png';

/* URLS */
export const HOME_PAGE_URL = '/';
export const LOGIN_REDIRECT_RUL = '/loginRedirect';

/* Socket IO events */
export const SOCKETIO_EVENT_ADD_NEW_ORDER = 'socketioEventAddNewOrder';
export const SOCKETIO_EVENT_UPDATE_ORDER_ITEM = 'socketioEventUpdateOrderItem';
