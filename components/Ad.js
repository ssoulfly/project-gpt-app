import React from 'react';
import Svg, { Path } from 'react-native-svg';


function Ad(props) {
    return (
        <Svg width={props.width || "12"} height={props.height || "9"} viewBox="0 0 12 9" fill="none" style={props.style}>
            <Path d="M3.69187 4.875H4.55813L4.125 3.62766L3.69187 4.875ZM8.25 4.5C7.93992 4.5 7.6875 4.75242 7.6875 5.0625C7.6875 5.37258 7.93992 5.625 8.25 5.625C8.56008 5.625 8.8125 5.37258 8.8125 5.0625C8.8125 4.75242 8.56008 4.5 8.25 4.5ZM10.875 0H1.125C0.503906 0 0 0.503906 0 1.125V7.875C0 8.49609 0.503906 9 1.125 9H10.875C11.4961 9 12 8.49609 12 7.875V1.125C12 0.503906 11.4961 0 10.875 0ZM5.87297 6.75H5.47594C5.31633 6.75 5.17406 6.64875 5.12156 6.49805L4.94883 6H3.30141L3.12844 6.49805C3.10287 6.57166 3.055 6.63547 2.99149 6.68063C2.92799 6.72578 2.85199 6.75003 2.77406 6.75H2.37703C2.11898 6.75 1.93805 6.4957 2.02266 6.25195L3.28125 2.62781C3.3196 2.51745 3.39136 2.42176 3.48658 2.35406C3.5818 2.28635 3.69574 2.24998 3.81258 2.25H4.43742C4.55429 2.24998 4.66826 2.28638 4.76349 2.35413C4.85871 2.42189 4.93046 2.51763 4.96875 2.62805L6.22711 6.25195C6.31172 6.4957 6.13078 6.75 5.87297 6.75ZM9.9375 6.375C9.9375 6.58219 9.76969 6.75 9.5625 6.75H9.1875C9.07383 6.75 8.97563 6.6968 8.90672 6.61688C8.70469 6.70266 8.48273 6.75 8.25 6.75C7.31953 6.75 6.5625 5.99297 6.5625 5.0625C6.5625 4.13203 7.31953 3.375 8.25 3.375C8.44828 3.375 8.63578 3.41555 8.8125 3.47859V2.625C8.8125 2.41781 8.98031 2.25 9.1875 2.25H9.5625C9.76969 2.25 9.9375 2.41781 9.9375 2.625V6.375Z" fill="black"/>
        </Svg>
    );
}


export default Ad;