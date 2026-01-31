// index.htmlのTOP画像をランダムに回す

window.onload =  () =>  {
    const TOTAL_IMAGES = 2; // 画像が増えたらここだけ変える
    
    const num = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
    
    const profileImg = document.querySelector<HTMLImageElement>('.profile-img');
    if (profileImg) {
        profileImg.src = `/assets/images/profile/${num}.jpg`;
    }
};