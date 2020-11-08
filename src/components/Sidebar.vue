<template>
    <div>
        <div id="topBar">
            <div id="title">
                <router-link to="/">
                    <h2>NAME of Program</h2>
                </router-link>
            </div>
            <div id="button" @click="test()" :class="isClicked? 'moveRight' : 'moveLeft'">
                <div id="first">
                    <div id="bar1"></div>
                </div>
                <div id="second">
                    <div id="bar2"></div>
                </div>
                <div id="thrid">
                    <div id="bar3"></div>
                </div>
            </div>
        </div>
        <!-- 메뉴 -->
        <div id="menu" :class="isClicked? 'open' : 'close'">
            <ul>
                <li>
                    <v-img
                    :src="require('../assets/logo.svg')"
                    width="300px"
                    height="300px"
                    >
                    </v-img>

                </li>
                <li>
                    메뉴 1
                </li>
                <li>
                    메뉴 2
                </li>
                <li>
                    메뉴 3
                </li>
            </ul>
        </div>
        <!-- 어두워지는 배경 -->
        <div id="backGround" @click="test()" :class="isClicked? 'bgOpen' : 'bgClose'"></div>
    </div>
</template>

<script>
  export default {
    data: () => ({
        isClicked : false,
    }),
    methods: {
        test() {
            let first = document.getElementById("first");
            let t = document.querySelector("#bar2");
            let thrid = document.getElementById("thrid");

            //열때
            if(this.isClicked === false) {
                //1,3 번 막대 회전
                first.style.transform = "rotate( 17deg )";
                thrid.style.transform = "rotate( -17deg )";
                first.style.transformOrigin = "left top";
                thrid.style.transformOrigin = "left bottom";
                first.style.transition = "0.4s";
                thrid.style.transition = "0.4s";

                //2번 막대 변환(길이 짧게)
                t.style.width = "0px"
                t.style.transition = "0.2s";

                this.isClicked = true;
            }
            else {
                //1,3 번 막대 회전
                first.style.transform = "rotate( -0deg )";
                thrid.style.transform = "rotate( -0deg )";

                //2번 막대 변환(길이 원래대로)
                t.style.width = "50px";

                this.isClicked = false;
            }
        }
    },
  }
</script>

<style scope>

/* 

메뉴바 : 메뉴버튼 누르면 나오는거

z-index
상단바 : 10
메뉴 열리면 나오는 어두운 배경 : 100
버튼 : 101
메뉴바 : 101
 */

/* 타이틀 */
#title {
    text-align: center;
    cursor: default;
}

/* 메뉴 */
#menu {
    top: 0px;
    width: 300px;
    height: 100vh;
    z-index: 101;
    background-color: red;
}

/* 상단바 */
#topBar {
    z-index: 10;
    margin: 0;
    padding: 0;
    height: 40px;
    width: 100vw;
    background: saddlebrown;
}

#button {
    z-index: 101;
    position: fixed;
    background-color: blue;
    width: 60px;
    height: 30px;
    top: 5px;
}

#button.moveLeft, #button.moveRight :hover {
    cursor: pointer;
}

/* 메뉴버튼 막대 색, 크기 */
#bar1, #bar2, #bar3 {
    background-color: red;
    width: 50px;
    height: 2px;
}

/* 메뉴버튼 막대기 3 개의 위치 */
#first {
    position: absolute;
    top: 25%;
    left: 6%;
    transform: translate(5%, -25%);
}

#second {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(5%, -50%);
}

#thrid {
    position: absolute;
    top: 75%;
    left: 6%;
    transform: translate(5%, -75%);

}

/* 메뉴가 열리고닫힐 때 메뉴버튼 css */
.moveRight {
    position: fixed;
    transition: 0.3s;
    left: 300px;
}

.moveLeft {
    position: fixed;
    transition: 0.3s;
    left: 10px;
}

/* 메뉴가 열리고, 닫힐때 메뉴바 css */
.open {
    position: fixed;
    transition: 0.3s;
    top: 100px;
    left: 0px;
}

.close {
    position: fixed;
    transition: 0.3s;
    top: 100px;
    left: -300px;
}

/* 메뉴가 열리고 닫힐 때 뒷 배경 변환 */
.bgOpen {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    width: 100vw;
    height: 100vh;    
}

.bgClose {
    display: none;
}
</style>