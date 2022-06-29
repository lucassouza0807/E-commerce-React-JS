import $ from "jquery";
import "./jquery.mask";

function mask() {
    $(document).ready(function () {
        $(".cpf").mask("000.000.000-00");
    })
    
    console.log("D")
}

export default mask
