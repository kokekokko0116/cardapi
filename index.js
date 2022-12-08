
  const PORT = 8000;
  
  const http = require("http"); // HTTPサーバーとクライアントを使用出来る
  const express = require("express");
  const axios = require("axios");
  const cheerio = require("cheerio");
  
  const app = express();
  
  // // webサーバー作成
  // const server = http.createServer((req,res) =>{
  //   res.writeHead(200, {"Content-Type":"text/html"})
  //   res.write("<h1>こんにちは</h1>")
  //   res.end();
  // });

  // server.listen(PORT, () =>{
  //   console.log("Server running");
  // });

  app.listen(PORT, () =>{
    console.log("surver running!");
  }); // ローカルサーバーの立ち上げ

  // スクレイピング
  const URL = "https://yuyu-tei.jp/game_poc/buy/buy_price.php?ver=s11a";
  const data =[];
  axios(URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
  
    const $ = cheerio.load(htmlParser);
  
    $(".card_list_box li", htmlParser).each(function(){
      // const image = $(this).find("").text();
      const name = $(this).find(".name").text();
      const price = $(this).find(".price del").text();
      const up = $(this).find(".price b").text();
      data.push({name,up});
      console.log(data);

    // $(".name", htmlParser).each(function(){
    //   // const image = $(this).find("").text();
    //   const name = $(this).find("a").text();
    //   data.push({name});
    //   console.log(data);
    // });
  
  })
});


  


  app.get("/api/pokemoncard", (req,res) =>{
    res.send(data);
  });

  // データの送信(作成)
  app.post("/api/pokemoncard", (req,res) =>{
    
  });
