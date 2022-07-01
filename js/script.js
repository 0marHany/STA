// bages
let elmentNav = document.getElementById('elmentNav');
let accountNav = document.getElementById('accountNav');
let ALL = document.getElementById('ALL');
let SEO = document.getElementById('SEO');
let PERFORMANCE = document.getElementById('PERFORMANCE');
let SECURITY = document.getElementById('SECURITY');
let Selenium = document.getElementById('Selenium');
let Home = document.getElementById('Home');
let Title = document.getElementById('Title');

let PDF = document.getElementById('PDF');
let SendPDF = document.getElementById('SendPDF');
let Pdf_Button = document.getElementById('Pdf_Button');
let Email_address = document.getElementById('Email_address');
let sendEmail = document.getElementById('sendEmail');

let SendPDF_SEO = document.getElementById('SendPDF_SEO');
let Email_address_SEO = document.getElementById('Email_address_SEO');
let Pdf_Button_SEO = document.getElementById('Pdf_Button_SEO');
let PDF_SEO = document.getElementById('PDF_SEO');
let sendEmail_SEO = document.getElementById('sendEmail_SEO');

let sendEmail_Secur = document.getElementById('sendEmail_Secur');
let Email_address_Secur = document.getElementById('Email_address_Secur');
let PDF_Secur = document.getElementById('PDF_Secur');
let Pdf_Button_Secur = document.getElementById('Pdf_Button_Secur');
let SendPDF_Secur = document.getElementById('SendPDF_Secur');

let PDF_Speed = document.getElementById('PDF_Speed');
let sendEmail_Speed = document.getElementById('sendEmail_Speed');
let SendPDF_Speed = document.getElementById('SendPDF_Speed');
let Email_address_Speed = document.getElementById('Email_address_Speed');
let Pdf_Button_Speed = document.getElementById('Pdf_Button_Speed');

// ID PDF
let userID;
let Url_Id;
let SeoID;
let allID;
let speedID;
let securityID;
let SeleniumID;

//UserAccount
let LoginPage = document.getElementsByClassName('LoginPage');
let CreateAccount = document.getElementsByClassName('CreateAccount');
let signIn_Page = document.getElementById('signIn_Page');
let signUP_Page = document.getElementById('signUP_Page');
let R_Username = document.getElementById("R_Username")
let R_Email = document.getElementById("R_Email")
let R_Password = document.getElementById("R_Password")
let R_RePassword = document.getElementById("R_RePassword")
let R_errors = document.getElementById("R_errors")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")
let errors = document.getElementById("errors")
let signUP = document.getElementById("signUP")
let signIn = document.getElementById("signIn")
let registration = document.getElementById("registration")

// content of bages
let txetContent = document.getElementById('txetContent')
let txetContent2 = document.getElementById('txetContent2')

let Link = document.getElementById('Link');
let LinkSEO = document.getElementById('LinkSEO');
let LinkSelenium = document.getElementById('LinkSelenium');
let LinkScur = document.getElementById('LinkScur');
let LinkSpeed = document.getElementById('LinkSpeed');

let Analyze = document.getElementById('Analyze');
let AnalyzeSEO = document.getElementById('AnalyzeSEO');
let AnalyzeSpeed = document.getElementById('AnalyzeSpeed');
let AnalyzeScur = document.getElementById('AnalyzeScur');
let AnalyzeSelenium = document.getElementById('AnalyzeSelenium');

let Url = document.getElementById('Url');
let UrlSEO = document.getElementById('UrlSEO');
let UrlSpeed = document.getElementById('UrlSpeed');
let UrlScur = document.getElementById('UrlScur');
let UrlSelenium = document.getElementById('UrlSelenium');

let ResultInside = document.getElementById('ResultInside');
let ResultSEO = document.getElementById('ResultSEO');
let ResultSpeed = document.getElementById('ResultSpeed');
let ResultScur = document.getElementById('ResultScur');
let ResultSelenium = document.getElementById('ResultSelenium');

const spinner = `<i class="fa fa-spinner fa-pulse fa-1x"></i>`;
let message;
let data;

$(ALL).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';


    LinkSEO.style.display = 'none';
    ResultSEO.style.display = 'none';

    LinkSpeed.style.display = 'none';
    ResultSpeed.style.display = 'none';

    LinkScur.style.display = 'none';
    ResultScur.style.display = 'none';

    LinkSelenium.style.display = 'none';
    ResultSelenium.style.display = 'none';

    data = "All"
    Title.innerHTML = 'Test All';
    Link.style.display = 'block';
    ResultInside.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><span class="text_black">What is Software automation?</span></h3><br>
        <p class="content text-light"> Testing Automation Software Testing: <br>
            is a process, to evaluate the funetionality of a software application with an intent to find
            whether the developed software
            met the specified requirements or not and to identify the defects to ensure that the product
            is defect-free to produce a quality produet, Software testing is also used to test the
            application from load, performance, and stress points of view. Software Testing Automation:
            This is an Automatic technique where the tester writes scripts by own and uses suitable
            software to test the software.
            It is basically an automation process of a manual process, Like regression testing.
        <h3><br><span class=text_black>What can automation software do for me?</span></h3><br>
        <p class="content text-light">- Helps you maintain compliance<br>- Improved accuracy and quality<br>
            - Reduces cost <br> - Improved customer experience</p>
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_all_the_data_re_hh4w.svg" class="w-100" alt="All">
    </div>
</div>`;
});
$(SEO).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';

    LinkSpeed.style.display = 'none';
    ResultSpeed.style.display = 'none';

    LinkScur.style.display = 'none';
    ResultScur.style.display = 'none';

    Link.style.display = 'none';
    ResultInside.style.display = 'none';

    LinkSelenium.style.display = 'none';
    ResultSelenium.style.display = 'none';

    data = "SEO";
    LinkSEO.style.display = 'block';
    ResultSEO.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'SEO Test';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><br><br><span class="text_black" >SEO or search engine optimization</span></h3><br>
        <p class="content text-light" style="font-size: 19px;" id="txetContent">
            is the process of developing websites to suit the
            requirements of different
            search engines such as Google or Bing in order to appear in the first
            search results for the key words and terms used by potential customers of companies,
            projects and businesses.
    </div>
    <div class="col-md-5 ">
            <img src="images//seo.svg" id="imgContent" class="w-100" alt="s">
    </div>
</div>`;

});
$(PERFORMANCE).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';


    LinkSEO.style.display = 'none';
    ResultSEO.style.display = 'none';

    LinkScur.style.display = 'none';
    ResultScur.style.display = 'none';

    Link.style.display = 'none';
    ResultInside.style.display = 'none';

    LinkSelenium.style.display = 'none';
    ResultSelenium.style.display = 'none';

    data = "Performance";
    LinkSpeed.style.display = 'block';
    ResultSpeed.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'Performance Test';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><span class="text_black">What Is Automated Performance Testing?</span></h3><br>
        <p class="content text-light"> Automated performance testing checks the speed, response time, reliability,
            resource usage, and scalability of software under an expected workload by leveraging
            automation. Website Performance Testing? For website performance testing, you need to test
            page load time across browsers, refresh rates, varying screen sizes, and resolution across
            different browser OEMs.
            All of these factors contribute to the performance of web apps and can provide top-notch
            experiences when done right.
        <h3 class="text_black"><br>Performance Testing Process</h3><br>
        <p class="content text-light">The methodology adopted for performance testing can vary widely but the
            objective for performance tests remain the same. It can help demonstrate that your software
            system meets certain pre-defined performance criteria. Or it can help compare the
            performance of two software systems.
            It can also help identify parts of your software system which degrade its
            performance.</p>
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_fast_loading_re_8oi3.svg" class="w-100" alt="All">
    </div>
</div>`;
});
$(SECURITY).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';

    LinkSEO.style.display = 'none';
    ResultSEO.style.display = 'none';

    LinkSpeed.style.display = 'none';
    ResultSpeed.style.display = 'none';

    Link.style.display = 'none';
    ResultInside.style.display = 'none';

    LinkSelenium.style.display = 'none';
    ResultSelenium.style.display = 'none';

    data = "Security";
    LinkScur.style.display = 'block';
    ResultScur.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'Security Test';
    txetContent2.innerHTML = `<div class="row ">
    <div class="col-md-7">
        <h3><br><br><span class="text_black">What is security automation?</span></h3><br>
        <p class="content text-light"> Security automation uses software-based processes to programmatically detect, investigate, and fix external threats to applications and systems. This can be done with or without manual intervention. 
            When used to augment existing security processes, automation helps to identify incoming cyber threats,
             prioritize remediation, and provide actionable alerts that allow the security teams to respond quickly.</span></h3><br>
             <h3><br><br><span class="text_black">Benefits of Security Automation</span></h3><br>
        <p class="content text-light">Faster containment and mitigation—automated tools can immediately execute security playbooks in response to certain types of incidents. 
            This means threats can be contained or even completely eradicated with no human intervention.</p>
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_secure_server_re_8wsq.svg" class="w-100" alt="All">
    </div>
</div>`;
});
$(Home).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';

    Link.style.display = 'none';
    ResultInside.style.display = 'none';

    LinkSEO.style.display = 'none';
    ResultSEO.style.display = 'none';

    LinkSpeed.style.display = 'none';
    ResultSpeed.style.display = 'none';

    LinkScur.style.display = 'none';
    ResultScur.style.display = 'none';

    LinkSelenium.style.display = 'none';
    ResultSelenium.style.display = 'none';

    // PDF.style.display = 'none';
    txetContent.style.display = 'block';
    txetContent2.style.display = 'none';
    Title.innerHTML = 'Home';
});
$(Selenium).click(() => {
    PDF.style.display = 'none';
    PDF_Speed.style.display = 'none';
    PDF_SEO.style.display = 'none';
    PDF_Secur.style.display = 'none';

    LinkSEO.style.display = 'none';
    ResultSEO.style.display = 'none';

    LinkSpeed.style.display = 'none';
    ResultSpeed.style.display = 'none';

    LinkScur.style.display = 'none';
    ResultScur.style.display = 'none';

    Link.style.display = 'none';
    ResultInside.style.display = 'none';

    data = "Selenium"
    Title.innerHTML = 'Selenium Test';
    LinkSelenium.style.display = 'block';
    ResultSelenium.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7 mt-7">
    Selenium is an open source automation testing tool that supports a number of scripting languages like Python, C#, Java, Perl, Ruby, JavaScript, etc. depending on the application to be tested,
 one can choose the script accordingly
Selenium allows you to define tests and automatically detect the results of these tests on a pre-decided browser. A suite of Selenium functions enables you to create step-by-step interactions with a webpage and assess the response of a browser to various changes. 
You can then decide if the response of the browser is in line with what you expect.
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_login_re_4vu2.svg" class="w-100" alt="All">
    </div>
</div>`;
});

$(AnalyzeSEO).click(async function run() {
    AnalyzeSEO.innerHTML = spinner;
    await postUrl()
    if (message == "done" && data == "SEO") {
        SEO_Rsulte()
    }
    else {
        console.log("error");
        ResultSEO.innerHTML = null;
    }
    AnalyzeSEO.innerHTML = "Analyze"
});
$(AnalyzeSpeed).click(async function run() {
    AnalyzeSpeed.innerHTML = spinner;
    await postUrl()
    if (message == "done" && data == "Performance") {
        performanceRsulte()
    }
    else {
        console.log("error");
        ResultSpeed.innerHTML = null;
    }
    AnalyzeSpeed.innerHTML = "Analyze"
});
$(AnalyzeScur).click(async function run() {
    AnalyzeScur.innerHTML = spinner;
    await postUrl()
    if (message == "done" && data == "Security") {
        securityRsulte()
    }
    else {
        console.log("error");
        ResultScur.innerHTML = null;
    }
    AnalyzeScur.innerHTML = "Analyze"
});
$(AnalyzeSelenium).click(async function run() {
    AnalyzeSelenium.innerHTML = spinner;
    await postUrl()
    if (message == "done" && data == "Selenium") {
        SeleniumRsulte()
    }
    else {
        console.log("error");
        AnalyzeSelenium.innerHTML = null;
    }
    AnalyzeSelenium.innerHTML = "Analyze"
});
$(Analyze).click(async function run() {
    Analyze.innerHTML = spinner;
    await postUrl()
    if (message == "done" && data == "All") {
        allRsulte()
    }
    else {
        console.log("error");
        ResultInside.innerHTML = null;
    }
    Analyze.innerHTML = "Analyze"
});

async function postUrl() {
    let dataLink;
    if (data == "All") {
        dataLink = {
            "link": Url.value
        }
    }
    else if (data == "Performance") {
        dataLink = {
            "link": UrlSpeed.value
        }
    }
    else if (data == "SEO") {
        dataLink = {
            "link": UrlSEO.value
        }
    }
    else if (data == "Security") {
        dataLink = {
            "link": UrlScur.value
        }
    }
    else {
        dataLink = {
            "link": UrlSelenium.value
        }
    }
    let response = await fetch(`http://localhost:4000/Url/${userID}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataLink)
    });
    let { Link, error } = await response.json()
    if (error) {
        console.log(error);
        message = "error";
        console.log(message);
    }
    else {
        Url_Id = Link[0]._id;
        console.log(Link);
        message = "done";
        console.log(message);
    }
}
// performance
// hna anta 7att id mn 3ndk mtnsa4 t8irh
async function performanceRsulte() {
    let response = await fetch(`http://localhost:4000/performance/628e773295c61f10df2bd9cd`);
    let { message, get } = await response.json();
    speedID = get._id;
    console.log(get, message);
    show_Performance_Rsulte(get);
}
function show_Performance_Rsulte(get) {
    PDF_Speed.style.display = 'block';
    let Performance_Rsulte = ``;
    let obj = [14];

    let resulte = [
        LE_CLS = get.LE_CLS,
        LE_FCP = get.LE_FCP,
        LE_FID = get.LE_FID,
        LE_LCP = get.LE_LCP,
        LH_CLS = get.LH_CLS,
        LH_FCP = get.LH_FCP,
        LH_SI = get.LH_SI,
        LH_LCP = get.LH_LCP,
        LH_TBT = get.LH_TBT,
        LH_TTI = get.LH_TTI,
        OLE_CLS = get.OLE_CLS,
        OLE_FCP = get.OLE_FCP,
        OLE_FID = get.OLE_FID,
        OLE_LCP = get.OLE_LCP,
    ]
    let nameOFresulte = [
        "CUMULATIVE LAYOUT SHIFT(CLS)",
        "FIRST CONTENTFUL PAINT(FCP)",
        "FIRST INPUT DELAY(FID)",
        "LARGEST CONTENTFUL PAINT(LCP)",
        "CUMULATIVE LAYOUT SHIFT(CLS)",
        "FIRST CONTENTFUL PAINT(FCP)",
        "SPEED INDEX(SI)",
        "LARGEST CONTENTFUL PAINT(LCP)",
        "TOTAL BLOCKING TIME(TBT)",
        "TIME TO INTERACTIVE(TIT)",
        "CUMULATIVE LAYOUT SHIFT(CLS)",
        "FIRST CONTENTFUL PAINT(FCP)",
        "FIRST INPUT DELAY(FID)",
        "LARGEST CONTENTFUL PAINT(LCP)",
    ]
    for (let i = 0; i < resulte.length; i++) {
        if (resulte[i] === "FAST") {
            obj[i] = {
                barRang: "90",
                barColor: '#17a7e1',
            }
        } else if (resulte[i] === "SLOW") {
            obj[i] = {
                barRang: "28",
                barColor: '#fa0082',
            }
        } else if (resulte[i] >= 0 && resulte[i] <= 49) {
            obj[i] = {
                barRang: "28",
                barColor: '#fa0082',
            }
        }
        else if (resulte[i] >= 90 && resulte[i] <= 100) {
            obj[i] = {
                barRang: "90",
                barColor: '#17a7e1',
            }
        }
        else {
            obj[i] = {
                barRang: "50",
                barColor: '#e715ef',
            }
        }
    }
    console.log(obj);
    Performance_Rsulte += `
        <div class="row">
        <div class="d-flex align-items-center justify-content-center mb-3">
        <div class="icon d-flex align-items-center justify-content-center">
            <h5>${get.PR_Precentage}%</h5>
        </div>
    </div>
    <div class="d-flex justify-content-start">
        <h5 class="text_black fw-bolder">Loading Experince : </h5>
        <h5 class="webColor fw-bolder">${get.loadingExperince}</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[0]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[0].barColor};width: ${obj[0].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LE_CLS}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[1]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[1].barColor};width: ${obj[1].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LE_FCP}</div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[2]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[2].barColor};width: ${obj[2].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LE_FID}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[3]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[3].barColor};width: ${obj[3].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LE_LCP}</div>
        </div>
    </div>
</div>

<div class="row">
    
    <div class="d-flex justify-content-start">
    <h5 class="text_black fw-bolder">Light House :</h5>
    <h5 class="webColor fw-bolder"> ${get.LightHouse}</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[4]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[4].barColor};width: ${obj[4].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_CLS}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[5]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[5].barColor};width: ${obj[5].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_FCP}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[6]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[6].barColor};width: ${obj[6].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_SI}</div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[7]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[7].barColor};width: ${obj[7].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_LCP}</div>
        </div>    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[8]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[8].barColor};width: ${obj[8].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_TBT}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[9]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[9].barColor};width: ${obj[9].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.LH_TTI}</div>
        </div>
    </div>
</div>
<div class="row">
    
    <div class="d-flex justify-content-start">    
    <h5 class="text_black fw-bolder ms-1">Origin Loading Experince : </h5>
        <h5 class="webColor"fw-bolder>${get.OriginLoadingExperince}</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[10]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[10].barColor};width: ${obj[10].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.OLE_CLS}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[11]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[11].barColor};width: ${obj[11].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.OLE_FCP}</div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[12]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[12].barColor};width: ${obj[12].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.OLE_FID}</div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[13]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[13].barColor};width: ${obj[13].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${get.OLE_LCP}</div>
        </div>
    </div>
</div>
`;
    ResultSpeed.innerHTML += Performance_Rsulte;
}
// ==============================================
// seo
async function SEO_Rsulte() {
    let response = await fetch(`http://localhost:4000/SEO/628ff4c1d819abbe0ebb703c`);
    let { get } = await response.json();
    SeoID = get._id;
    console.log(SeoID);
    // console.log(hamda);
    show_SEO_Rsulte(get);
}
function show_SEO_Rsulte(get) {
    PDF_SEO.style.display = 'block';
    let data = [
        {
            Name: 'Total Traffic',
            Value: get.total_traffic,
            desc: 'The estimated number of clicks the analyzed website will get on Google based on the current rankings of the discovered keywords',
        },
        {
            Name: 'Total Traffic Cost',
            Value: get.total_traffic_cost,
            desc: 'The estimated cost of traffic the analyzed website would get by targeting every discovered keyword expressed in the equivalent of Google Ads prices',
        },
        {
            Name: 'Backlinks',
            Value: get.backlinks,
            desc: 'History of acquired backlinks for the analyzed domain',
        },
    ]
    let SEO_Data = ``;
    let SEO_sample = ``;
    let SEO_sample2 = ``;
    for (let i = 0; i < 5; i++) {
        SEO_sample += `
        <div class="col-md-1 ">${get.keyWord[i]}</div>`;
        SEO_sample2 += `
        <div class="col-md-1 ">${get.keyWord[5 + i]}</div>`;
    }
    for (let i = 0; i < data.length; i++) {
        SEO_Data += `<div class="row bg-light mb-5">
    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
        <h5 class="">${data[i].Name}</h5>
    </div>
    <div class="col-md-6 border-end">
        <h5>${data[i].desc}</h5>
    </div>
    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
        <h5 class="text-info fw-bold">${data[i].Value}</h5>
    </div>
</div>
`;
    }
    SEO_sample = `<div class="row bg-light mb-5">
    <div class="col-md-3 d-flex justify-content-center align-items-center border">
        <h5 class="">Key Word</h5>
    </div>
    <div class="col-md-6 border">
        <h5>The total number of keywords the analyzed website ranks for in organic search</h5>
    </div>
    <div class="col-md-3 d-flex justify-content-center align-items-center border">
        <h5 class="text-info">${get.key_Word}</h5>
    </div>
    <h5 class="text-info ms-4 fw-bold">Sample KeyWord :</h5>
    <div class="d-flex justify-content-center align-items-center text_black">
        <div>
            <div class="row justify-content-between">
               ${SEO_sample}
            </div>
            <div class="row justify-content-between">
                ${SEO_sample2}
                </div>
        </div>
    </div>
</div>`
    ResultSEO.innerHTML = SEO_Data + SEO_sample;
}
// ======================================
// securityRsulte
async function securityRsulte() {
    let response = await fetch(`http://localhost:4000/Security/${Url_Id}`);
    let { get } = await response.json();
    securityID = get.id;
    console.log(get);
    show_securityRsulte(get);
}
function show_securityRsulte(get) {
    PDF_Secur.style.display = 'block';

    let table = ``;
    let rowOFtbale = [``, ``];
    let secur_Resulte = ``;
    for (let i = 0; i < get.lib_json.length; i++) {
        for (let j = 0; j < get.lib_json[i].vulnerabil.length; j++) {
            rowOFtbale[i] += `<tbody>
                <tr>
                    <td>
                        <span>${get.lib_json[i].vulnerabil[j].score}</span>
                    </td>
                    <td>
                        <span>${get.lib_json[i].vulnerabil[j].cve}</span>
                    </td>
                    <td>
                        <span>${get.lib_json[i].vulnerabil[j].type}</span>
                    </td>
                </tr>
            </tbody>
    `;
            console.log(rowOFtbale[i]);
        }
    }
    for (let i = 0; i < get.lib_json.length; i++) {
        table += `<div class="row mt-4 text-light">
        <div class="col-md-6  appscan-result__name d-flex justify-content-center align-items-center ">
            ${get.lib_json[i].name}</div>
        <div class="col-md-6 appscan-result__version  d-flex justify-content-center align-items-center ">
            ${get.lib_json[i].version}</div>
        <div class="bg-light text_black vw-100">
            <p>${get.lib_json[i].message}</p>
            <table class="table ">
                <thead class="">
                    <tr>
                        <td>
                            <span>CVSSv3.1 Score</span>
                        </td>
                        <td>
                            <span>Vulnerability CVE-ID</span>
                        </td>
                        <td>
                            <span>Vulnerability Type</span>
                        </td>
                    </tr>
                </thead>
                 ${rowOFtbale[i]}      
                </table>
    </div>
</div>`

    }
    secur_Resulte += `
            <!-- F -->
        <div class="d-flex justify-content-center align-content-center">
            <div class="square webColor-ground mb-2 d-flex justify-content-center align-items-center">
                <h1 class="text-light fw-bold ">${get.final_score}</h>
            </div>
        </div>
        <!-- endF -->

        <!-- boxs -->
        <div class="row mb-3">
            <div class="d-flex justify-content-center align-items-center ">
                <div class="col-md-3 m-2 bg-light">
                    <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                        Found</div>
                    <div class="card__number  d-flex justify-content-center align-items-center">
                        ${get.software_found}</div>
                </div>
                <div class="col-md-3 m-2 bg-light">
                    <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                    Outdated</div>
                    <div class="card__number  d-flex justify-content-center align-items-center  text_black">
                        ${get.software_outdated}</div>
                </div>
                <div class="col-md-3 m-2 bg-light">
                    <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                    Vulnerabil</div>
                    <div class="card__number  d-flex justify-content-center align-items-center  text_black">
                        ${get.software_vulnerabil}</div>
                </div>
            </div>
        </div>
        <!-- endBoxs -->
        
        <!-- table -->
        ${table}
        <!-- endTable -->
`;
    ResultScur.innerHTML = secur_Resulte;
}
// ====================================
async function allRsulte() {
    let response = await fetch(`http://localhost:4000/ALL/${Url_Id}`);
    let { get } = await response.json();
    allID = get._id;
    // console.log(get._id);
    show_allRsulte(get);
}
function show_allRsulte(get) {
    PDF.style.display = 'block';
    let ALL_DATA = ``;
    ALL_DATA += `
        <div id="Main_SPEED">
            <h3 class="webColor">Performace</h3>
            <div class="row text-light d-flex align-items-center justify-content-center mb-3">
                <div class="icon d-flex align-items-center justify-content-center">
                    <h5>${get.PR_Precentage}</h5>
                </div>
                <div class="mt-4 fw-bolder d-flex justify-content-between align-items-center">
                    <div>loadingExperince : ${get.loadingExperince}</div>
                    <div>OriginLoadingExperince : ${get.OriginLoadingExperince}</div>
                    <div>Light House : FAST</div>
                </div>
            </div>
        </div>
        <div id="Main_SEO">
            <h3 class="webColor mt-5">SEO</h3>
            <div>
                <div class="row bg-light mb-5">
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="">TOTAL TRAFFIC</h5>
                    </div>
                    <div class="col-md-6 border-end">
                        <h5>The estimated number of clicks the analyzed website will get on Google based on the current
                            rankings of the discovered keywords</h5>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="text-info">${get.total_traffic}</h5>
                    </div>
                </div>
            </div>
            <div>
                <div class="row bg-light mb-5">
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="">Key Word</h5>
                    </div>
                    <div class="col-md-6 border-end">
                        <h5>The total number of keywords the analyzed website ranks for in organic search</h5>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="text-info">${get.key_Word}</h5>
                    </div>
                </div>
            </div>
            <div>
                <div class="row bg-light mb-5">
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="">Total Traffic Cost</h5>
                    </div>
                    <div class="col-md-6 border-end">
                        <h5>The estimated cost of traffic the analyzed website would get by targeting every discovered
                            keyword expressed in the equivalent of Google Ads prices</h5>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center border-end">
                        <h5 class="text-info">${get.total_traffic_cost}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div id="Main_Security">
            <h3 class="webColor">Security</h3>
            <div class="d-flex justify-content-center align-content-center">
                <div class="square webColor-ground mb-2 d-flex justify-content-center align-items-center">
                    <h1 class="text-light fw-bold ">${get.final_score}</h>
                </div>
            </div>
            <div class="row mb-3">
                <div class="d-flex justify-content-center align-items-center ">
                    <div class="col-md-3 m-2 bg-light">
                        <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                            Found</div>
                        <div class="card__number  d-flex justify-content-center align-items-center">
                        ${get.software_found}</div>
                    </div>
                    <div class="col-md-3 m-2 bg-light">
                        <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                            Outdated</div>
                        <div class="card__number  d-flex justify-content-center align-items-center  text_black">
                        ${get.software_outdated}</div>
                    </div>
                    <div class="col-md-3 m-2 bg-light">
                        <div class="card__title  d-flex justify-content-center align-items-center"> Web Software
                            Vulnerabil</div>
                        <div class="card__number  d-flex justify-content-center align-items-center  text_black">
                        ${get.software_vulnerabil}</div>
                    </div>
                </div>
            </div>
        </div>
`;
    ResultInside.innerHTML = ALL_DATA;
}

//USER LOGN & SIGN 
$(LoginPage).click(() => {
    signIn_Page.style.display = 'block';
    signUP_Page.style.display = 'none';
});

$(CreateAccount).click(() => {
    signIn_Page.style.display = 'none';
    signUP_Page.style.display = 'block';
});

$(signUP).click(async () => {
    signUP.innerHTML = spinner;
    let userRegistration = {
        "name": R_Username.value,
        "email": R_Email.value,
        "password": R_Password.value,
        "Repassword": R_RePassword.value
    }

    let response = await fetch(`http://localhost:4000/User`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userRegistration)
    });
    let { message, error, user } = await response.json();
    // console.log(resposr);
    if (message == "Done") {
        R_errors.style.display = 'none';
        registration.style.display = 'none';
        elmentNav.style.display = 'block';
        accountNav.style.display = 'none';
        userID = user;

    } else {
        signUP.innerHTML = 'Sign Up';
        R_errors.style.display = 'block';
        // signUP.disabled = true;
        // console.log(message);
        document.getElementById("R_errors").innerHTML = error;
    }
});

$(signIn).click(async () => {
    signIn.innerHTML = spinner;
    let userRegistration = {
        "email": Email.value,
        "password": Password.value
    }
    console.log(Email.value);
    let response = await fetch(`http://localhost:4000/auth`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userRegistration)
    });
    let { error, message, data } = await response.json();
    // console.log(resposr);
    if (message == "login success") {
        errors.style.display = 'none';
        registration.style.display = 'none';
        elmentNav.style.display = 'block';
        accountNav.style.display = 'none';
        userID = data._id;
        console.log(userID);
    } else {
        signIn.innerHTML = 'Sign In';
        errors.style.display = 'block';
        // signIn.disabled = true;
        console.log(error);
        document.getElementById("errors").innerHTML = error;
    }
});
// ===============================
$(Pdf_Button).click(async () => {
    Pdf_Button.innerHTML = spinner;
    if (data == "All") {
        let response = await fetch(`http://localhost:4000/ALL_PDF/${allID}`);
        console.log(response);
        Pdf_Button.style.display = "none";
        SendPDF.style.display = "block ";
    }
    else {
        Pdf_Button.innerHTML = "error";
        console.log(error.message);
    }
});
$(Pdf_Button_SEO).click(async () => {
    Pdf_Button_SEO.innerHTML = spinner;
    if (data == "SEO") {
        let response = await fetch(`http://localhost:4000/SEO_PDF/${SeoID}`);
        console.log(response);
        Pdf_Button_SEO.style.display = "none";
        SendPDF_SEO.style.display = "block ";
    }
    else {
        Pdf_Button_SEO.innerHTML = "error";
        console.log(error.message);
    }
});
$(Pdf_Button_Secur).click(async () => {
    Pdf_Button_Secur.innerHTML = spinner;
    if (data == "SEO") {
        let response = await fetch(`http://localhost:4000/SEO_PDF/${SeoID}`);
        console.log(response);
        Pdf_Button_Secur.style.display = "none";
        SendPDF_Secur.style.display = "block ";
    }
    else {
        Pdf_Button_Secur.innerHTML = "error";
        console.log(error.message);
    }
});

$(Pdf_Button_Speed).click(async () => {
    Pdf_Button_Speed.innerHTML = spinner;
    if (data == "Performance") {
        let response = await fetch(`http://localhost:4000/Speed_PDF/${speedID}`);
        console.log(response);
        Pdf_Button_Speed.style.display = "none";
        SendPDF_Speed.style.display = "block ";
    }

    else {
        Pdf_Button_Speed.innerHTML = "error";
        console.log(error.message);
    }

});

// ================================

$(sendEmail).click(async () => {
    sendEmail.innerHTML = spinner;
    let email = {
        "listEmail": [Email_address.value],
        "content": "<h1>thank you</h1>"
    }
    if (data == "All") {
        let response = await fetch(`http://localhost:4000/sendEmail/${allID}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email)
        });
        console.log(response);
    }
    else {
        Email_address.value = "error"
    }
    sendEmail.innerHTML = "Send";
});
$(sendEmail_SEO).click(async () => {
    sendEmail_SEO.innerHTML = spinner;
    let email = {
        "listEmail": [Email_address_SEO.value],
        "content": "<h1>thank you</h1>"
    }
    if (data == "SEO") {
        let response = await fetch(`http://localhost:4000/sendEmail/${SeoID}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email)
        });
        console.log(response);
    }
    else {
        Email_address_SEO.value = "error"
    }
    sendEmail_SEO.innerHTML = "Send";
});
$(sendEmail_Secur).click(async () => {
    sendEmail_Secur.innerHTML = spinner;
    let email = {
        "listEmail": [Email_address_Secur.value],
        "content": "<h1>thank you</h1>"
    }
    if (data == "Security") {
        let response = await fetch(`http://localhost:4000/sendEmail/${securityID}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email)
        });
        console.log(response);
    }
    else {
        Email_address_Secur.value = "error"
    }
    sendEmail_Secur.innerHTML = "Send";
});
$(sendEmail_Speed).click(async () => {
    sendEmail_Speed.innerHTML = spinner;
    let email = {
        "listEmail": [Email_address_Speed.value],
        "content": "<h1>thank you</h1>"
    }
    if (data == "Performance") {
        let response = await fetch(`http://localhost:4000/sendEmail/${speedID}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email)
        });
        console.log(response);
    }
    else {
        Email_address_Speed.value = "error"
    }
    sendEmail_Speed.innerHTML = "Send";
});
// ===============================
async function SeleniumRsulte() {
    let response = await fetch(`http://localhost:4000/selenium/628e773295c61f10df2bd9cd`);
    let { get } = await response.json();
    SeleniumID = get.LinkOwner._id;
    console.log(SeleniumID);
    show_SeleniumRsulte(get);
}
async function show_SeleniumRsulte(get) {
    let DATA = `
                <table class="table ">
                <thead class="">
                    <tr>
                        <td>
                            <span>Login pass</span>
                        </td>
                        <td>
                            <span>Login Failure</span>
                        </td>
                        <td>
                            <span>Registration Pass</span>
                        </td>
                        <td>
                            <span>Registration Failure</span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span class="text-light">${get.loginPass}</span>
                        </td>
                        <td>
                            <span class="text-light">${get.loginFailure}</span>
                        </td>
                        <td>
                            <span class="text-light">${get.registrationPass}</span>
                        </td>
                        <td>
                            <span class="text-light">${get.registrationFailure}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    ResultSelenium.innerHTML = DATA;
}