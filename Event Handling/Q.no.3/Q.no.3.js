   // Select all <p> elements
   const paragraphs = document.querySelectorAll("p");

   // Iterate over all <p> elements and add event listeners dynamically
   paragraphs.forEach(p => {
       // Mouse enters: change background color
       p.addEventListener("pointerenter", () => {
           p.style.backgroundColor = "blue";
       });

       // Mouse leaves: revert background color
       p.addEventListener("pointerleave", () => {
           p.style.backgroundColor = "white";
       });
   });