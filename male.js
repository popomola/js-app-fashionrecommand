var randomShirts = [
    {
        imgUrl:"https://ggons.co.kr/web/product/big/201810/f6cdd3bcd065272af68b879f1ad68e93.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fggons.co.kr%2Fproduct%2F%25EC%2586%258C%25EB%25A7%25A4-%25EB%25A7%2588%25ED%258B%25B8%25EB%258B%25A4-%25EB%25A0%2588%25EC%2598%25B9-%25ED%259B%2584%25EB%2593%259C%25ED%258B%25B0-2color%2F735%2F&psig=AOvVaw2oLXdnfT3gyAHSoaZ3ccDF&ust=1624431679428000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIjblaPYqvECFQAAAAAdAAAAABAM",
    },
    {
        imgUrl:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc0%2F36%2Fc036472279d9f4c0e179962cc48d5ce9952388e6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_hoodiesswetshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww2.hm.com%2Fko_kr%2Fproductpage.0794575040.html&psig=AOvVaw2oLXdnfT3gyAHSoaZ3ccDF&ust=1624431679428000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIjblaPYqvECFQAAAAAdAAAAABAT",
    },
    {
        imgUrl:"http://image.player.co.kr/goods_img1/20200115/1501271/1501271_a_500.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.player.co.kr%2Fstore%2Fdetail%2F1501271%2F0&psig=AOvVaw2oLXdnfT3gyAHSoaZ3ccDF&ust=1624431679428000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIjblaPYqvECFQAAAAAdAAAAABAZ",
    },
];
var randomPants = [
    {
        imgUrl:"https://m.whossom.com/web/product/medium/201909/366e60c64ec2ed6ad4b9aa3eae299ff8.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwhossom.com%2Fcategory%2F%25EB%25B0%2594%25EC%25A7%2580%2F79%2F&psig=AOvVaw2r9Tr8ofgqab1oK1kPtY4B&ust=1624433302741000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDk7N7bqvECFQAAAAAdAAAAABAE",
    },
    {
        imgUrl:"https://image.msscdn.net/images/goods_img/20180914/858911/858911_6_500.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsearch.musinsa.com%2Fsearch%2Fmusinsa%2Fintegration%3Fq%3D%25EC%25B2%25AD%25EB%25B0%2594%25EC%25A7%2580&psig=AOvVaw1xskbS4KXKeCZ2easAAPz3&ust=1624433337410000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCk4e7bqvECFQAAAAAdAAAAABAF",
    },
    {
        imgUrl:"http://m.modmartin.co.kr/web/product/big/201504/171_shop1_726390.jpg",
        sellingPageUrl:"https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.modmartin.co.kr%2Fproduct%2Fdetail.html%3Fproduct_no%3D233&psig=AOvVaw0QDEB786MJPlwFRrJ4UVNS&ust=1624433392744000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjhwoncqvECFQAAAAAdAAAAABAE",
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
