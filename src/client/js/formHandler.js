const url = 'http://localhost:8081/api';

function handleSubmit(event) {
    event.preventDefault();
   
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    
    //checkUrl is a function located in urlChecker.js asset 
    const urlValidation = Client.checkUrl(formText);
   
    //url validation
    if (urlValidation) {
    console.log("::: Form Submitted :::");
    
    //POST the input url to server
    const postData = async (path = "", formText) => {//new
       
        const response = await fetch(path, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "text/plain",
            },
            body: formText,
        });

        //Get the response from the server and returns as json
        try {
            const data = await response.json();
            console.log(data);
            
            //Update UI  
            document.getElementById('results').style.display = 'block';
            document.getElementById('agreement').innerHTML = `<strong>Agreement:</strong> ${data.agreement}`;
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById('polarity').innerHTML = `Score: ${data.score_tag}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;

            
        } catch (error) {
            console.log("error", error);
        }
    }; //postData end


// const updateUI = async () => {
//     const request = await fetch("/api");
//     try {
//         const data = await request.json();
//         document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
//         document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
//         document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
//         document.getElementById('polarity').innerHTML = `Score: ${data.score_tag}`;
//     } catch (error) {
//         console.log("error", error);
// }
// };
//Call the function to start POST
postData(url, formText);
// updateUI();
} else {
    alert('The entered URL is not valid. Please try again');
}



//--------------------enable this
// 
    // fetch('http://localhost:8081/api', { 
    //     method: "POST",
    //     credentials: "same-origin",
    //     headers: {
    //         "Content-Type": "text/plain",
    //     },
    //     body: ,
      
    // })
    // .then(res => res.json()) 
    // .then(data => {
    // console.log(data);
    // //Update UI
    // document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
    // document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
    // document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
    // document.getElementById('polarity').innerHTML = `Score: ${data.score_tag}`;


    // })
    //----------------end
}


export { handleSubmit }
