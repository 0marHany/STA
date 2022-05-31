// bages
let ALL = document.getElementById('ALL');
let SEO = document.getElementById('SEO');
let PERFORMANCE = document.getElementById('PERFORMANCE');
let SECURITY = document.getElementById('SECURITY');
let Home = document.getElementById('Home');
let Title = document.getElementById('Title');

// content of bages
let txetContent = document.getElementById('txetContent')
let txetContent2 = document.getElementById('txetContent2')
let Link = document.getElementById('Link');
let Analyze = document.getElementById('Analyze');
let Url = document.getElementById('Url');
let Result = document.getElementById('Result');
let ResultInside = document.getElementById('ResultInside');
let icon_style = document.querySelector('icon_style');
let data;

$(ALL).click(() => {
    data = "All"
    Title.innerHTML = 'Test All';
    Link.style.display = 'block';
    Result.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><span class="text-dark">What is Software automation?</span></h3><br>
        <p class="content text-light"> Testing Automation Software Testing: <br>
            is a process, to evaluate the funetionality of a software application with an intent to find
            whether the developed software
            met the specified requirements or not and to identify the defects to ensure that the product
            is defect-free to produce a quality produet, Software testing is also used to test the
            application from load, performance, and stress points of view. Software Testing Automation:
            This is an Automatic technique where the tester writes scripts by own and uses suitable
            software to test the software.
            It is basically an automation process of a manual process, Like regression testing.
        <h3><br><span>What can automation software do for me?</span></h3><br>
        <p class="content text-light">- Helps you maintain compliance<br>- Improved accuracy and quality<br>
            - Reduces cost <br> - Improved customer experience</p>
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_all_the_data_re_hh4w.svg" class="w-100" alt="All">
    </div>
</div>`;
});

$(SEO).click(() => {
    data = "SEO";
    Link.style.display = 'block';
    Result.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'SEO Test';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><br><br><span class="text-dark" >SEO or search engine optimization</span></h3><br>
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
    data = "Performance";
    Link.style.display = 'block';
    Result.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'Performance Test';
    txetContent2.innerHTML = `<div class="row">
    <div class="col-md-7">
        <h3><br><br><span class="text-dark">What Is Automated Performance Testing?</span></h3><br>
        <p class="content text-light"> Automated performance testing checks the speed, response time, reliability,
            resource usage, and scalability of software under an expected workload by leveraging
            automation. Website Performance Testing? For website performance testing, you need to test
            page load time across browsers, refresh rates, varying screen sizes, and resolution across
            different browser OEMs.
            All of these factors contribute to the performance of web apps and can provide top-notch
            experiences when done right.
        <h3><br class="text-dark">Performance Testing Process</h3><br>
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
    data = "Security";
    Link.style.display = 'block';
    Result.style.display = 'block';
    txetContent.style.display = 'none';
    txetContent2.style.display = 'block';
    Title.innerHTML = 'Security Test';
    txetContent2.innerHTML = `<div class="row ">
    <div class="col-md-7">
        <h3><br><br><span class="text-dark">What is security automation?</span></h3><br>
        <p class="content text-light"> Security automation uses software-based processes to programmatically detect, investigate, and fix external threats to applications and systems. This can be done with or without manual intervention. 
            When used to augment existing security processes, automation helps to identify incoming cyber threats,
             prioritize remediation, and provide actionable alerts that allow the security teams to respond quickly.</span></h3><br>
             <h3><br><br><span class="text-dark">Benefits of Security Automation</span></h3><br>
        <p class="content text-light">Faster containment and mitigation—automated tools can immediately execute security playbooks in response to certain types of incidents. 
            This means threats can be contained or even completely eradicated with no human intervention.</p>
    </div>
    <div class="col-md-5 ">
            <img src="images/undraw_secure_server_re_8wsq.svg" class="w-100" alt="All">
    </div>
</div>`;
});

$(Home).click(() => {
    Result.style.display = 'none';
    txetContent.style.display = 'block';
    txetContent2.style.display = 'none';
    Link.style.display = 'none';
    Title.innerHTML = 'Home';
});

$(Analyze).click(async function run() {

    if (data == "Performance") {
        await postUrl();
        await performanceRsulte()
    }
    // else if (data == "All") {
    //     await allRsulte()
    // }
    // else if (data == "SEO") {
    //     await SEO_Rsulte()
    // }
    // else if (data == "Security") {
    //     await securityRsulte()
    // }
    else {
        console.log("error");
    }
});

async function postUrl() {
    let dataLink = {
        "link": Url.value
    }
    let response = await fetch(`https://a5r-testing.herokuapp.com/addNewlink`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataLink)
    });
    let { Link, error } = await response.json()
    console.log(Link, error);
}
async function performanceRsulte() {
    let response = await fetch(`https://a5r-testing.herokuapp.com/getAllTestSpeed`);
    let { message, get } = await response.json();
    console.log(get, message);
    show_Performance_Rsulte(get);
}

function show_Performance_Rsulte(get) {
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
        "LE_CLS",
        "LE_FCP",
        "LE_FID",
        "LE_LCP",
        "LH_CLS",
        "LH_FCP",
        "LH_SI",
        "LH_LCP",
        "LH_TBT",
        "LH_TTI",
        "OLE_CLS",
        "OLE_FCP",
        "OLE_FID",
        "OLE_LCP",
    ]
    for (let i = 0; i < resulte.length; i++) {
        if (resulte[i] === "FAST") {
            obj[i] = {
                icon: "fa-solid fa-plane-departure icon_style",
                barRang: "90",
                barColor: 'green',
            }
        } else if (resulte[i] === "SLOW") {
            obj[i] = {
                icon: "fa-solid fa-bicycle icon_style",
                barRang: "28",
                barColor: 'red',
            }
        } else {
            obj[i] = {
                icon: "fa-solid fa-car-side icon_style",
                barRang: "50",
                barColor: 'yellow',
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
    <div class="d-flex justify-content-center">
        <h5 class="">performance</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[0]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[0].barColor};width: ${obj[0].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[0].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[0].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[1]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[1].barColor};width: ${obj[1].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[1].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[1].icon}"></i>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[2]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[2].barColor};width: ${obj[2].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[2].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[2].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[3]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[3].barColor};width: ${obj[3].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[3].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[3].icon}"></i>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="d-flex align-items-center justify-content-center mb-3">
        <div class="icon d-flex align-items-center justify-content-center">
            <h5>${get.PR_Precentage}%</h5>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <h5 class="">performance</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[4]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[4].barColor};width: ${obj[4].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[4].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[4].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[5]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[5].barColor};width: ${obj[5].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[5].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[5].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[6]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[6].barColor};width: ${obj[6].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[6].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[6].icon}"></i>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[7]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[7].barColor};width: ${obj[7].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[7].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[7].icon}"></i>
            </div>
        </div>    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[8]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[8].barColor};width: ${obj[8].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[8].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[8].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[9]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[9].barColor};width: ${obj[9].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[9].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[9].icon}"></i>
            </div>
        </div>
    </div>
</div>
${3}
<div class="row">
    <div class="d-flex align-items-center justify-content-center mb-3">
        <div class="icon d-flex align-items-center justify-content-center">
            <h5>${get.PR_Precentage}%</h5>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <h5 class="">performance</h5>
    </div>
    <div class="col-md-6 ">    
    <h5 class="text-light mb-0 mt-3">${nameOFresulte[10]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[10].barColor};width: ${obj[10].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[10].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[10].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[11]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[11].barColor};width: ${obj[11].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[11].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[11].icon}"></i>
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-5 ">
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[12]}</h5>
        <div class="progress rounded-pill">
            <div class="progress-bar" style="background-color: ${obj[12].barColor};width: ${obj[12].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[12].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[12].icon}"></i>
            </div>
        </div>
        <h5 class="text-light mb-0 mt-3">${nameOFresulte[13]}</h5>
        <div class="progress rounded-pill ">
            <div class="progress-bar" style="background-color: ${obj[13].barColor};width: ${obj[13].barRang}%" role="progressbar"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${obj[13].barRang}%</div>
            <div class="position-relative ">
                <i class="${obj[13].icon}"></i>
            </div>
        </div>
    </div>
</div>
`;
    ResultInside.innerHTML = Performance_Rsulte;
}