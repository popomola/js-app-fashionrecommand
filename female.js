var randomShirts = [
    {
        imgUrl:"https://akamai.poxo.com/gun181/gun181.cafe24.com/web/product/big/20200116/2794278ce30ee086f03bf231d3fd2d3e.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fchic-line.com%2Fproduct%2F%25EC%25BD%2594%25EC%25BD%2594%25EC%2583%25A4-%25EB%25B8%2594%25EB%259D%25BC%25EC%259A%25B0%25EC%258A%25A4%2F5961%2F&psig=AOvVaw2Cku42w4h9U-E39a7ujbYO&ust=1624433624741000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKD2ivjcqvECFQAAAAAdAAAAABAF",
    },
    {
        imgUrl:"https://m.heyboo.co.kr/web/product/big/201910/9bddb7a2af48454402c3e866ce8e846f.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fheyboo.co.kr%2Fproduct%2F%25EB%2594%25A5%25EB%25AC%25B4%25EB%2593%259C-%25EC%25B9%25B4%25EB%259D%25BC%25EB%25B8%2594%25EB%259D%25BC%25EC%259A%25B0%25EC%258A%25A4%2F4165%2F&psig=AOvVaw2Cku42w4h9U-E39a7ujbYO&ust=1624433624741000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKD2ivjcqvECFQAAAAAdAAAAABAM",
    },
    {
        imgUrl:"https://cdn.jentestore.io/resource/products/138913/138913_1.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fjentestore.com%2Fgoods%2Fview%3Fno%3D138913&psig=AOvVaw2Cku42w4h9U-E39a7ujbYO&ust=1624433624741000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKD2ivjcqvECFQAAAAAdAAAAABAh",
    },
];
var randomPants = [
    {
        imgUrl:"https://m.rums.co.kr/web/product/big/201905/9c9e655986247f1b25151d40cf2bfa33.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Frums.co.kr%2Fproduct%2F%25ED%2582%25A4%25ED%2581%25B0%25EC%2597%25AC%25EC%259E%2590-%25EB%25B0%2594%25EC%25A7%2580%25ED%2584%25B0%25EB%2584%2590-%25EC%2599%2580%25EC%259D%25B4%25EB%2593%259C%25EB%25A9%25B4%25ED%258C%25AC%25EC%25B8%25A0%2F790%2F&psig=AOvVaw2vEA5JHxvZBWPVlFt2Ypxz&ust=1624433721914000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKiQqafdqvECFQAAAAAdAAAAABAD",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgYFPmrOdiwmD1NniZR_rtfBYg2iNjqWq1yxPeLsTJCpm8GFOquJTb14sbhoAc4Qj-LY1fIk&usqp=CAc",
        sellingPageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwiewszJ3arxAhUIrpYKHXQlB-oYABAGGgJ0bA&sig=AOD64_3LoVbJhMmWF1Ew54KPMr2zUPRQEA&adurl&ctype=5&ved=2ahUKEwjR4cLJ3arxAhVFY94KHYE7CWYQwg96BAgBEDY",
    },
    {
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ias190QXYS4VF9ib6qjA249EnFJ5KAfSbFc6CfM7CWzxfSxWaOioMkit_4EyZfxjA8NDp_o&usqp=CAc",
        sellingPageUrl:"https://www.google.com/aclk?sa=l&ai=DChcSEwiewszJ3arxAhUIrpYKHXQlB-oYABAOGgJ0bA&sig=AOD64_13F21YXfwC1oYlgykoaLHn2_LIog&adurl&ctype=5&ved=2ahUKEwjR4cLJ3arxAhVFY94KHYE7CWYQwg96BAgBEFg",
    },
];

//따라서 이 변수들 안에 저장될 값들도 array안에 저장되어 있던 여러 url중 하나가 랜덤하게 선택된 값이다.
//그런데 셔츠셀렉트는 오브젝트가 저장된 array다.
var shirtsSelect;
var pantsSelect;

const styleContainer = document.querySelector(".styleContainer");

function generateRandomClothes(){
     shirtsSelect = randomShirts[Math.floor(Math.random()*randomShirts.length)];
     pantsSelect = randomPants[Math.floor(Math.random()*randomPants.length)];
}

//매개변수는 각각에 해당하는 url이다.
function makeTemplate(shirtImgUrl, shirtBuyUrl, pantImgUrl, pantBuyUrl){
    const div = document.createElement("div");
    
    const shirtsImg = document.createElement("img");
    shirtsImg.src = shirtImgUrl;
    shirtsImg.width = 500;
    shirtsImg.height = 500;
    const shirtsBuyLink = document.createElement("a");
    shirtsBuyLink.innerText = `티셔츠 구매링크:${shirtBuyUrl}`;
    shirtsBuyLink.href = shirtBuyUrl;

    const pantsImg = document.createElement("img");
    pantsImg.src = pantImgUrl;
    pantsImg.width = 500;
    pantsImg.height = 500;
    const pantsBuyLink = document.createElement("a");
    pantsBuyLink.innerText = `바지 구매링크:${pantBuyUrl}`;
    pantsBuyLink.href = pantBuyUrl;

    styleContainer.appendChild(div);
    div.appendChild(shirtsImg);
    div.appendChild(shirtsBuyLink);
    div.appendChild(pantsImg);
    div.appendChild(pantsBuyLink);


}

function displayClothes(){
    generateRandomClothes();
    makeTemplate(shirtsSelect.imgUrl, shirtsSelect.sellingPageUrl, pantsSelect.imgUrl, pantsSelect.sellingPageUrl);
}

displayClothes()
