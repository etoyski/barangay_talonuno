let baseUrl = "http://localhost:3000";

if ( window.location.origin === "https://barangay-talon-uno.vercel.app" ) {
    baseUrl = "https://barangay-talon-uno.vercel.app";
} else {
    baseUrl = "http://localhost:3000";
}

export default baseUrl;