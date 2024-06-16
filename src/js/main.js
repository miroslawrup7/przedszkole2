const accordionsLoc = document.querySelectorAll(".accordion")
const jobDetailsLoc = document.querySelector(".job-details");

if (accordionsLoc.length) {

    accordionsLoc.forEach((element) => {
        const titleRowsLoc = element.querySelectorAll(".row .title-row")

        const iconsLoc = element.querySelectorAll(".row .icon")
        const titlesLoc = element.querySelectorAll(".title-wrapper .title")

        const contentsLoc = element.querySelectorAll(".row .content-row")
              
        let arr = [...titleRowsLoc, ...contentsLoc]
        
        const activateElements = (activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target) => {
            if (!activatedElem.classList.contains("active")) {
            
                if (jobDetailsLoc) {

                    if (target.classList.contains("title")) {
                        iconsLoc.forEach((el)=> {
                            el.classList.remove("active")
                        })
                        titlesLoc.forEach((el)=> {
                            el.classList.remove("active")
                        })
                        
                        contentsLoc.forEach((elem)=> {
                            elem.classList.remove("active")
                        })
                    }
                } else {
                    iconsLoc.forEach((el)=> {
                        el.classList.remove("active")
                    })
                    titlesLoc.forEach((el)=> {
                        el.classList.remove("active")
                    })
                    
                    contentsLoc.forEach((elem)=> {
                        elem.classList.remove("active")
                    })
                }
                
                clickedIconLoc.classList.add("active")
                clickedTitleLoc.classList.add("active")
                clickedContentLoc.classList.add("active")

            } else {
                
                if (jobDetailsLoc) {
                    if (target.classList.contains("title")) {
                        clickedContentLoc.classList.remove("active")
                        clickedIconLoc.classList.remove("active")
                        clickedTitleLoc.classList.remove("active")
                    }
                } else {
                    clickedContentLoc.classList.remove("active")
                    clickedIconLoc.classList.remove("active")
                    clickedTitleLoc.classList.remove("active")
                }
            }
        }
        
        arr.forEach((elem)=> {
            elem.addEventListener("click", (e) => {

                const target = e.target

                const clickedRowLoc = elem.closest(".row")
    
                const clickedIconLoc = clickedRowLoc.querySelector(".icon")
                const clickedTitleLoc = clickedRowLoc.querySelector(".title")

                const clickedContentLoc = clickedRowLoc.querySelector(".content-row")
                
                if (elem.classList.contains("title-row")) {
                    const activatedElem = elem.querySelector(".title")
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target)
                }

                if (elem.classList.contains("content-row")) {
                    const activatedElem = elem
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target)
                }
            })
        })
    })
}

// contact form ----------------------------------------
const inputWrapperLoc = document.querySelectorAll(".input-wrapper")

inputWrapperLoc.forEach((elem) => {

    elem.querySelector("input, textarea").value = ""

    elem.addEventListener("click", () => {
        elem.querySelector("label").classList.add("mini")
        elem.querySelector(".error").classList.add("mini")
        elem.querySelector("input").classList.add("active")
    })

    elem.querySelector("input").addEventListener("blur", (event) => {
        event.target.value = event.target.value.trim()
        if (!event.target.value) {
            elem.querySelector("label").classList.remove("mini")
            elem.querySelector(".error").classList.remove("mini")
            elem.querySelector("input").classList.remove("active")
        }
    })
})

// contact form validation ----------------------------------------
const contactFormWrapperLoc = document.querySelector(".contact-form-wrapper")
const contactFormWrapper_EnrolmentLoc = document.querySelector(".contact-form-wrapper.enrolment")
const form = document.querySelector(".contact")
const contactFormLoc = document.querySelector(".contact-form")
const sendEmailMessageLoc = document.querySelector(".send-email-message")

if (contactFormWrapperLoc) {
    const nameLoc = document.querySelector("#name")
    const surnameLoc = document.querySelector("#surname")

    const childNameLoc = document.querySelector("#child_name")
    const ageLoc = document.querySelector("#age")
    const startLoc = document.querySelector("#start")

    const mailLoc = document.querySelector("#mail")
    const phoneLoc = document.querySelector("#phone")
    const messageLoc = document.querySelector("#message")

    const rodoCheckboxLoc = document.querySelector("#agreement_1")
    const rodoCheckmarkoc = document.querySelector(".checkmark")
    const rodoErrorSpanLoc = document.querySelector("#rodo_error")

    const buttonLoc = document.querySelector(".send-form")
    const page = document.querySelector("#page")

    const textInputsArray = [...contactFormWrapperLoc.querySelectorAll("input[type=text], textarea")]
    
    let validationPass = true
    
    const validateEmpty = (e, elem, allValidate) => {
       
        if (elem === undefined) {
           
            if (e.target === undefined) {
                elem = e
            } else {
                elem = e.target
            }
        }

        let empty

        if (elem.id === "agreement_1") {
            if (!elem.checked) {
                empty = false
            } else {
                empty = true
            }
        } else if (elem.id === "select-selected") {
            if (!elem.innerText) {
                empty = false
            } else {
                empty = true
            }

        } else {
            if (!elem.value) {
                empty = false
            } else {
                empty = true
            }
        }

       

        let allTextInputsAreNotEmpty = false
        allTextInputsAreNotEmpty = textInputsArray.some(element => (element.value !== ""))
    
        if (!empty) {
            if (allValidate) {
                validationPass = false
                if (elem.id === "agreement_1") {
                    rodoErrorSpanLoc.innerText = "[ to pole jest wymagane ]"
                    rodoCheckmarkoc.classList.add("error")
                } else if (elem.id === "select-selected") {
                    replacementQuestionLoc.parentNode.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]"
                    elem.classList.add("error")
                } else {
                    elem.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]"
                    elem.classList.add("error")
                }
            } else {

                if (!allTextInputsAreNotEmpty && rodoCheckboxLoc.checked === false && replacementQuestionLoc.innerText === "") {

                    
                        
                    if (elem.id === "agreement_1") {
                        rodoErrorSpanLoc.innerText = ""
                        rodoCheckmarkoc.classList.remove("error")
                    } else if (elem.id === "select-selected") {
                        replacementQuestionLoc.parentNode.previousElementSibling.querySelector("span").innerText = ""
                        elem.classList.remove("error")
                    } else {
                        elem.previousElementSibling.querySelector("span").innerText = ""
                        elem.classList.remove("error")
                    }
                    
                    nameLoc.previousElementSibling.querySelector("span").innerText = ""
                    nameLoc.classList.remove("error")
                    surnameLoc.previousElementSibling.querySelector("span").innerText = ""
                    surnameLoc.classList.remove("error")
                    mailLoc.previousElementSibling.querySelector("span").innerText = ""
                    mailLoc.classList.remove("error")
                    phoneLoc.previousElementSibling.querySelector("span").innerText = ""
                    phoneLoc.classList.remove("error")
                    messageLoc.previousElementSibling.querySelector("span").innerText = ""
                    messageLoc.classList.remove("error")
                    rodoErrorSpanLoc.innerText = ""
                    rodoCheckmarkoc.classList.remove("error")
                    replacementQuestionLoc.parentNode.previousElementSibling.querySelector("span").innerText = ""
                    replacementQuestionLoc.classList.remove("error")
                    

                    if (contactFormWrapper_EnrolmentLoc) {
                        childNameLoc.previousElementSibling.querySelector("span").innerText = ""
                        childNameLoc.classList.remove("error")
                        ageLoc.previousElementSibling.querySelector("span").innerText = ""
                        ageLoc.classList.remove("error")
                        startLoc.previousElementSibling.querySelector("span").innerText = ""
                        startLoc.classList.remove("error")
                    }
               
                } else {
                    validationPass = false
                    if (elem.id === "agreement_1") {
                        rodoErrorSpanLoc.innerText = "[ to pole jest wymagane ]"
                        rodoCheckmarkoc.classList.add("error")
                    } else if (elem.id === "select-selected") {
                        replacementQuestionLoc.parentNode.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]"
                        elem.classList.add("error")
                    } else {
                        elem.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]"
                        elem.classList.add("error")
                    }
                }
            }
            
        } else {
            if (elem.id === "agreement_1") {
                rodoErrorSpanLoc.innerText = ""
                rodoCheckmarkoc.classList.remove("error")
            } else if (elem.id === "select-selected") {
                replacementQuestionLoc.parentNode.previousElementSibling.querySelector("span").innerText = ""
                elem.classList.remove("error")
            } else {
                elem.previousElementSibling.querySelector("span").innerText = ""
                elem.classList.remove("error")
            }
        }
    };
    
    const validateEmail = (e, elem) => {
        mailLoc.addEventListener("keyup", validateEmail)
        mailLoc.addEventListener("input", validateEmail)
        if (elem === undefined) {
            elem = e.target
        }
        if (elem.value) {
            
            if (
                !String(elem.value)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
            ) {
                elem.previousElementSibling.querySelector("span").innerText = " [ nieprawidłowy adres e-mail ]"
                validationPass = false
                mailLoc.classList.add("error")
            } else {
                elem.previousElementSibling.querySelector("span").innerText = ""
                mailLoc.classList.remove("error")
            }
        }
    };
    
    const validatePhone = (e, elem) => {
        phoneLoc.addEventListener("keyup", validatePhone)
        phoneLoc.addEventListener("input", validatePhone)
        if (elem === undefined) {
            elem = e.target
        }
        if (elem.value) {
            elem.value = elem.value.replace(/\s|\-/g, '')
            
            if (
                !String(elem.value)
                    .toLowerCase()
                    .match(
                        /(?<!.)((\+48)?[ ]?\d{9})(?!.)/
                    )
            ) {
                elem.previousElementSibling.querySelector("span").innerText = " [ nieprawidłowy nr telefonu ]"
                validationPass = false
                phoneLoc.classList.add("error")
            } else {
                elem.previousElementSibling.querySelector("span").innerText = ""
                phoneLoc.classList.remove("error")
            }
        }
    };
    
    const validateAll = (e) => {
        e.preventDefault()

        buttonLoc.style.opacity = "0.2"

        validationPass = true;
        validateEmpty(undefined, document.querySelector("#name"), true)
        validateEmpty(undefined, document.querySelector("#surname"), true)

        if (contactFormWrapper_EnrolmentLoc) {
            validateEmpty(undefined, document.querySelector("#child_name"), true)
            validateEmpty(undefined, document.querySelector("#age"), true)
            validateEmpty(undefined, document.querySelector("#start"), true)
        }

        if (questionLoc) {
            validateEmpty(undefined, replacementQuestionLoc, true)
        }

        validateEmpty(undefined, document.querySelector("#mail"), true)
        validateEmpty(undefined, document.querySelector("#phone"), true)

        validateEmpty(undefined, document.querySelector("#message"), true)

        validateEmpty(undefined, document.querySelector("#agreement_1"), true)
    
        validatePhone(undefined, document.querySelector("#phone"))
        validateEmail(undefined, document.querySelector("#mail"))

        if (validationPass) {
             grecaptcha.ready(function() {
                grecaptcha.execute("6LfITHUpAAAAAJb4ZrbskvItC3m6tYKa0sqMSLIK", {action: "contact"})
                    .then(async function(token){
                        let recaptchaResponse = document.getElementById("recaptchaResponse")
                        recaptchaResponse.value = token
                        let response
                        if (page.value === "Kontakt") {
                            response = await fetch("send.php", {method: "POST", body: new FormData(form)})
                        }
                        if (page.value === "FAQ") {
                            response = await fetch("send_faq.php", {method: "POST", body: new FormData(form)})
                        }
                        if (page.value === "Zapisz mnie") {
                            response = await fetch("send_enrol.php", {method: "POST", body: new FormData(form)})
                        }
                        if (page.value === "Praca") {
                            response = await fetch("send_job.php", {method: "POST", body: new FormData(form)})
                        }
                        
                        
                        if (response.ok) {
                            const indexEqual = response.url.indexOf("=")
                            const status = (response.url).substr(indexEqual + 1, response.url.length - indexEqual);
                            if (status === "sent") {
                                    contactFormLoc.style.opacity = "0"
                                    sendEmailMessageLoc.style.opacity = "1"
                                    sendEmailMessageLoc.innerHTML = "E-mail wysłany.<br>Dziękujemy!"

                                    if (page.value !== "Praca") {
                                        replacementQuestionLoc.innerText = "";
                                        [...replacementListItemsLoc.children].forEach((el) => {
                                            el.classList.remove("same-as-selected")
                                        })
                                    }
                                    form.reset()
                                    nameLoc.previousElementSibling.classList.remove("mini")
                                    surnameLoc.previousElementSibling.classList.remove("mini")
                                    mailLoc.previousElementSibling.classList.remove("mini")
                                    phoneLoc.previousElementSibling.classList.remove("mini")
                                    if (page.value === "Zapisz mnie") {
                                        childNameLoc.previousElementSibling.classList.remove("mini")
                                        ageLoc.previousElementSibling.classList.remove("mini")
                                        startLoc.previousElementSibling.classList.remove("mini")
                                    }
                                setTimeout(() => {
                                    contactFormLoc.style.opacity = "1"
                                    sendEmailMessageLoc.style.opacity = "0"
                                    sendEmailMessageLoc.innerText = ""
                                    buttonLoc.style.opacity = "1"
                                    
                                }, 5000)
                                
                            } else {
                                contactFormLoc.style.opacity = "0"
                                sendEmailMessageLoc.style.opacity = "1"
                                sendEmailMessageLoc.style.color = "red"
                                sendEmailMessageLoc.innerHTML = "E-mail nie został wysłany!<br>Spróbuj ponownie za chwilę<br>lub napisz do nas bezpośrednio na: <a href='mailto: czesc@oksfordzik.pl'>czesc@oksfordzik.pl</a>" 
                                if (!page.value === "Praca") {
                                    replacementQuestionLoc.innerText = "";
                                    [...replacementListItemsLoc.children].forEach((el) => {
                                        el.classList.remove("same-as-selected")
                                    })
                                }
                                form.reset()
                                nameLoc.previousElementSibling.classList.remove("mini")
                                surnameLoc.previousElementSibling.classList.remove("mini")
                                mailLoc.previousElementSibling.classList.remove("mini")
                                phoneLoc.previousElementSibling.classList.remove("mini")
                                setTimeout(() => {
                                    contactFormLoc.style.opacity = "1"
                                    sendEmailMessageLoc.style.opacity = "0"
                                    sendEmailMessageLoc.innerText = ""
                                    buttonLoc.style.opacity = "1"
                                }, 5000)
                            }

                        } else {
                            buttonLoc.style.opacity = "1"
                            console.log("Email nie wysłany")
                        }
                    })
            })
        } else {
            buttonLoc.style.opacity = "1"
            console.log("Walidacja nieprawidłowa! :(")
        }
    }
    
    nameLoc.addEventListener("blur", validateEmpty)
    nameLoc.addEventListener("keyup", validateEmpty)
    
    surnameLoc.addEventListener("blur", validateEmpty)
    surnameLoc.addEventListener("keyup", validateEmpty)
    
    mailLoc.addEventListener("blur", validateEmpty)
    mailLoc.addEventListener("keyup", validateEmpty)
    mailLoc.addEventListener("blur", validateEmail)
    mailLoc.addEventListener("change", validateEmail)
    
    phoneLoc.addEventListener("blur", validateEmpty)
    phoneLoc.addEventListener("keyup", validateEmpty)
    phoneLoc.addEventListener("blur", validatePhone)
    phoneLoc.addEventListener("change", validatePhone)

    const questionLoc = document.querySelector("#question");
    const optionsArrLoc = document.querySelectorAll("option");

    let replacementQuestionLoc
    let replacementListItemsLoc
    document.addEventListener('DOMContentLoaded', function() {
        replacementQuestionLoc = document.querySelector(".select-selected");
        replacementListItemsLoc = document.querySelector(".select-items");
    }, false);

    messageLoc.value = ""
    messageLoc.addEventListener("blur", validateEmpty)
    messageLoc.addEventListener("keyup", validateEmpty)

    rodoCheckboxLoc.checked = false
    rodoCheckboxLoc.addEventListener("change", validateEmpty)
    
    buttonLoc.addEventListener("click", validateAll)

    if (contactFormWrapper_EnrolmentLoc) {
        childNameLoc.addEventListener("blur", validateEmpty)
        childNameLoc.addEventListener("keyup", validateEmpty)
        
        ageLoc.addEventListener("blur", validateEmpty)
        ageLoc.addEventListener("keyup", validateEmpty)

        startLoc.addEventListener("blur", validateEmpty)
        startLoc.addEventListener("keyup", validateEmpty)
    }

    let x, i, j, l, ll, selElmnt, a, b, c;

    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    
    for (let i=0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.setAttribute("id", "select-selected");
        a.setAttribute("name", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        
        for (let j=1; j < ll; j++) {
        /* For each option in the original select element, create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.dataset.val = selElmnt.options[j].value;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box, and the selected item: */
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (let i=0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;

                        h.innerHTML = this.innerHTML;
                        h.dataset.val = this.dataset.val
                        questionLoc.value = h.dataset.val
                
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        
                        for (let k=0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }

                        this.setAttribute("class", "same-as-selected");

                        validateEmpty(replacementQuestionLoc)

                        break;
                    }
                }

                h.click();
            });
        b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        
        /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
        e.stopPropagation();

        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");

        if (!a.classList.contains("select-arrow-active")) {
            validateEmpty(replacementQuestionLoc)
        }
    });

    a.addEventListener("change", function(e) {
        e.stopPropagation();
        validateEmpty(replacementQuestionLoc)
    });

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document, except the current select box: */
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;

        for (let i=0; i < yl; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }

        for (let i=0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
      
    /* If the user clicks anywhere outside the select box, then close all select boxes: */
    document.addEventListener("click", closeAllSelect); 
    }
}

// cookies accept ----------------------------------------
(function() {
    //copyright JGA 2013 under MIT License
    var monster={set:function(e,t,n,r){var i=new Date,s="",o=typeof t,u="";r=r||"/",n&&(i.setTime(i.getTime()+n*24*60*60*1e3),s="; expires="+i.toGMTString());if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length),i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}return r=="undefined"?undefined:unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

    if (monster.get('cookieinfo') === 'true') {
        return false;
    }

    var container = document.createElement('div'),
        link = document.createElement('a');

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6><p>Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą też korzystać z nich współpracujące z nami firmy badawcze oraz reklamowe. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function() {
            container.style.opacity -= 0.01;

            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieinfo', 'true', 365);
            }
        }, 4);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);

    return true;
})();

// content change in oferta page ----------------------------------------
const offerPageLoc = document.querySelector(".offer-details")

if (offerPageLoc) {

    const navElementsArr = offerPageLoc.querySelectorAll(".navigation .element")
    const elementsArr = offerPageLoc.querySelectorAll(".content .item")
   
    navElementsArr.forEach((el, index) => {
        el.addEventListener("click", () => {
            const moveDistance = index * -100

            elementsArr.forEach((elem) => {
                
                elem.style.opacity = `0%`
                elem.style.transition = "left 0s"
                setTimeout(() => {
                    elem.style.left = `${moveDistance + 100}%`
                }, 10);
                setTimeout(() => {
                    elementsArr[index].style.opacity = `100%`
                    elem.style.transition = "left .5s ease-out"
                }, 20);
                setTimeout(() => {
                    elem.style.left = `${moveDistance}%`
                }, 100);
            })
        })
    })

}

// gallery ----------------------------------------
const galeryPageLoc = document.querySelector(".gallery")

if (galeryPageLoc) {

    const lightbox = document.querySelector("#lightbox")
    const imgWrapper = document.querySelector(".img-wrapper")
    const gallery = document.querySelector(".gallery-box")
    const closeBtn = document.querySelector(".close-btn")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")

    const images = gallery.querySelectorAll("img");
    // const titleWrapper = document.querySelector(".img-wrapper > .img-title")
    let clickedImageIdx = null

    images.forEach((image, idx) => {
        image.addEventListener("click", () => {
            if (idx === 0) {
                prevBtn.classList.add("disabled")
            }
            if (idx === images.length - 1) {
                nextBtn.classList.add("disabled")
            }
            lightbox.classList.add("active")

            clickedImageIdx = idx

            const img = document.createElement("img")
            img.src = image.src

            const title = document.createElement("p")
            title.innerText = image.alt

            if (imgWrapper.querySelector(".img-wrapper > img")) {
                imgWrapper.removeChild(
                    imgWrapper.querySelector(".img-wrapper > img")
                );
            }
            imgWrapper.prepend(img)

            // if (titleWrapper.querySelector("p")) {
            //     titleWrapper.removeChild(titleWrapper.querySelector("p"))
            // }
            // titleWrapper.appendChild(title)

            prevBtn.addEventListener("click", handlePrevBtn)
            nextBtn.addEventListener("click", handleNextBtn)
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active")
        prevBtn.classList.remove("disabled")
        nextBtn.classList.remove("disabled")
        prevBtn.removeEventListener("click", handlePrevBtn)
        nextBtn.removeEventListener("click", handleNextBtn)
    });

    const handlePrevBtn = () => {
        const actualImg = imgWrapper.querySelector(".img-wrapper > img")
        // const titleBox = imgWrapper.querySelector(".img-title > p")

        if (clickedImageIdx > 0) {
            nextBtn.classList.remove("disabled")
            actualImg.src = images[clickedImageIdx - 1].src
            actualImg.alt = images[clickedImageIdx - 1].alt
            // titleBox.innerText = actualImg.alt
            clickedImageIdx = clickedImageIdx - 1
        }
        if (clickedImageIdx === 0) {
            prevBtn.classList.add("disabled")
        }
    };

    const handleNextBtn = () => {
        const actualImg = imgWrapper.querySelector(".img-wrapper > img")
        // const titleBox = imgWrapper.querySelector(".img-title > p")

        if (clickedImageIdx < images.length - 1) {
            prevBtn.classList.remove("disabled")
            actualImg.src = images[clickedImageIdx + 1].src
            actualImg.alt = images[clickedImageIdx + 1].alt
            // titleBox.innerText = actualImg.alt
            clickedImageIdx = clickedImageIdx + 1
        }
        if (clickedImageIdx === images.length - 1) {
            nextBtn.classList.add("disabled")
        }
    }
}

// slidesShow ----------------------------------------
const sliderLoc = document.querySelector(".slider")

if (sliderLoc) {
    
    // slider ----------------------------------------
    const cssVariablesLoc = document.querySelector(":root");
    const slidesLoc = document.querySelectorAll(".slide");
    const barsLoc = document.querySelector(".hero .bars");

    let movementStep = 100;
    let signFlag = true;

    // dodanie barsów w odp. ilości
    const slidesQuantity = slidesLoc.length

    for (let i=0; i<slidesQuantity; i++) {
        if (i === 0) {
            barsTxt = '<div class="bar active"></div>'; 
        } else {
            barsTxt = barsTxt + '<div class="bar"></div>'; 
        }
    }
    barsLoc.innerHTML = barsTxt;

    

    setTimeout(() => {
        const barsArrLoc = document.querySelectorAll(".bars .bar");
        barsArrLoc.forEach((elem)=>{
            elem.addEventListener("click", (e)=>{
                clearInterval(sliderStart); 
                barID = [...e.currentTarget.parentNode.children].indexOf(e.currentTarget);
                signFlag = true;
                movementStep = barID*100;
                moveSlider(movementStep);
                var id = window.setTimeout(function() {}, 0);
                while (id--) {
                    window.clearTimeout(id); // will do nothing if no timeout with id is present
                }
                const sliderStart2 = setInterval(myFn, 7000)
                // sliderStart = setInterval(() => {
                    // moveSlider(movementStep);
                // }, 7000)
            })
        })
    }, 1000)


    const myFn = () => {

        moveSlider(movementStep);

        cssVariablesLoc.style.setProperty("--title-opacity", `0`)
        cssVariablesLoc.style.setProperty("--title-top", `-2000px`)
        cssVariablesLoc.style.setProperty("--title-transition-time", `1s`)

        cssVariablesLoc.style.setProperty("--button-opacity", `0`)
        cssVariablesLoc.style.setProperty("--button-bottom", `-1000px`)
        cssVariablesLoc.style.setProperty("--button-transition-time", `1s`)

        setTimeout(()=> {
            cssVariablesLoc.style.setProperty("--title-opacity", `1`)
            cssVariablesLoc.style.setProperty("--title-top", `0`)

        }, 500)

        setTimeout(()=> {
            cssVariablesLoc.style.setProperty("--button-opacity", `1`)
            cssVariablesLoc.style.setProperty("--button-bottom", `0`)
        }, 700)
        
        
        setTimeout(()=> {
            cssVariablesLoc.style.setProperty("--title-opacity", `0`)
            cssVariablesLoc.style.setProperty("--title-transition-time", `0.2s`)

            cssVariablesLoc.style.setProperty("--button-opacity", `0`)
            cssVariablesLoc.style.setProperty("--button-transition-time", `0.2s`)
        }, 6800)

        setTimeout(()=> {
            cssVariablesLoc.style.setProperty("--title-transition-time", `0s`)

            cssVariablesLoc.style.setProperty("--button-transition-time", `0s`)
        }, 6900)
    }

    const sliderStart = setInterval(myFn, 7000)

    let barID = 0;

    const moveSlider = (arg) => {
        
        // ustalenie wlk. przesunięcie w % i odbicie z powrotem gdy dojdzie do końca.
        if (movementStep === (slidesQuantity - 1) * 100) { signFlag = false }
        if (movementStep === 0) { signFlag = true }
        
        if (signFlag) { movementStep += 100; }
        if (!signFlag) { movementStep -= 100; }
        
        // przekazywanie stylu left do css
        cssVariablesLoc.style.setProperty("--slide-movement", `-${arg}vw`)

        // zapalanie okr. bara
        const barLoc = document.querySelectorAll(".bar");
        barLoc.forEach((elem)=>{
            elem.classList.remove("active");
        })
        barID = arg/100;
        barLoc[barID].classList.add("active")
    }
}

// mobile menu

const hamburgerLoc = document.querySelector(".hamburger");
const mobileMenuLoc = document.querySelector("header nav > ul");
const hamburgerBarsLoc = document.querySelector(".hamburger .bars");
const parentMenuArrLoc = document.querySelectorAll("nav .parent-sub-menu");
const parentMenuHoverOnArrLoc = document.querySelectorAll("nav .parent-sub-menu");

hamburgerLoc.addEventListener("click", () => {

    parentMenuHoverOnArrLoc.forEach(element => {
        element.classList.remove("hover-on")
    })

    mobileMenuLoc.classList.toggle("show");
    hamburgerBarsLoc.classList.toggle("ham");

    const mobileMenuElemLoc = document.querySelectorAll("header nav ul.show li a");
 
    mobileMenuElemLoc.forEach(elem => {
        elem.addEventListener("click", () => {
            mobileMenuLoc.classList.remove("show");
            hamburgerBarsLoc.classList.add("ham");
        });
    });
})

parentMenuArrLoc.forEach(el => {

    el.addEventListener("click", (e) => {
        e.preventDefault;
        

        if (e.target.querySelector(".sub-menu").classList.contains("mobile-active")) {
            e.target.querySelector(".sub-menu").classList.remove("mobile-active");
        } else {
            parentMenuArrLoc.forEach(elm => {
                elm.querySelector(".sub-menu").classList.remove("mobile-active")
            })
            e.target.querySelector(".sub-menu").classList.add("mobile-active");
        }
        // e.target.querySelector(".sub-menu").classList.toggle("mobile-active");
    })
})

