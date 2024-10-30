// List of keywords or phrases to highlight
const keywords = ["fake news", "misinformation", "hoax", "unverified", "rumor"];

// Function to create a tooltip element
function createTooltip(text) {
    const tooltip = document.createElement('span');
    tooltip.className = 'factcheck-tooltip';
    tooltip.innerText = text;
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#FFD700';
    tooltip.style.color = '#000';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '1000';
    tooltip.style.display = 'none';  // Start hidden
    document.body.appendChild(tooltip);
    return tooltip;
}

// Highlight and check keywords on the page
function highlightKeywords() {
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
        const elements = document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6"); // Check common text elements

        elements.forEach(element => {
            if (element.innerHTML.match(regex)) {
                const newHTML = element.innerHTML.replace(regex, `<span class="highlighted">$1</span>`);
                element.innerHTML = newHTML;
            }
        });
    });
}

// Initialize tooltip for displaying fact-check information
const tooltip = createTooltip("This content may be unverified. Click here to fact-check.");

// Function to show tooltip near the hovered element
function showTooltip(event) {
    tooltip.classList.add('show');  // Add 'show' class to trigger animation
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 5}px`;
    tooltip.style.top = `${event.pageY + 5}px`;
}

// Function to hide tooltip
function hideTooltip() {
    tooltip.classList.remove('show');  // Remove 'show' class to hide animation
    tooltip.style.display = 'none';
}

// // Function to create and display an information card with slide animation
// function createInfoCard(text) {
//     const card = document.createElement('div');
//     card.className = 'factcheck-card';
//     card.innerHTML = `
//         <div class="card-header">Fact Check Information</div>
//         <div class="card-body">
//             <p>${text}</p>
//             <button id="closeCard">Close</button>
//         </div>
//     `;
//     document.body.appendChild(card);

//     // Delay to apply 'show' class for animation
//     setTimeout(() => card.classList.add('show'), 10);

//     document.getElementById("closeCard").addEventListener("click", () => {
//         card.classList.remove('show');
//         setTimeout(() => card.remove(), 300); // Delay removal for exit animation
//     });
// }

// // Add event listeners to highlighted words
// function addTooltipEvents() {
//     document.querySelectorAll(".highlighted").forEach(element => {
//         element.style.backgroundColor = '#FFD700';
//         element.style.cursor = 'pointer';

//         // Show tooltip on hover
//         element.addEventListener('mouseenter', showTooltip);
//         element.addEventListener('mouseleave', hideTooltip);

//         // Show info card on click
//         element.addEventListener('click', () => {
//             createInfoCard("This content may be unverified. Please check with trusted sources.");
//         });
//     });
// }

// // Listen for message from background.js
// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//     if (request.text) {
//       const selectedText = request.text;
      
//       // Call the misinformation detection API with the selected text
//       const isMisinformation = await checkForMisinformation(selectedText);
      
//       // Highlight if API confirms misinformation
//       if (isMisinformation) {
//         highlightText(selectedText);
//       }
//     }
//   });
  
//   // Function to check selected text with API
//   async function checkForMisinformation(text) {
//     try {
//       const response = await fetch(`https://console.cloud.google.com/apis/credentials/key/0a5c8832-6622-4bf0-9bda-e0ca535e37eb?project=delta-era-440006-v4`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer AIzaSyCxyAMfDVlHvLH1PHGW4NC-QSrxdE_oXqw"
//         },
//         body: JSON.stringify({ query: text })
//       });
  
//       const data = await response.json();
  
//       // Assuming the API response contains a field "isMisinformation"
//       return data.isMisinformation === true;
//     } catch (error) {
//       console.error("Error checking for misinformation:", error);
//       return false;
//     }
//   }
  
// //   // Function to highlight the selected text
// //   function highlightText(selectedText) {
// //     const selection = window.getSelection();
// //     const range = selection.getRangeAt(0);
  
// //     const span = document.createElement("span");
// //     span.style.backgroundColor = "red";
// //     span.style.color = "white";
// //     span.textContent = selectedText;
  
// //     range.deleteContents();
// //     range.insertNode(span);
// //   }
  

// // // Run the functions to highlight keywords and attach events
// // highlightKeywords();
// // addTooltipEvents();

// // // content.js
// // console.log("Content script loaded and ready to receive messages.");


// // // content.js
// // function checkMisinformation(selectedText) {
// //     fetch('http://127.0.0.1:5000/factcheck', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ query: selectedText })
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //         if (data.claims && data.claims.length > 0) {
// //             // Highlight the text or perform other actions with the data
// //             console.log("Misinformation found:", data.claims);
// //         } else {
// //             console.log("No misinformation found.");
// //         }
// //     })
// //     .catch(error => console.error("Error checking for misinformation:", error));
// // }
 