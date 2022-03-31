var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
    ]
    var age = [
    "teenager",
    "adult"
    ]


for(i=0; i<100; i++)
{
    var cate = category[Math.floor(Math.random() * (category.length))];
    var a = age[Math.floor(Math.random() * (age.length))];
    var v = Math.floor(Math.random()*100);
    var obj = {age:a,category:cate,visitor:v}
    console.log(obj)
    
}