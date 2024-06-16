const phoneInput = <HTMLInputElement>document.querySelector("#phone")!;
import intlTelInput from "intl-tel-input";
import 'intl-tel-input/build/css/intlTelInput.css';

const URL = `https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js`
const INT_INTANCE = intlTelInput(phoneInput, {
    initialCountry: "auto",
    containerClass: "phone",
    autoPlaceholder: "",
    strictMode: true,
    utilsScript: URL,
    formatAsYouType: true,
    formatOnDisplay: true,
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => {
                callback(data.country_code);
            }).catch((err) => callback(err.message))
    }
});

export default INT_INTANCE;