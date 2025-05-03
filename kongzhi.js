window.onload = function {
    const username = sessionStorage.getItem('username');
    
    if (username !== 'Creeper156') {
        document.getElementById('streamArea').innerHTML = `
            <div class="no-stream">
                <h3>只有主播Creeper156可直播</h3>
                <p>当前用户： $ {username}</p>
            </div>
        `;
    }
}