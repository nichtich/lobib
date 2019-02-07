
<script>
      
      

      var header = document.querySelector('header');
      var section = document.querySelector('section');

      var requestURL ='https://github.com/bellerophons-pegasus/lobib/raw/master/test.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      
      request.onload = function() {
        var superHeroes = request.response;
        populateHeader(superHeroes);
        showHeroes(superHeroes);
      }
      
      function populateHeader(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['squadName'];
        header.appendChild(myH1);

        var myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
        header.appendChild(myPara);
      }
    </script>
