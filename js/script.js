// bages
let ALL = document.getElementById('ALL');
let SEO = document.getElementById('SEO');
let PERFORMANCE = document.getElementById('PERFORMANCE');
let SECURITY = document.getElementById('SECURITY');
let Home = document.getElementById('Home');
let Title = document.getElementById('Title');
let Link = document.getElementById('Link');
let Analyze = document.getElementById('Analyze');
let Url = document.getElementById('Url');
// content of bages
let txetContent = document.getElementById('txetContent')
let txetContent2 = document.getElementById('txetContent2')

let data;
$(ALL).click(() => {
    data = "All"
    Title.innerHTML = 'Test All';
    Link.style.display = 'block';
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

SEO.addEventListener('click', () => {
    data = "SEO";
    Link.style.display = 'block';
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

})

PERFORMANCE.addEventListener('click', () => {
    data = "Performance";
    Link.style.display = 'block';
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
})

SECURITY.addEventListener('click', () => {
    data = "Security";
    Link.style.display = 'block';
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
})
Home.addEventListener('click', () => {
    txetContent.style.display = 'block';
    txetContent2.style.display = 'none';
    Link.style.display = 'none';
    Title.innerHTML = 'Home';
})
Analyze.addEventListener('click', async function postUrl() {
    if (data == "All") {
        let dataLink = {
            "link": Url.value
        }
        let response = await fetch(`https://a5r-testing.herokuapp.com/addNewlink`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataLink)
        });
        let { Link } = await response.json()
        console.log(Link);
    }
    else {
        console.log("false");
    }
});