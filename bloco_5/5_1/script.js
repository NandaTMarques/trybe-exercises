 /*1. Acesse o elemento elementoOndeVoceEsta.*/
 document.getElementById('elementoOndeVoceEsta');

 /*2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.*/
 document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'blue';

 /*3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.*/
 document.getElementById('primeiroFilho').innerText = 'Sou Fernanda, filha mais nova.'

 /*4. Acesse o primeiroFilho a partir de pai.*/
 document.getElementById('pai').firstElementChild;

 /*5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.*/
 document.getElementById('elementoOndeVoceEsta').firstElementChild;

 /*6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.*/
 document.getElementById('elementoOndeVoceEsta').nextSibling;

 /*7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.*/
 document.getElementById('elementoOndeVoceEsta').nextElementSibling;

 /*8. Agora acesse o terceiroFilho a partir de pai.*/
 document.getElementById("pai").children[2];

/*Crie um irmão para elementoOndeVoceEsta.*/
 let novoFilho = document.createElement('div');
 novoFilho.innerText = 'newfilho';
 pai.appendChild(novoFilho);
 console.log(pai);

/*Crie um filho para elementoOndeVoceEsta.*/
let novoFilhoEOVcESta = document.createElement('p');
novoFilhoEOVcESta.innerText = 'novoFilhoEOVcESta';
novoFilhoEOVcESta.className = 'novoFilhoEOVcESta'
elementoOndeVoceEsta.appendChild(novoFilhoEOVcESta);
console.log(elementoOndeVoceEsta);

/*Crie um filho para primeiroFilhoDoFilho.*/
let filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
filhoDoPrimeiroFilhoDoFilho.innerText = 'filhoDoPrimeiroFilhoDoFilho';
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
console.log(primeiroFilhoDoFilho);

/*A partir desse filho criado, acesse terceiroFilho.*/


/*Remova todos os elementos da página, menos pai, elementoOndeVoceEsta
 e primeiroFilhoDoFilho.*/
pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);
pai.removeChild(novoFilho);
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);
elementoOndeVoceEsta.removeChild(novoFilhoEOVcESta);
elementoOndeVoceEsta.nextSibling.remove();
