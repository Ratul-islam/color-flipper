const codes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

document.querySelector('.btn').addEventListener('click',()=>{
    function a(a){
        return a = Math.floor(Math.random()* codes.length);
    }
    document.getElementById('bg').style.backgroundColor = '#'+codes[a()]+codes[a()]+codes[a()]
    document.querySelector('.h2').innerHTML = 'color code is : #'+codes[a()]+codes[a()]+codes[a()];
})

