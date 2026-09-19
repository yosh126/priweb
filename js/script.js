// mouse stalker
const stalker = document.getElementById('stalker-container');

document.addEventListener('mousemove', (e) => {
    stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(0.4, 0.4)`;
});

document.addEventListener('mouseleave', () => {
    stalker.classList.remove('active');
});

document.addEventListener('mouseenter', () => {
    stalker.classList.add('active');
});


// #projects download check container
document.querySelector('.proj1-dlc').addEventListener('click', () => {
    handleChange(1);
});

document.querySelector('.proj2-dlc').addEventListener('click', () => {
    handleChange(2);
});

const handleChange = (num) => {

    if (document.querySelector('.dlc-container').classList.contains('active')) {
        document.querySelector('.dlc-container').classList.remove('active');
    }

    if (num == 1) {

        const change1 = `
        <div class="dlc-btm1">
            <a href="./src/project1.zip" download="">
                <div class="dlcbtn">
                    <span class="dlcbtn-text">
                        OK
                    </span>
                </div>
            </a>
            <div class="dlcbtn">
                <span class="dlcbtn-text">
                    キャンセル
                </span>
            </div>
            <span class="dlc-num">
                DL - I.
            </span>
        </div>
        `;

        document.querySelector('.dlc-btm').innerHTML = change1;

    } else if (num == 2) {

        const change2 = `
        <div class="dlc-btm2">
            <a href="./src/project2.zip" download="">
                <div class="dlcbtn">
                    <span class="dlcbtn-text">
                        OK
                    </span>
                </div>
            </a>
            <div class="dlcbtn">
                <span class="dlcbtn-text">
                    キャンセル
                </span>
            </div>
            <span class="dlc-num">
                DL - II.
            </span>
        </div>
        `;

        document.querySelector('.dlc-btm').innerHTML = change2;
    }

    document.querySelector('.dlc-container').classList.add('active');


    document.querySelectorAll('.dlcbtn').forEach(elm => {
        elm.addEventListener('click', () => {
            document.querySelector('.dlc-container').classList.remove('active');
        });
    });
}


// date in stump of motion
const nows = new Date();
document.querySelector('.stump-date').textContent = `${nows.getFullYear()}.${nows.getMonth() + 1}.${nows.getDate()}`;
