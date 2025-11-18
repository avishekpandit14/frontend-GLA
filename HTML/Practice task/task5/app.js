 document.getElementById("companyForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      let companyData = {
        name: document.getElementById("companyName").value,
        motto: document.getElementById("motto").value,
        image: document.getElementById("image").value
      };

      console.log(companyData);
      
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${companyData.image}" alt="Company Logo">
        <h3>${companyData.name}</h3>
        <p>${companyData.motto}</p>
      `;

      document.getElementById("cardContainer").appendChild(card);

      document.getElementById("companyForm").reset();
    });

