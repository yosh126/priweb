// mouse stalker
const stalker = document.querySelector('.stalker-container');


// #projects download check container
document.querySelector('.proj1-dlc').addEventListener('click', () => {
    handleChange(1);
});

document.querySelector('.proj2-dlc').addEventListener('click', () => {
    handleChange(2);
});

const handleChange = (num) => {
    if (num == 1) {

        if (document.querySelector('.dlc-container').classList.contains('active')) {
            document.querySelector('.dlc-container').classList.remove('active');
        }

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

        if (document.querySelector('.dlc-container').classList.contains('active')) {
            document.querySelector('.dlc-container').classList.remove('active');
        }

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