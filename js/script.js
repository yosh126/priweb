// mouse stalker
const stalker = document.getElementById('stalker-car');

// background切り替え用
// let lastX = 0;

document.addEventListener('mousemove', (e) => {
    // マウスカーソルの位置座標を取得
    const x = e.clientX;
    const y = e.clientY;

    stalker.style.transform = `translate(${x}px, ${y}px) scale(0.25)`;
});

document.addEventListener('mouseleave', () => {
    stalker.classList.remove('active');
});

document.addEventListener('mouseenter', () => {
    stalker.classList.add('active');
});
