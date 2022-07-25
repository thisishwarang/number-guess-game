// //랜덤 숫자 지정
// //유저가 숫자를 입력, go버튼 누름
// //만약 유저가 숫자를 맞추면 -> 맞췄습니다!
// //랜덤숫자 < 유저숫자 down!
// //랜덤숫자 > 유저숫자 up!
// //reset 버튼을 누르면 게임 리셋
// //5번의 기회를 다쓰면 게임 끝 (go버튼 비활성화)
// //유저가 범위 이상, 이하의 값을 입려하면 범위 내의 숫자를 입력하라고 말해주고, 기회 깍지 않는다
// //유저가 이미 입력한 숫자라면 알려준다, 기회 깍지 않는다

// let randomNumber = 0;
// let goButton = document.querySelector('#go-button')
// let userInput = document.querySelector('#user-input')
// let resultArea = document.querySelector('#result-area')
// let resetButton = document.querySelector('#reset-button')
// let chanceArea = document.querySelector('#chance-area')
// let chance = 5
// let gameOver = false
// let history = []

// goButton.addEventListener("click", () => {
//     let userValue = userInput.value

//     //유효성 검사
//     if(userValue<1 || userValue>100) {
//         resultArea.textContent = "1과 100사이 숫자를 입력해 주세요"
//         return
//     }
//     //이 if문이 history.push(userValue) 밑으로 가면 계속 이미 입력한 숫자입니다 라고 뜸
//     if(history.includes(userValue)){
//         resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
//         return
//     }
    
//     chance--
//     chanceArea.textContent = `남은 기회 : ${chance}번`
//     if(userValue < randomNumber) {
//         resultArea.textContent = "UP!!"
//     } else if (userValue > randomNumber){
//         resultArea.textContent = "DOWN!!"
//     } else {
//         resultArea.textContent = "정답입니다!!"
//         gameOver = true
//     }

//     history.push(userValue)
    

//     if(chance < 1) {
//         gameOver = true
//     }
//     if(gameOver == true) {
//         goButton.disabled = true
//     }
// }
// )

// resetButton.addEventListener("click", () => {
//     userInput.value = ""
//     pickRandomNum()

//     resultArea.textContent = "숫자를 입력해 주세요"
// })

// userInput.addEventListener("focus", () => {
//     userInput.value = ""
// })

// function pickRandomNum() {
//     randomNumber = Math.floor(Math.random() * 100) + 1
//     console.log(randomNumber)
// }
// pickRandomNum()

//랜덤 숫자를 받는다
//유저에게 숫자를 입력받고, go버튼을 누른다
//유저 숫자 < 랜덤 숫자 -> up!
//유저 숫자 > 랜덤 숫자 -> down!
//숫자를 맞추면 -> 맞췄습니다! (go버튼 비활성화)
//reset버튼 누르면 리셋
//5번의 기회를 주고 기회를 다쓰면 go버튼 비활성화
//유저가 범위 밖의 숫자를 입력했을 때 알려줌 (기회 깍지 않음)
//유저가 같은 숫자를 반복입력 했을 때 알려줌 (기회 깍지 않음)

let randomNum = 0
let userInput = document.querySelector('#user-input')
let goButton = document.querySelector('#go-button')
let resetButton = document.querySelector('#reset-button')
let chanceArea = document.querySelector('#chance-area')
let resultArea = document.querySelector('#result-area')
let chance = 5
let gameOver = false
let history = []

goButton.addEventListener("click", () => {
    let userValue = userInput.value

    if(userValue<1 || userValue>100) {
        resultArea.textContent = "1부터 100까지의 숫자를 입력해 주세요"
        return //남은 찬스를 깍지 않도록 return함
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 같은 숫자를 입력했었습니다"
        return //남은 찬스를 깍지 않도록 return함
    }


    chance--
    chanceArea.textContent = `남은 기회 : ${chance}번`

    if(userValue < randomNum) {
        resultArea.textContent = "UP!!"
    } else if (userValue > randomNum){
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "정답입니다!!"
        gameOver = true
    }

    history.push(userValue)

    if(chance < 1){
        resultArea.textContent = `정답은 ${randomNum}이었습니다!`
        gameOver = true
    }
    if(gameOver == true) {
        goButton.disabled = true
    }
})

resetButton.addEventListener("click", () => {
    userInput.value = ""
    randomNumber()
    gameOver = false
    goButton.disabled = false
    chance = 5
    chanceArea.textContent = `남은 기회 : ${chance}번`
    history = []

    resultArea.textContent = "숫자를 입력해 주세요"
})

userInput.addEventListener("focus", () => {
    userInput.value = ""
})

function randomNumber () {
    randomNum = Math.floor(Math.random() * 100) + 1
    console.log(randomNum)
}
randomNumber()