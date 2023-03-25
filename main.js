async function populate() {
    const myRequest = new Request("annan_guxue.json");
    const myURL = myRequest.url
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const nannysSites = await response.json();
  
    populateHeader(nannysSites);
    populateSites(nannysSites);
  }
 
function populateSites(obj) {
    const section = document.querySelector('section');
    const sites = obj.members;
  
    for (const site of sites) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = site.name;
      myPara1.textContent = `Secret identity: ${site.secretIdentity}`;
      myPara2.textContent = `Age: ${site.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = site.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.name;
    header.appendChild(myH1);
  }
  