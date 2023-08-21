window.onload = function(){ 
    const block = document.getElementById('block'),
        mapsjs = document.getElementById('alldiv');
    block.onmouseover = function () {
    mapsjs.style.display = 'flex';
    block.style.display = 'none'
    mapsjs.style.transition = '1s';
    }
    mapsjs.onmouseout = function () {
    mapsjs.style.display = 'none';
    block.style.display = 'flex'
    }
    
    
    
    const blocksec = document.getElementById('blocksec'),
        mapsjssec = document.getElementById('alldivsec');
    blocksec.onmouseover = function () {
    mapsjssec.style.display = 'flex';
    blocksec.style.display = 'none'
    mapsjssec.style.transition = '1s';
    }
    mapsjssec.onmouseout = function () {
    mapsjssec.style.display = 'none';
    blocksec.style.display = 'flex'
    }
    
    
    const blockthird = document.getElementById('blockthird'),
        mapsthird = document.getElementById('alldivthird');
        blockthird.onmouseover = function () {
        mapsthird.style.display = 'flex';
        blockthird.style.display = 'none'
    }
    mapsthird.onmouseout = function () {
        mapsthird.style.display = 'none';
        blockthird.style.display = 'flex'
    }
    
    
    };  