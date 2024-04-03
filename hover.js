const triggers = document.getElementsByClassName("event-item");
const informations = document.getElementsByClassName("info-item");

let active = [false, false, false, false, false];

for (let i = 0; i < triggers.length; i++) {
    triggers[i].onclick = function() {
        if (!active[i]) {
            triggers[i].setAttribute("src", "images/cross.svg");
            switch (i) {
                case 0:
                    informations[0].textContent = "При вирощені продуктів екологічним шляхом не застосовуються пестициди та небезпечні добрива, а це у свою чергу позитивно впливає на стан землі та завдяки органічним методам вирощування (компостування, використання зелених добрив тощо) сприяє зменшенню ерозії ґрунтів.";
                    break;
                case 1:
                    informations[1].textContent = "Екологічна сировина під час виробництва переробляється методами, котрі максимально зберігають корисні речовини. При цьому заборонене використання радіаційного випромінення, хімічних добрив, пестицидів, генетичного модифікованих організмів, консервантів. ";
                    break;
                case 2:
                    informations[2].textContent = "Оскільки екологічні, у більшості саме органічні, продукти не мають у собі різноманітних шкідливих хімічних елементів, то через це люди, що їх споживають регулярно мають менший ризик появи алергічних реакцій, зміцнюють свою імунну й травну системи. Також, завдяки дослідженням групи вчених із Ньюкаслського університету, що базується у Великобританії населення свату отримало чудові інформацію: вміст антиоксидантів в органічних речовинах значно більший, ніж у звичайних продуктах: цей показник сягає різниці у 16-69%";
                    break;
                case 3:
                    informations[3].textContent = "Попит на екопродукцію може стимулювати розвиток екологічно орієнтованих галузей виробництва. Це може призвести до створення нових робочих місць і росту економіки в цих секторах. Окрім того, екологічні практики, такі як використання відновлюваних ресурсів та зменшення викидів, можуть допомогти зменшити витрати на енергію та ресурси у довгостроковій перспективі, що користується економіці в цілому. Також, підвищення усвідомленості про екологічні питання може стимулювати";
                    break;
                case 4:
                    informations[4].textContent = "При вирощені продуктів екологічним шляхом не застосовуються пестициди та небезпечні добрива, а це у свою чергу позитивно впливає на стан землі та завдяки органічним методам вирощування (компостування, використання зелених добрив тощо) сприяє зменшенню ерозії ґрунтів.";
                    break;
            }
            active[i] = true;
        } else {
            triggers[i].setAttribute("src", "images/chercmark.svg");   
            informations[i].textContent = "";
            active[i] = false;
        }
    };
}